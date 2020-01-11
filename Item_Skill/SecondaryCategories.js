//
//  拡張カテゴリ ver1.04
//  類型擴張
// 
//
// ------------------------------------------------------
// Copyright (c) 2016 Yana
// Released under the MIT license
// http://opensource.org/licenses/mit-license.php
// ------------------------------------------------------
//
// author Yana
//

var Imported = Imported || {};
Imported['SecondaryCategories'] = 1.04;

/*:
 * @plugindesc ver1.04 / 允許設定道具的次要類型。
 * @author Yana ( 翻譯 : ReIris )
 *
 * @param UseSubItemCategory
 * @text 使用次要道具類型
 * @desc 選擇道具類型時是否允許使用上、下鍵切換次要類型。
 * @type boolean
 * @default true
 *
 * @param AllIncludesCategory
 * @text 全部類型名稱
 * @desc 顯示所有道具類別的名稱。
 * 在按類型指定時使用。
 * @default 全部
 *
 * @param UseArrows
 * @text 光標提示
 * @desc 有次要類型存在時，是否顯示箭頭光標。
 * @type boolean
 * @default true
 *
 * @help------------------------------------------------------
 * 沒有插件命令。
 * ------------------------------------------------------
 * ------------------------------------------------------
 * 使用方法
 * ------------------------------------------------------
 * 在道具的注釋欄中
 * <分類:xxx>
 * <Category:xxx>
 * 輸入以上內容。
 *
 * 如果有注釋內容，則該道具是該次要類型中的道具。
 * 如果某道具是一件道具，並且是盔甲，則該道具的原始類型（例如盔甲）會自動添加。
 * 另外，將插件參數中指定的所有類型添加到所有道具中。
 *
 * 當「使用次要道具類型」為 true 時，當在選擇類型視窗時，
 * 可以使用上、下鍵選擇的類別切換到次要類型。
 * ------------------------------------------------------
 * 使用規定
 * ------------------------------------------------------
 * 該插件是根據 MIT 許可發佈的。
 * 沒有使用限制。可用於商業遊戲和成人遊戲。
 * 不限制二次發佈，但不支援使用。
 * 版權聲明是任意的。也可以直接使用該插件。
 * 總而言之沒有特定的規則。
 * 如果您對錯誤報告或用法有任何疑問，請聯絡「ネ実ツクスレ」或 Twitter。
 * https://twitter.com/yanatsuki_
 * 使用該素材請作者後果自負。
 * ------------------------------------------------------
 * 更新履歴:
 * ver1.04:180917
 * カテゴリ数が変わった時、アロー表示がずれるバグを修正。
 * ver1.03:180408
 * 装備タイプのカテゴリ名が他のカテゴリ名と重複表示されるバグを修正。
 * セカンダリカテゴリが存在するとき、アローを表示をする設定を追加。
 * プラグインパラメータの仕様を1.5.0に更新。
 * ver1.02:170110-2
 * 武器と防具のコマンド名がカテゴリに登録されていなかったバグを修正。
 * ver1.01:170110-1
 * セカンダリカテゴリの選択をホイールでもできるように機能を追加
 * ver1.00:
 * 公開
 */

(function() {

    'use strict';

    ////////////////////////////////////////////////////////////////////////////////////

    var parameters = PluginManager.parameters('SecondaryCategories');
    var useSubItemCategory = parameters['UseSubItemCategory'] === 'true';
    var allIncludesCategory = parameters['AllIncludesCategory'];
    var useArrows = parameters['UseArrows'] === 'true';

    ////////////////////////////////////////////////////////////////////////////////////

    DataManager.itemSecondaryCategories = function(item) {
        if (!item) return [];
        if (item._secondaryCategories) return item._secondaryCategories;
        item._secondaryCategories = [allIncludesCategory];
        var texts = item.note.split('\n');
        for (var i =0,max=texts.length;i<max;i++) {
            var text = texts[i];
            if (text.match(/<(?:分類|Category):(.+)>/)) {
                var cn = RegExp.$1;
                item._secondaryCategories.push(cn);
            }
        }
        if (this.isItemEx(item) && item.itypeId === 1){
            item._secondaryCategories.push(TextManager.item);
        } else if (this.isWeaponEx(item)) {
            var wtype = $dataSystem.weaponTypes[item.wtypeId];
            if (wtype && item._secondaryCategories.indexOf(wtype) < 0) item._secondaryCategories.push(wtype);
            var etype = $dataSystem.equipTypes[item.etypeId];
            if (item._secondaryCategories.indexOf(etype) < 0) item._secondaryCategories.push(etype);
            var weapon = TextManager.weapon;
            if (item._secondaryCategories.indexOf(weapon) < 0) item._secondaryCategories.push(weapon);
        } else if (this.isArmorEx(item)) {
            var atype = $dataSystem.armorTypes[item.atypeId];
            if (atype && item._secondaryCategories.indexOf(atype) < 0) item._secondaryCategories.push(atype);
            var etype = $dataSystem.equipTypes[item.etypeId];
            if (item._secondaryCategories.indexOf(etype) < 0) item._secondaryCategories.push(etype);
            var armor = TextManager.armor;
            if (item._secondaryCategories.indexOf(armor) < 0) item._secondaryCategories.push(armor);
        } else if (this.isItemEx(item) && item.itypeId === 2) {
            item._secondaryCategories.push(TextManager.keyItem);
        }
        return item._secondaryCategories;
    };
    
    DataManager.isItemEx = function(item) {
        if (!item._type) this.initItemType(item);
        return item._itemType === 0;
    };
    
    DataManager.isWeaponEx = function(item) {
        if (!item._type) this.initItemType(item);
        return item._itemType === 1;
    };
    
    DataManager.isArmorEx = function(item) {
        if (!item._type) this.initItemType(item);
        return item._itemType === 2;
    };
    
    DataManager.isSkillEx = function(item) {
        if (!item._type) this.initItemType(item);
        return item._itemType === 3;
    };
    
    DataManager.initItemType = function(item) {
        item._itemType = -1;
        if (DataManager.isItem(item))   item._itemType = 0;
        if (DataManager.isWeapon(item)) item._itemType = 1;
        if (DataManager.isArmor(item))  item._itemType = 2;
        if (DataManager.isSkill(item))  item._itemType = 3;
    };

    ////////////////////////////////////////////////////////////////////////////////////

    if (useSubItemCategory) {

        var __WICategory_initialize = Window_ItemCategory.prototype.initialize;
        Window_ItemCategory.prototype.initialize = function () {
            this._subIndex = [0, 0, 0, 0, 0];
            __WICategory_initialize.call(this);
        };

        Window_ItemCategory.prototype.cursorUp =function(wrap) {
            if (this.isOpenAndActive() && (this._list.length < 5 || this.index() > 0)) {
                    this.backSubCategory();
                    this._stayCount = -5;
            }
        };

        Window_ItemCategory.prototype.cursorDown = function(wrap) {
            if (this.isOpenAndActive() && (this._list.length < 5 || this.index() > 0)) {
                this.forwardSubCategory();
                this._stayCount = -5;
            }
        };

        Window_ItemCategory.prototype.drawItem = function (index) {
            if (this._subIndex[index] === 0) {
                Window_HorzCommand.prototype.drawItem.call(this, index);
            } else {
                var rect = this.itemRectForText(index);
                var align = this.itemTextAlign();
                this.resetTextColor();
                this.changePaintOpacity(this.isCommandEnabled(index));
                this.drawText(this.subCommandName(index), rect.x, rect.y, rect.width, align);
            }
        };

        Window_ItemCategory.prototype.subCommandName = function (index) {
            if (!this._categories) this.initCategories();
            return this._categories[index][this._subIndex[index]];
        };

        Window_ItemCategory.prototype.initCategories = function () {
            this._categories = [[], [], [], [], []];
            var n = 0;
            if (Imported['LimitPossession'] && $gameParty.reserveItems().length > 0) n = 1;
            this.allItems().forEach(function (item) {
                var sc = DataManager.itemSecondaryCategories(item);
                var id = -1;
                if (DataManager.isItemEx(item))     id = n;
                if (DataManager.isWeaponEx(item))   id = n+1;
                if (DataManager.isArmorEx(item))    id = n+2;
                if (id === n && item.itypeId === 2) id = n+3;
                for (var i = 0, max = sc.length; i < max; i++) {
                    if (sc[i] === allIncludesCategory) continue;
                    if (sc[i] === TextManager.item) continue;
                    if (sc[i] === TextManager.keyItem) continue;
                    if (sc[i] === TextManager.weapon) continue;
                    if (sc[i] === TextManager.armor) continue;
                    if (!this._categories[id].contains(sc[i])) {
                        this._categories[id].push(sc[i]);
                    }
                }
            }.bind(this));
            this._categories[n].sort();
            this._categories[n+1].sort();
            this._categories[n+2].sort();
            this._categories[n+3].sort();
            this._categories[n].unshift('');
            this._categories[n+1].unshift('');
            this._categories[n+2].unshift('');
            this._categories[n+3].unshift('');
            this._subIndex = [0, 0, 0, 0, 0];
        };

        Window_ItemCategory.prototype.allItems = function() {
            return $gameParty.allItems();
        };

        Window_ItemCategory.prototype.categorySize = function (index) {
            if (!this._categories) this.initCategories();
            return this._categories[index].length;
        };

        Window_ItemCategory.prototype.currentSubCategory = function () {
            if (!this._categories) this.initCategories();
            var index = this.index();
            return this._categories[index][this._subIndex[index]];
        };

        Window_ItemCategory.prototype.forwardSubCategory = function () {
            var max = this.categorySize(this.index());
            if (max === 1) return;
            this._subIndex[this.index()] = (this._subIndex[this.index()] + 1) % max;
            this._itemWindow.setSubCategory(this.currentSubCategory());
            SoundManager.playCursor();
            this.refresh();
        };

        Window_ItemCategory.prototype.backSubCategory = function () {
            var max = this.categorySize(this.index());
            if (max === 1) return;
            this._subIndex[this.index()] = (this._subIndex[this.index()] + (max - 1)) % max;
            this._itemWindow.setSubCategory(this.currentSubCategory());
            SoundManager.playCursor();
            this.refresh();
        };

        Window_ItemCategory.prototype.scrollDown = function() {
            this.forwardSubCategory();
        };

        Window_ItemCategory.prototype.scrollUp = function() {
            this.backSubCategory();
        };

        Window_ItemCategory.prototype.select = function(index) {
            Window_HorzCommand.prototype.select.call(this, index);
            if (this._itemWindow) this._itemWindow.setSubCategory(this.currentSubCategory());
        };

        if (useArrows) {
            Window_ItemCategory.prototype.updateArrows = function () {
                var max = this.categorySize(this.index());
                this.downArrowVisible = max > 1;
                this.upArrowVisible = max > 1;
                if (this.downArrowVisible) {
                    var w = this.contentsWidth() / this.maxCols();
                    this._downArrowSprite.x = this.index() * w + w / 2 + this.standardPadding();
                    this._upArrowSprite.x = this.index() * w + w / 2 + this.standardPadding();
                }
            };
        }

        ////////////////////////////////////////////////////////////////////////////////////

        var __WIList_includes = Window_ItemList.prototype.includes;
        Window_ItemList.prototype.includes = function (item) {
            var result = __WIList_includes.call(this, item);
            if (result && this._subCategory) {
                var sc = DataManager.itemSecondaryCategories(item);
                result = result && sc.contains(this._subCategory);
            }
            return result;
        };

        Window_ItemList.prototype.setSubCategory = function (category) {
            if (this._subCategory !== category) {
                this._subCategory = category;
                this.refresh();
                this.resetScroll();
            }
        };

        ////////////////////////////////////////////////////////////////////////////////////
    }
}());
