//
//  ミニインフォメーションウィンドウ ver1.031
//  迷你訊息視窗
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
Imported['MiniInformationWindow'] = 1.031;
/*:
 * @plugindesc ver1.031 / 設定一個顯示各種訊息的迷你視窗。
 * @author Yana( 翻譯 : ReIris )
 *
 * @param 【基本設定】
 * @text 【基本設定】
 *
 * @param Switch Key
 * @text 切換按鍵
 * @desc 迷你視窗的顯示狀態切換按鍵。
 * @default tab,menu
 *
 * @param Default State
 * @text 預設狀態
 * @desc 迷你視窗的預設狀態。
 * open 為顯示，close 為不顯示。
 * @default open
 * @type select
 * @option open
 * @option close
 *
 * @param Two Col Size
 * @text 兩列行數
 * @desc 設定迷你視窗的 2 列行數。
 * 如果超過此行數，則顯示為 2 列。
 * @default 8
 * @type number
 *
 * @param Window Offset X
 * @text 視窗修正 X 座標
 * @desc 迷你視窗的 X 座標修正值。
 * @default 0
 *
 * @param Window Offset Y
 * @text 視窗修正 Y 座標
 * @desc 迷你視窗的 Y 座標修正值。
 * @default 0
 *
 * @param Use Scene Item
 * @text 道具畫面使用
 * @desc 設定是否在道具畫面使用迷你視窗。
 * @default true
 * @type boolean
 *
 * @param Use Scene Skill
 * @text 技能畫面使用
 * @desc 設定是否在技能畫面使用迷你視窗。
 * @default true
 * @type boolean
 *
 * @param Use Scene Equip
 * @text 裝備畫面使用
 * @desc 設定是否在裝備畫面使用迷你視窗。
 * @default true
 * @type boolean
 *
 * @param Use Scene Shop
 * @text 商店畫面使用
 * @desc 設定是否在商店畫面使用迷你視窗。
 * @default true
 * @type boolean
 *
 * @param 【用語の設定】
 * @text 【用語設定】
 *
 * @param Effect Name
 * @text 元素率名稱
 * @desc 元素率的顯示名稱。
 * @default 元素率
 *
 * @param Down Name
 * @text 減益率名稱
 * @desc 減益率的顯示名稱。
 * @default 減益率
 *
 * @param Turn Text
 * @text 回合名稱
 * @desc 效果使用的回合顯示名稱。
 * @default 回合
 *
 * @param Escape Text
 * @text 逃跑特性文字
 * @desc 特殊效果　逃跑的顯示名稱。
 * @default 逃跑
 *
 * @param Param Color
 * @text 參數文字顏色
 * @desc 詳細視窗顯示的特性文字顏色設定。
 * 基本顏色的順序為：系統顏色、上昇顏色、下降顏色。
 * @default 6,4,24,2
 *
 * @param Param Text1
 * @text 參數文字名稱 1
 * @desc 詳細視窗顯示的特性名稱。
 * 1 為「比率」特性。
 * @default  元素率,減益率,狀態拒絕
 *
 * @param Param Text2
 * @text 參數文字名稱 2
 * @desc 詳細視窗顯示的特性名稱。
 * 2 為「Ex-參數」特性。
 * @default 命中率,迴避率,爆擊率,爆擊迴避率,魔法迴避率,魔法反射率,反擊率, 再生率, 再生率, 再生率
 *
 * @param Param Text3
 * @text 參數文字名稱 3
 * @desc 詳細視窗顯示的特性名稱。
 * 3 為「Sp-參數」特性。
 * @default 目標率,防護效果率,恢復效果率,藥物, 消耗率,TP 回復率,物理傷害率,魔法傷害率,地面傷害率,經驗值
 *
 * @param Param Text4
 * @text 參數文字名稱 4
 * @desc 詳細視窗顯示的特性名稱。
 * 4 為「攻擊」特性。
 * @default 攻擊元素 : ,攻擊狀態 : ,攻擊速度,攻擊次數 +
 *
 * @param Param Text5
 * @text 參數文字名稱 5
 * @desc 詳細視窗顯示的特性名稱。
 * 5 為「技能」特性。
 * @default 添加技能類型 : ,封存技能類型 : ,添加技能 : ,封存技能 : 
 *
 * @param Param Text6
 * @text 參數文字名稱 6
 * @desc 詳細視窗顯示的特性名稱。
 * 6 為「裝備」特性。
 * @default 裝備武器 : ,裝備盔甲 : ,鎖定裝備 : ,封存裝備 : ,雙武器
 *
 * @param Param Text7
 * @text 參數文字名稱 7
 * @desc 詳細視窗顯示的特性名稱。
 * 7 為「其他」特性。
 * @default 動作次數+,自動戰鬥,防禦,交替,保留 TP,崩塌效果,遭遇減半,無遭遇,取消突襲,提升先發制人,金幣雙倍,掉落道具雙倍
 *
 * @param Defeat Text
 * @text 崩塌效應文字
 * @desc 崩塌效果使用的文字特性。基本不會使用到。
 * @default 標準,Boss,即時,無消失
 *
 * @param Effects Names
 * @text 使用效果顯示名稱
 * @desc 使用效果的各效果顯示名稱。
 * @default HP 恢復,HP 傷害,MP 恢復,MP 傷害,獲得 TP,添加狀態,消除狀態,添加增益效果,添加減益效果,刪除增益效果,刪除減益,特殊效果,增長,學習技能,一般劇情
 *
 *  @help ------------------------------------------------------
 * 插件命令
 * ------------------------------------------------------
 * 這個插件沒有插件命令。
 * ------------------------------------------------------
 * 使用方法
 * ------------------------------------------------------
 * 通過安裝插件和設定插件參數來執行。
 *
 * ※注釋欄使用設定※
 * 通過輸入道具、裝備和技能的注釋欄，
 * 可以將想要添加的效果和功能訊息來顯示在迷你視窗中。
 *
 * <情報ウィンドウ追加前:xxx>
 * <AddInfoWindowP:xxx>
 * 顯示在任何使用效果之前。
 *
 * <情報ウィンドウ追加後:xxx>
 * <AddInfoWindowA:xxx>
 * 在上述任何一項中，都可以在顯示使用效果後添加訊息。
 * 可以透過多次輸入來添加多個訊息。。
 *
 * ※無法以這種方式添加在 BattleLayout-SaGa 中顯示的訊息。
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
 * ver1.031:180410
 * プラグインパラメータの仕様を1.5.0に更新。
 * ver1.03:
 * YEP_StatusMenuCoreと変数名が重複して正常に動作していなかったバグを修正。
 * ver1.02:
 * プラグインパラメータの設定が一部間違っていたのを修正。
 * ver1.01:
 * ウィンドウの横幅を名前も考慮するように修正。
 * MP再生率とTP再生率も表示されるように、パラメータのデフォルト値を調整。
 * ver1.00:
 * 公開
 */

(function() {
    ////////////////////////////////////////////////////////////////////////////////////

    var parameters = PluginManager.parameters('MiniInformationWindow');
    var switchKey = parameters['Switch Key'].split(',');
    var defaultState = parameters['Default State'] === 'open';
    var turnText = String(parameters['Turn Text'] || 'ターン');
    var escapeText = String(parameters['Escape Text'] || '逃げる');
    var effectNames = String(parameters['Effects Names'] || 'HP回復,HPダメージ,MP回復,MPダメージ,TP増加,ステート付与,ステート解除,強化付与,弱体付与,強化解除,弱体解除,特殊効果,成長,スキル習得,コモン').split(',');
    var defeatText = parameters['Defeat Text'].split(',');
    var paramColor = parameters['Param Color'].split(',');
    var twoColSize = Number(parameters['Two Col Size']);
    var offsetX = Number(parameters['Window Offset X']) || 0;
    var offsetY = Number(parameters['Window Offset Y']) || 0;
    var useSceneItem = parameters['Use Scene Item'] === 'true';
    var useSceneSkill = parameters['Use Scene Skill'] === 'true';
    var useSceneEquip = parameters['Use Scene Equip'] === 'true';
    var useSceneShop = parameters['Use Scene Shop'] === 'true';
    var paramVocab = [];


    for (var i=1;i<=7;i++) {
        var key = 'Param Text' + i;
        paramVocab[i-1] = parameters[key].split(',');
    }

    ////////////////////////////////////////////////////////////////////////////////////

    DataManager.preInfoItem = function (item) {
        if (!item) return null;
        if (!item.note) return null;
        if (item._preInfos) return item._preInfos;
        this.makeInfoItem(item);
        return item._preInfos;
    };

    DataManager.afterInfoItem = function(item) {
        if (!item) return null;
        if (!item.note) return null;
        if (item._afterInfos) return item._afterInfos;
        this.makeInfoItem(item);
        return item._afterInfos;
    };

    DataManager.makeInfoItem = function(item) {
        item._preInfos = [];
        item._afterInfos = [];
        var texts = item.note.split('\n');
        for (var i=0,max=texts.length;i<max;i++) {
            if (texts[i].match(/<(?:情報ウィンドウ追加|AddInfoWindow)([前後PA]):(.+)>/)) {
                if (RegExp.$1 === '前' || RegExp.$1 === 'P') item._preInfos.push(RegExp.$2);
                if (RegExp.$1 === '後' || RegExp.$1 === 'A') item._afterInfos.push(RegExp.$2);
            }
        }
    };

    ////////////////////////////////////////////////////////////////////////////////////
    
    function Window_MiniInfo() {
        this.initialize.apply(this, arguments);
    }

    Window_MiniInfo.prototype = Object.create(Window_Base.prototype);
    Window_MiniInfo.prototype.constructor = Window_MiniInfo;

    Window_MiniInfo.prototype.initialize = function() {
        Window_Base.prototype.initialize.call(this, 0,0,32,32);
        this._showInfo = defaultState;
        this.openness = 0;
        this._maxCols = 1;
    };

    Window_MiniInfo.prototype.standardFontSize = function() {
        return 18; //字體大小
    };

    Window_MiniInfo.prototype.standardPadding = function() {
        return 12; //視窗留白
    };

    Window_MiniInfo.prototype.processDrawIcon = function(iconIndex, textState) {
        this.drawIcon(iconIndex, textState.x + 2, textState.y + 2);
        textState.x += this.standardFontSize() + 12;
    };

    Window_MiniInfo.prototype.drawIcon = function(iconIndex, x, y) {
        var bitmap = ImageManager.loadSystem('IconSet');
        var pw = Window_Base._iconWidth;
        var ph = Window_Base._iconHeight;
        var sx = iconIndex % 16 * pw;
        var sy = Math.floor(iconIndex / 16) * ph;
        var n = Math.floor((this.contents.fontSize / 28) * Window_Base._iconWidth);
        this.contents.blt(bitmap, sx, sy, pw, ph, x, y, n, n);
    };

    Window_MiniInfo.prototype.exRow = function() {
        if (this._item && this._item.name) return 1;
        return 0;
    };

    Window_MiniInfo.prototype.setItem = function(item, rect, maxCols) {
        this._item = item;
        this._maxCols = maxCols ? maxCols : 1;
        this.makeContents();
        if (!maxCols && this._maxCols === 1 && this._data.length > twoColSize) this._maxCols = 2;
        if (this._data.length > 0 && this._showInfo) {
            this.width = this.calcWidth();
            this.height = this.calcHeight();
            this.refresh();
            this.updatePosition(rect, rect.padding);
            this.open();
        } else {
            this.close();
        }
    };

    Window_MiniInfo.prototype.updatePosition = function(rect, padding) {
        this.x = Math.min(Math.max(0,rect.width - this.width) + rect.x, Graphics.boxWidth - this.width);
        this.y = rect.y;
        if ((this.y + this.height) > Graphics.boxHeight) {
            this.y = Math.max(rect.y - this.height - padding - rect.height,0);
        }
        this.x += offsetX;
        this.y += offsetY;
    };

    Window_MiniInfo.prototype.makeContents = function() {
        var item = this._item;
        var color = paramColor;
        this._data = [];
        var c = '\\C['+color[0]+']';
        var s = '\\C['+color[1]+']';
        var g = '\\C['+color[2]+']';
        var r = '\\C['+color[3]+']';
        var text = '';
        var preInfos = DataManager.preInfoItem(item);
        var afterInfos = DataManager.afterInfoItem(item);
        if (preInfos) this._data = this._data.concat(preInfos);
        if (item.effects){
            for (var i=0,max=item.effects.length;i<max;i++) {
                var e = item.effects[i];
                text = '';
                switch(e.code) {
                    case 11:
                        if (e.value1 > 0 && effectNames[0]) text = s + effectNames[0] + ':' + g + Math.floor(e.value1 * 100) + '%';
                        if (e.value1 < 0 && effectNames[1]) text = s + effectNames[1] + ':' + r + Math.floor(Math.abs(e.value1 * 100)) + '%';
                        if (e.value2 > 0 && effectNames[0]) text = s + effectNames[0] + ':' + g + e.value2;
                        if (e.value2 < 0 && effectNames[1]) text = s + effectNames[1] + ':' + r + Math.abs(e.value2);
                        break;
                    case 12:
                        if (e.value1 > 0 && effectNames[2]) text = s + effectNames[2] + ':' + g + Math.floor(e.value1 * 100) + '%';
                        if (e.value1 < 0 && effectNames[3]) text = s + effectNames[3] + ':' + r + Math.floor(Math.abs(e.value1 * 100)) + '%';
                        if (e.value2 > 0 && effectNames[2]) text = s + effectNames[2] + ':' + g + e.value2;
                        if (e.value2 < 0 && effectNames[3]) text = s + effectNames[3] + ':' + r + Math.abs(e.value2);
                        break;
                    case 13:
                        if (e.value1 > 0 && effectNames[4]) text = s + effectNames[4] + g +  '+' + e.value1;
                        break;
                    case 21:
                        var state = $dataStates[e.dataId];
                        if (state) {
                            var name = state.name;
                            if (e.value1 > 0 && effectNames[5]) text = s + effectNames[5] + ':' + c + name + ' ' + Math.floor(Math.abs(e.value1 * 100)) + '%';
                        }
                        break;
                    case 22:
                        var state = $dataStates[e.dataId];
                        if (state) {
                            var name = state.name;
                            if (e.value1 > 0 && effectNames[6]) text = s + effectNames[6] + ':' + c + name + ' ' + Math.floor(Math.abs(e.value1 * 100)) + '%';
                        }
                        break;
                    case 31:
                        var name = TextManager.param(e.dataId);
                        if (e.value1 > 0 && effectNames[7]) text = s + effectNames[7] + ':' + c + name + ' ' + e.value1 + turnText;
                        break;
                    case 32:
                        var name = TextManager.param(e.dataId);
                        if (e.value1 > 0 && effectNames[8]) text = s + effectNames[8] + ':' + c + name + ' ' + e.value1 + turnText;
                        break;
                    case 33:
                        if (effectNames[9]) {
                            var name = TextManager.param(e.dataId);
                            text = s + effectNames[9] + ':' + c + name;
                        }
                        break;
                    case 34:
                        if  (effectNames[10]) {
                            var name = TextManager.param(e.dataId);
                            text = s + effectNames[10] + ':' + c + name;
                        }
                        break;
                    case 41:
                        if  (effectNames[11]) text = s + effectNames[11] + ':' + c + escapeText;
                        break;
                    case 42:
                        if  (effectNames[12]) {
                            var name = TextManager.param(e.dataId);
                            text = s + effectNames[12] + ':' + c + name + '+' + e.value1;
                        }
                        break;
                    case 43:
                        if  (effectNames[13]) {
                            var name = $dataSkills[e.dataId].name;
                            if (name) text = s + effectNames[13] + ':' + c + name;
                        }
                        break;
                    case 44:
                        if  (effectNames[14]) {
                            var name = $dataCommonEvents[e.dataId].name;
                            if (name) text = s + effectNames[14] + ':' + c + name;
                        }
                        break;
                }
                if (text) this._data.push(text);
            }
        }
        if (item.params) {
            for (var i=0;i<8;i++) {
                var value = item.params[i];
                if (value !== 0){
                    var ud = value > 0 ? g : r;
                    var sym = value > 0 ? '+' : '';
                    this._data.push(s + TextManager.param(i) + ud + sym + value );
                }
            }
        }
        if (item.traits) {
            for (var i=0,max=item.traits.length;i<max;i++) {
                var trait = item.traits[i];
                var vocab = paramVocab;
                var dataId = trait.dataId;
                var value = trait.value;
                var ud = value > 1.0 ? g : r;
                var du = value < 1.0 ? g : r;
                var sym = value > 0 ? '+' : '';
                text = '';
                switch (trait.code) {
                    case 11:
                        if (vocab[0][0] && value !== 1.0) {
                            var ele = $dataSystem.elements[dataId];
                            text = c + ele + s + vocab[0][0] + du + 'x' + Math.floor(value * 100) + '%';
                        }
                        break;
                    case 12:
                        if (vocab[0][1]  && value !== 1.0) {
                            var param = TextManager.param(dataId);
                            text = c + param + s + vocab[0][1] + du + 'x' + Math.floor(value * 100) + '%';
                        }
                        break;
                    case 13:
                        if (vocab[0][0]  && value !== 1.0) {
                            var state = $dataStates[dataId].name;
                            text = c + state + s + vocab[0][0] + du + 'x' + Math.floor(value * 100) + '%';
                        }
                        break;
                    case 14:
                        if (vocab[0][2]) {
                            var state = $dataStates[dataId].name;
                            text = c + state + s + vocab[0][2];
                        }
                        break;
                    case 21:
                        if (value !== 1.0) {
                            var param = TextManager.param(dataId);
                            text = s + param + ud + 'x' + Math.floor(value * 100) + '%';
                        }
                        break;
                    case 22:
                        var xparam = vocab[1][dataId];
                        if (xparam && value !== 0) {
                            //if (dataId === 0 && xparam) xparam = TextManager.param(8);
                            //if (dataId === 1 && xparam) xparam = TextManager.param(9);
                            if (dataId === 7 && xparam) xparam = TextManager.hpA + xparam;
                            if (dataId === 8 && xparam) xparam = TextManager.mpA + xparam;
                            if (dataId === 9 && xparam) xparam = TextManager.tpA + xparam;
                            text = s + xparam + du + sym + Math.floor(value * 100) + '%';
                        }
                        break;
                    case 23:
                        var sparam = vocab[2][dataId];
                        if (sparam && value !== 1.0) {
                            if (dataId === 0) ud = c;
                            if (dataId === 4) { sparam = TextManager.mpA + sparam; ud = du; }
                            if (dataId === 5) TextManager.tpA + sparam;
                            if (dataId === 6 || dataId === 7 || dataId === 8) ud = du;
                            text = s + sparam + ud + 'x' + Math.floor(value * 100) + '%';
                        }
                        break;
                    case 31:
                        if (vocab[3][0]) {
                            var ele = $dataSystem.elements[dataId];
                            text = s + vocab[3][0] + c + ele;
                        }
                        break;
                    case 32:
                        if (vocab[3][1] && value > 0) {
                            var state = $dataStates[dataId].name;
                            text = s + vocab[3][1] + c + state + ' ' + Math.floor(value*100) + '%' ;
                        }
                        break;
                    case 33:
                        if (vocab[3][2] && value !== 0) text = s + vocab[3][2] + ud + sym + value;
                        break;
                    case 34:
                        if (vocab[3][3] && value !== 0){
                            var ud = value > 0 ? g : r;
                            text = s + vocab[3][3] + ud + sym + value + '回';
                        }
                        break;
                    case 41:
                    case 42:
                        var stype = $dataSystem.skillTypes[dataId];
                        var v = trait.code === 41 ? vocab[4][0] : vocab[4][1];
                        if (v && stype) text = s + v + c + stype;
                        break;
                    case 43:
                    case 44:
                        var skill = $dataSkills[dataId];
                        var v = trait.code === 43 ? vocab[4][2] : vocab[4][3];
                        if (v && skill) text = s + v + c + skill.name;
                        break;
                    case 51:
                    case 52:
                        var type = trait.code === 51 ? $dataSystem.weaponTypes[dataId] : $dataSystem.armorTypes[dataId];
                        var v = trait.code === 51 ? vocab[5][0] : vocab[5][1];
                        if (v && type) text = s + v + c + type;
                        break;
                    case 53:
                    case 54:
                        var etype = $dataSystem.equipTypes[dataId];
                        var v = trait.code === 53 ? vocab[5][2] : vocab[5][3];
                        if (v && etype) text = s + v + c + etype;
                        break;
                    case 55:
                        if (vocab[5][4]) text = s + vocab[5][4];
                        break;
                    case 61:
                        if (vocab[6][0] && value > 0) text = s + vocab[6][0] + du + sym + (value * 100) + '%';
                        break;
                    case 62:
                        if (vocab[6][1+dataId]) {
                            text = s + vocab[6][1 + dataId];
                        }
                        break;
                    case 63:
                        if (vocab[6][5]) text = s + vocab[6][5] + defeatText[dataId];
                        break;
                    case 64:
                        if (vocab[6][6+dataId]) text = s + vocab[6][6+dataId];
                        break;
                    case 111:
                        if (vocab[0][0] && value !== 0) {
                            var ele = $dataSystem.elements[dataId];
                            du = value < 0 ? g : r;
                            text = c + ele + s + vocab[0][0] + du + sym + Math.floor(value * 100) + '%';
                        }
                        break;
                    case 112:
                        if (vocab[0][1]  && value !== 0) {
                            var param = TextManager.param(dataId);
                            du = value < 0 ? g : r;
                            text = c + param + s + vocab[0][1] + du + sym + Math.floor(value * 100) + '%';
                        }
                        break;
                    case 113:
                        if (vocab[0][0]  && value !== 0) {
                            var state = $dataStates[dataId].name;
                            du = value < 0 ? g : r;
                            text = c + state + s + vocab[0][0] + du + sym + Math.floor(value * 100) + '%';
                        }
                        break;
                    case 121:
                        if (value !== 0) {
                            var param = TextManager.param(dataId);
                            text = s + param + ud + sym + value;
                        }
                        break;
                    case 123:
                        var sparam = vocab[2][dataId];
                        if (sparam && value !== 0) {
                            ud = value > 0 ? g : r;
                            du = value < 0 ? g : r;
                            if (dataId === 0) ud = c;
                            if (dataId === 4) { sparam = TextManager.mpA + sparam; ud = du; }
                            if (dataId === 5) TextManager.tpA + sparam;
                            if (dataId === 6 || dataId === 7 || dataId === 8) ud = du;
                            text = s + sparam + ud + sym + Math.floor(value * 100) + '%';
                        }
                        break;
                }

                if(text) this._data.push(text);
            }
        }
        if (item.data) this._data = this._data.concat(item.data);
        if (afterInfos) this._data = this._data.concat(afterInfos);
    };

    Window_MiniInfo.prototype.calcWidth = function() {
        var w = 32;
        var ic = 0;
        var nw = 0;
        if (this._item && this._item.name){
            var name = this._item.name;
            if (this._item.iconIndex) name = '\\I[' + this._item.iconIndex + ']' + name;
            name = name.replace(/\\C\[\d+\]/gi,'');
            name = name.replace(/\\I\[\d+\]/gi,function(){
                ic+=1;
                return '';
            }.bind(this));
            nw = this.textWidth(name) + ic * (this.standardFontSize() + 16); //視窗留白 = 16
        }
        for (var i=0,max=this._data.length;i<max;i++) {
            var text = this._data[i];
            text = text.replace(/\\C\[\d+\]/gi,'');
            text = text.replace(/\\I\[\d+\]/gi,function(){
                ic+=1;
                return '';
            }.bind(this));
            var n = this.textWidth(text) + ic * (this.standardFontSize() + 16); //視窗留白 = 16
            if (n > w) w = n;
        }
        w = w * this._maxCols;
        w = nw > w ? nw : w;
        return w + 32;
    };

    Window_MiniInfo.prototype.calcHeight = function() {
        return (Math.ceil(this._data.length / this._maxCols) + this.exRow()) * (this.standardFontSize() + 2) + this.standardPadding() * 2 + 24;
    };

    Window_MiniInfo.prototype.refresh = function() {
        this.createContents();
        this.contents.clear();
        var fs = this.standardFontSize() + 2;
        var oy = 8;
        if (this.exRow()) {
            oy += 8;
            var name = this._item.name;
            if (this._item.iconIndex) name = '\\I[' + this._item.iconIndex + ']' + name;
            this.drawTextEx(name, 8, 4);
            this.contents.paintOpacity = 128;
            this.contents.fillRect(4, fs + 12, this.contentsWidth() - 8, 2, this.normalColor());
            this.contents.paintOpacity = 255;
        }
        for (var i=0,max=this._data.length;i<max;i++) {
            var x = 6 + Math.floor(i / (max / this._maxCols)) * Math.floor(this.contentsWidth() / 2);
            var y = ((i % Math.ceil(max / this._maxCols))+this.exRow()) * fs + oy;
            this.drawTextEx(this._data[i],x,y);
        }
    };

    ////////////////////////////////////////////////////////////////////////////////////

    var __WSelectable_setHelpWindowItem = Window_Selectable.prototype.setHelpWindowItem;
    Window_Selectable.prototype.setHelpWindowItem = function(item) {
        __WSelectable_setHelpWindowItem.call(this, item);
        this.setMiniWindow(item);
    };

    var __WSelectable_deactivate = Window_Selectable.prototype.deactivate;
    Window_Selectable.prototype.deactivate = function() {
        __WSelectable_deactivate.call(this);
        if (this._miniInfoWindow) this._miniInfoWindow.close();
    };

    var __WSelectable_processHandling = Window_Selectable.prototype.processHandling;
    Window_Selectable.prototype.processHandling = function() {
        __WSelectable_processHandling.call(this);
        if (this.isOpenAndActive() && this._miniInfoWindow && this.isIwSwitchTriggered()) {
            this._miniInfoWindow._showInfo = !this._miniInfoWindow._showInfo;
            if (this._miniInfoWindow._showInfo){
                this._miniInfoWindow.open();
                this.updateHelp();
            }
            if (!this._miniInfoWindow._showInfo) this._miniInfoWindow.close();
        }
    };

    Window_Selectable.prototype.isIwSwitchTriggered = function() {
        for (var i=0,max=switchKey.length;i<max;i++) {
            var key = switchKey[i];
            if (Input.isTriggered(key)) return true;
        }
        return false;
    };

    Window_Selectable.prototype.setMiniWindow = function(item) {
        if (this._miniInfoWindow){
            if (this.active && item) {
                var rect = this.itemRect(this.index());
                rect.x = rect.x + this.x;
                rect.y = rect.y + rect.height + this.y + this.standardPadding() + 1;
                rect.padding = this.standardPadding();
                this._miniInfoWindow.setItem(item, rect);
            } else {
                this._miniInfoWindow.close();
            }
        }
    };

    ////////////////////////////////////////////////////////////////////////////////////

    Scene_Base.prototype.createMiniWindow = function() {
        this._miniWindow = new Window_MiniInfo();
        if (this._buyWindow) this._buyWindow._miniInfoWindow = this._miniWindow;
        if (this._sellWindow) this._sellWindow._miniInfoWindow = this._miniWindow;
        if (this._slotWindow) this._slotWindow._miniInfoWindow = this._miniWindow;
        if (this._itemWindow) this._itemWindow._miniInfoWindow = this._miniWindow;
        this.addChild(this._miniWindow);
    };

    ////////////////////////////////////////////////////////////////////////////////////

    var __SItem_create = Scene_Item.prototype.create;
    Scene_Item.prototype.create = function() {
        __SItem_create.call(this);
        if (useSceneItem) this.createMiniWindow();
    };

    ////////////////////////////////////////////////////////////////////////////////////

    var __SSkill_create = Scene_Skill.prototype.create;
    Scene_Skill.prototype.create = function() {
        __SSkill_create.call(this);
        if (useSceneSkill) this.createMiniWindow();
    };

    ////////////////////////////////////////////////////////////////////////////////////

    var __SEquip_create = Scene_Equip.prototype.create;
    Scene_Equip.prototype.create = function() {
        __SEquip_create.call(this);
        if (useSceneEquip) this.createMiniWindow();
    };

    ////////////////////////////////////////////////////////////////////////////////////

    var __SShop_create = Scene_Shop.prototype.create;
    Scene_Shop.prototype.create = function() {
        __SShop_create.call(this);
        if (useSceneShop) this.createMiniWindow();
    };

    ////////////////////////////////////////////////////////////////////////////////////

}());
