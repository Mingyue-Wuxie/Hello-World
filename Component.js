function Tab(json) {
    this.setting = {
        Style: 'Default',
        Direction: 'Horizontal',//Vertical,
        Tabs: [],
        Cards: 'li',
        Event: 'hover'
    }
    this.Copy(this.setting, json);
    this.aTab = document.getElementById(json.id);
    this.oCard = document.getElementById(this.aTab.getAttribute('card'));
    this.sLicards = this.oCard.getElementsByTagName(this.setting.Cards);
    this.Number = this.sLicards.length;
    this.create();
}

Tab.prototype.create = function () {
    var _this = this;
    if (this.setting.Style == 'Default') {
        this.aTab.className = 'tab';
    } else {
        this.aTab.className = this.setting.Style;
    }
    this.oTabs = document.createElement('ul');
    for (var i = 0; i < this.Number; i++) {
        this.sBtns = document.createElement('li');
        this.sBtns.index = i;
        this.sLicards.index = i;
        if (this.setting.Tabs[i]) {
            this.sBtns.innerHTML = this.setting.Tabs[i];
        } else {
            this.sBtns.innerHTML = `第${i + 1}栏`;
        }
        if (this.setting.Event == 'hover') {
            this.sBtns.addEventListener('mousemove', function () {
                for (var j = 0; j < _this.Number; j++) {
                    this.parentNode.children[j].removeAttribute('class');
                    _this.sLicards[j].removeAttribute('class');
                }
                this.className = 'active';
                _this.sLicards[this.index].className = 'active';
            });
        } else {
            this.sBtns.addEventListener(_this.setting.Event, function () {
                for (var j = 0; j < _this.Number; j++) {
                    this.parentNode.children[j].removeAttribute('class');
                    _this.sLicards[j].removeAttribute('class');
                }
                this.className = 'active';
                _this.sLicards[this.index].className = 'active';
            });
        }
        this.oTabs.appendChild(this.sBtns);
    }
    this.oTabs.className = 'tabs'
    this.oTabs.children[0].className = 'active';
    this.aTab.insertBefore(this.oTabs, this.oCard);
    this.oCard.className = 'card';
    this.oCard.children[0].className = 'active';
}