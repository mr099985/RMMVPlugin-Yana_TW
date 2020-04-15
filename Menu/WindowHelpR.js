//
//  ヘルプウィンドウ改造 ver1.011
//  幫助視窗改造
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
Imported['WindowHelpR'] = 1.011;

/*:
 * @plugindesc ver1.011 / 可以更改幫助說明的字體大小，並且讓對齊方式居中，訊息可以在角落顯示。
 * @author Yana ( 翻譯 : ReIris )
 *
 * @param FontSize
 * @text 字體大小
 * @desc 幫助說明視窗的字體大小。
 * 留白的話將會使用預設值。
 * @default 22
 * @type number
 *
 * @param FrameTextFontSize
 * @text 邊框字體大小
 * @desc 在邊框顯示的內容字體大小。
 * @default 18
 * @type number
 *
 * @param ItemTopLeftText
 * @text 道具左上內容
 * @desc 在左上顯示的道具幫助說明內容。
 * 可以使用控制字元。
 * @default
 *
 * @param ItemTopRightText
 * @text 道具右上內容
 * @desc 在右上顯示的道具幫助說明內容。
 * 可以使用控制字元。
 * @default \c[6]<價值:\c[0]_price\c[6]>
 *
 * @param ItemBottomLeftText
 * @text 道具左下內容
 * @desc 在左下顯示的道具幫助說明內容。
 * 可以使用控制字元。
 * @default
 *
 * @param ItemBottomRightText
 * @text 道具右下內容
 * @desc 在右下顯示的道具幫助說明內容。
 * 可以使用控制字元。
 * @default \c[4]<_meta[カテゴリ]>
 *
 * @param SkillTopLeftText
 * @text 技能左上內容
 * @desc 在左上顯示的技能幫助說明內容。
 * 可以使用控制字元。
 * @default
 *
 * @param SkillTopRightText
 * @text 技能右上內容
 * @desc 在右上顯示的技能幫助說明內容。
 * 可以使用控制字元。
 * @default \c[4]<屬性:_element>
 *
 * @param SkillBottomLeftText
 * @text 技能左下內容
 * @desc 在左下顯示的技能幫助說明內容。
 * 可以使用控制字元。
 * @default
 *
 * @param SkillBottomRightText
 * @text 技能右下內容
 * @desc 在右下顯示的技能幫助說明內容。
 * 可以使用控制字元。
 * @default
 *
 * @param FrameTextPaddingX
 * @text 邊框文字留白 X
 * @desc 在邊框旁顯示文字的留白 X 值。
 * @default 12
 * @type number
 *
 * @param FrameTextPaddingY
 * @text 邊框文字留白 Y
 * @desc 在邊框旁顯示文字的留白 Y 值。
 * @default 10
 * @type number
 *
 * @param HideCategories
 * @text 隱藏類型
 * @desc 【安裝 SecondaryCategories 時限定】
 * 顯示類型時要隱藏的類型。
 * @default すべて,アイテム,武器,防具,大事なもの
 *
 *
 * @help------------------------------------------------------
 * 沒有插件命令。
 * ------------------------------------------------------
 * ------------------------------------------------------
 * 使用方法
 * ------------------------------------------------------
 * 僅需安裝此插件即可執行，您可以設定插件參數來更改內容。
 *
 * 在要顯示在邊框旁的內容，
 * _price      →更改為道具販賣價格
 * _value      →更改為道具價值
 *		(價值在道具注釋欄中使用<価値:xxx>或<value:xxx>設定)
 * _element    →更改為技能屬性
 * 		(如果 StatusUpReward 設定中存在 Ex-參數，則顯示該屬性)
 * _meta[xxx]  →更改為道具注釋欄中 <xxx:○○○> 的 ○○○
 * _categories →更改為次要類型(僅支援有安裝 SecondaryCategories 插件的情況)
 * _weight     →更改為重量(僅支援有安裝 LimitPossession 插件的情況)
 *
 * 如果設定了其中一個，但目標數值為 0 、空數組、空文字，則文字將會被隱藏。
 *
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
 * ver1.031:180411
 * プラグインパラメータの仕様を1.5.0に更新。
 * ver1.01:170104
 * 左側に表示するフレームテキストの位置が正常でなかったバグを修正
 * ver1.00:
 * 公開
 */

(function() {

    'use strict';

    ////////////////////////////////////////////////////////////////////////////////////

    var parameters = PluginManager.parameters('WindowHelpR');
    var fontSize = Number(parameters['FontSize']);
    var frameTextFontSize = Number(parameters['FrameTextFontSize']);
    var itemTopLeftText = parameters['ItemTopLeftText'];
    var itemTopRightText = parameters['ItemTopRightText'];
    var itemBottomLeftText = parameters['ItemBottomLeftText'];
    var itemBottomRightText = parameters['ItemBottomRightText'];
    var skillTopLeftText = parameters['SkillTopLeftText'];
    var skillTopRightText = parameters['SkillTopRightText'];
    var skillBottomLeftText = parameters['SkillBottomLeftText'];
    var skillBottomRightText = parameters['SkillBottomRightText'];
    var frameTextPaddingX = Number(parameters['FrameTextPaddingX']);
    var frameTextPaddingY = Number(parameters['FrameTextPaddingY']);
    var hideCategories = parameters['HideCategories'].split(',');

    ////////////////////////////////////////////////////////////////////////////////////

    if (!Imported['MessageAlignmentEC']) {
        Window_Base.prototype.textWidthEx = function (text) {
            var result = 0;
            text = text.replace(/\x1bC\[\d+\]/gi, '');
            text = text.replace(/\x1bI\[\d+\]/gi, function () {
                result += Window_Base._iconWidth;
                return '';
            }.bind(this));
            for (var i = 0, max = text.length; i < max; i++) {
                var c = text[i];
                if (c === '\x1b') {
                    i++;
                    c = text[i];
                    if (c === '{') {
                        this.makeFontBigger();
                    } else if (c === '}') {
                        this.makeFontSmaller();
                    } else if (c === 'F' && text[i + 1] === 'S') {
                        var cc = '\x1b';
                        for (var j = i; j < max; j++) {
                            cc += text[j];
                            if (text[j] === ']') {
                                if (cc.match(/\x1bFS\[(\d+)\]/i)) this.contents.fontSize = Number(RegExp.$1);
                                i = j;
                                break;
                            }
                        }
                    }
                } else {
                    result += this.textWidth(c);
                }
            }
            return result;
        };
    }

    ////////////////////////////////////////////////////////////////////////////////////

    var __WHelp_initialize = Window_Help.prototype.initialize;
    Window_Help.prototype.initialize = function(x, y, width, height) {
        __WHelp_initialize.call(this, x, y, width, height);
        this.createHelpSprite();
    };

    Window_Help.prototype.createHelpSprite = function() {
        this._helpSprites = [];
        var size = frameTextFontSize + 2;
        for (var i=0;i<4;i++) {
            var sprite = new Sprite();
            var bitmap = new Bitmap(Math.floor(Graphics.boxWidth / 2),size);
            sprite.x = (this.width - bitmap.width) * (i % 2);
            sprite.x += sprite.x === 0 ? frameTextPaddingX : -frameTextPaddingX;
            sprite.y = (this.height - size) * Math.floor(i / 2);
            sprite.y += sprite.y === 0 ? frameTextPaddingY : -frameTextPaddingY;
            sprite.bitmap = bitmap;
            this.addChild(sprite);
            this._helpSprites[i] = sprite;
        }
        this.refreshHelpSprites();
    };

    Window_Help.prototype.refreshHelpSprites = function() {
        var ary1 = [itemTopLeftText,itemTopRightText,itemBottomLeftText,itemBottomRightText];
        var ary2 = [skillTopLeftText,skillTopRightText,skillBottomLeftText,skillBottomRightText];
        var ary = DataManager.isSkill(this._item) ? ary2 : ary1;
        var size = frameTextFontSize;
        var contents = this.contents;
        if (!this._helpSprites) this._helpSprites = [];
        for (var i=0;i<4;i++) {
            var sprite = this._helpSprites[i];
            sprite.bitmap.clear();
            if (ary[i] && this._item) {
                var text = ary[i];
                var item = this._item;
                var f1 = false;
                var f2 = false;
                sprite.bitmap.fontSize = size;
                text = text.replace(/_meta\[(.+)\]/, function () {
                    f2 = true;
                    var t = item.meta[arguments[1]];
                    if (t) {
                        f1 = true;
                        return t;
                    } else {
                        return '';
                    }
                }.bind(this));
                text = text.replace(/_value/, function () {
                    var price = item.price ? item.price : 0;
                    f2 = true;
                    if (item.meta['価値']) price = Number(item.meta['価値']);
                    if (item.meta['value']) price = Number(item.meta['value']);
                    if (price > 0) {
                        f1 = true;
                        return price;
                    } else {
                        return '';
                    }
                }.bind(this));
                text = text.replace(/_price/, function () {
                    var price = (item.price ? item.price : 0) / 2;
                    f2 = true;
                    if (price > 0) {
                        f1 = true;
                        return price;
                    } else {
                        return '';
                    }
                }.bind(this));
                text = text.replace(/_element/, function(){
                    var id = item.damage ? item.damage.elementId : 0;
                    f2 = true;
                    if (Imported['StatusUpReward']) id = DataManager.itemExElement(item);
                    if (id > 0) {
                        f1 = true;
                        return $dataSystem.elements[id];
                    } else {
                        return '';
                    }
                }.bind(this));
                if (Imported['SecondaryCategories']) {
                    text = text.replace(/_categories/, function () {
                        var t = '';
                        f2 = true;
                        var cs = DataManager.itemSecondaryCategories(item);
                        cs = cs.filter(function(c){ return hideCategories.indexOf(c) < 0});
                        if (cs.length > 0) {
                            f1 = true;
                            cs.sort();
                            for (var i = 0, max = cs.length; i < max; i++) t += '(' + cs[i] + ')';
                        }
                        return t;
                    }.bind(this));
                }
                if (Imported['LimitPossession']) {
                    var s = PluginManager.parameters('LimitPossession')['NumberOfDecimalPlace'];
                    text  = text.replace(/_weight/, function() {
                        f2 = true;
                        var weight = DataManager.itemWeight(item);
                        if (weight > 0) {
                            f1 = true;
                            return weight.toFixed(Number(s));
                        } else {
                            return '';
                        }

                    }.bind(this));
                }
                if ((f1 && f2) || !f2) {
                    this.contents = sprite.bitmap;
                    this._callSpriteEx = true;
                    var w = this.textWidthEx(this.convertEscapeCharacters(text));
                    var x = sprite.width - w;
                    if (i % 2 === 0) x = 0;
                    this.drawTextEx(text, x, -2);
                    this._callSpriteEx = false;
                }
            }
        }
        this.contents = contents;
    };

    Window_Help.prototype.clearHelpSprites = function() {
        for (var i=0;i<4;i++) {
            if (this._helpSprites[i]) this._helpSprites[i].bitmap.clear();
        }
    };

    Window_Help.prototype.fittingHeight = function(numLine) {
        var height = Window_Base.prototype.fittingHeight.call(this, numLine);
        return height + 24;
    };

    Window_Help.prototype.standardFontSize = function() {
        if (this._callSpriteEx) return frameTextFontSize;
        var fs = fontSize || Window_Base.prototype.standardFontSize.call(this);
        return fs;
    };

    Window_Help.prototype.standardPadding = function() {
        return 6;
    };

    var __WHelp_setItem = Window_Help.prototype.setItem;
    Window_Help.prototype.setItem = function(item) {
        this._item = item;
        __WHelp_setItem.call(this, item);
    };

    var __WHelp_setText = Window_Help.prototype.setText;
    Window_Help.prototype.setText = function(text) {
        __WHelp_setText.call(this, text);
        this.clearHelpSprites();
        if (text) this.refreshHelpSprites();
    };

    var __WHelp_clear = Window_Help.prototype.clear;
    Window_Help.prototype.clear = function() {
        __WHelp_clear.call(this);
        this._item = null;
        this.refreshHelpSprites();
    };

    Window_Help.prototype.refresh = function() {
        this.contents.clear();
        if (this._text) {
            var text = this._text.replace(/\\n/gi, '\n');
            var l = text.split('\n').length;
            var h = this.standardFontSize() + 2;
            var y = Math.floor((this.contentsHeight() / 2) - (h * (l / 2))) - 8;
            this.drawTextEx(text, this.textPadding(), y);
        }
    };

    ////////////////////////////////////////////////////////////////////////////////////

}());
