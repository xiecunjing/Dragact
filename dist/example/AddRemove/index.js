var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
import * as React from 'react';
import { Dragact } from '../../src/lib/dragact';
var Words = [
    { content: 'You can do anything, but not everything.' },
    { content: 'Those who dare to fail miserably can achieve greatly.' },
    { content: 'You miss 100 percent of the shots you never take.' },
    { content: 'Those who believe in telekinetics, raise my hand.' },
    { content: 'I’d rather live with a good question than a bad answer.' }
];
var Card = function (_a) {
    var item = _a.item, provided = _a.provided, onDelete = _a.onDelete;
    return (React.createElement("div", __assign({ className: 'layout-Item' }, provided.props, provided.dragHandle),
        React.createElement("div", { style: {
                position: 'absolute',
                width: 10, height: 10, right: 15, top: 5, cursor: 'pointer'
            }, onClick: function () { return onDelete(item.key); } }, "\u274C"),
        React.createElement("div", { style: { padding: 5, textAlign: 'center', color: '#595959' } }, item.content)));
};
var fakeData = function () {
    var Y = 0;
    return Words.map(function (item, index) {
        if (index % 4 === 0)
            Y++;
        return __assign({}, item, { GridX: index % 4 * 4, GridY: Y * 4, w: 4, h: 3, key: index });
    });
};
var makeOne = function () {
    return { content: 'added', GridX: 0, GridY: 0, w: 4, h: 3, key: Date.now() };
};
var AddRemove = /** @class */ (function (_super) {
    __extends(AddRemove, _super);
    function AddRemove() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            layout: fakeData()
        };
        _this.handleClick = function () {
            _this.setState({
                layout: _this.state.layout.concat([makeOne()])
            });
            console.log(_this.state.layout);
        };
        _this.hanldeOnDelete = function (key) {
            var layout = _this.state.layout.filter(function (item) {
                if (item.key !== key) {
                    return item;
                }
            });
            _this.setState({
                layout: layout
            });
        };
        return _this;
    }
    AddRemove.prototype.componentDidMount = function () {
    };
    AddRemove.prototype.render = function () {
        var _this = this;
        var margin = [5, 5];
        var dragactInit = {
            width: 600,
            col: 12,
            rowHeight: 800 / 12,
            margin: margin,
            className: 'normal-layout',
            layout: this.state.layout,
            placeholder: true
        };
        return (React.createElement("div", null,
            React.createElement("div", { style: { display: 'flex', justifyContent: 'center' } },
                React.createElement("div", null,
                    React.createElement("h1", { style: { textAlign: 'center' } }, "AddRemove Demo"),
                    React.createElement("button", { onClick: this.handleClick }, "\u65B0\u589E"),
                    React.createElement(Dragact, __assign({}, dragactInit), function (item, provided) {
                        return React.createElement(Card, { item: item, provided: provided, onDelete: _this.hanldeOnDelete });
                    })))));
    };
    return AddRemove;
}(React.Component));
export { AddRemove };
