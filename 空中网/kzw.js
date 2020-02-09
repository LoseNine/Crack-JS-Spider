var KZLoginHandler = {
'id': 'kongzhong-login-agent',
'loginServer': 'http://sso.kongzhong.com',
'service': '',
'targetService': '',
'j_data': null,
'f_call_back': null,
'timestamp': 0,
'completed': false,
'renew': false,
'init': function() {
    this.j_data = null;
    this.f_call_back = null;
    this.timestamp = 0;
    this.completed = true;
},
'check': function(call_back) {
    this.init();
    this.f_call_back = call_back;
    var param = "jsonp=j";
    if (this.service != null && jQuery.trim(this.service) != "") {
        param += "&service=" + decodeURIComponent(this.service)
    };
    if (this.targetService != null && jQuery.trim(this.targetService) != "") {
        param += "&targetService=" + decodeURIComponent(this.targetService)
    };
    if (this.renew) {
        param += "&renew=1"
    };
    this.exec_login(param)
},
'exec_login': function(param) {
    if (this.completed == false) {
        return false
    };
    if (this.j_data != null && this.j_data["state"] == "1") {
        var data = {};
        data["user"] = this.j_data["user"];
        data["service"] = this.j_data["service"];
        data["logged"] = true;
        data["dc"] = this.j_data["dc"];
        this.f_call_back(data);
        return false
    };
    var url = this.loginServer + "/ajaxLogin";
    jQuery.ajax({
        async: false,
        url: url,
        type: 'post',
        dataType: 'jsonp',
        jsonp: 'j',
        data: param,
        jsonpCallback: "j",
        timeout: 5000,
        success: function(json) {},
        error: function(xhr) {}
    })
},
'jsonpCallbackKongZ': function(vData) {
    this.j_data = vData;
    this.timestamp = Date.parse(new Date());
    if (this.f_call_back != null) {
        var data = {};
        if (vData["state"] == "0") {
            data["service"] = vData["service"];
            data["logged"] = false;
            data["errors"] = vData["kzmsg"];
            if (vData["requirevcode"] != null && vData["requirevcode"] == "1") {
                data["requirevcode"] = true
            } else {
                data["requirevcode"] = false
            }
        } else if (vData["state"] == "1") {
            data["user"] = vData["user"];
            data["service"] = vData["service"];
            data["logged"] = true
        };
        data["dc"] = this.j_data["dc"];
        this.f_call_back(data)
    };
    this.completed = true
},
'login': function(user, pwd, to_save, vcode, call_back) {
    var tempTime = Date.parse(new Date()) - this.timestamp;
    if ((tempTime / 1000) >= 180) {
        this.j_data = null
    };
    if (this.j_data == null || this.j_data == "") {
        this.check(function(data) {
            this.f_call_back = call_back;
            var param = "";
            param += "&type=1";
            if (this.service != null && jQuery.trim(this.service) != "") {
                param += "&service=" + decodeURIComponent(this.service)
            };
            param += "&username=" + user;
            param += "&password=" + this.encrypt(pwd, data["dc"]);
            param += "&vcode=" + vcode;
            if (to_save) {
                param += "&toSave=1"
            } else {
                param += "&toSave=0"
            };
            if (this.targetService != null && jQuery.trim(this.targetService) != "") {
                param += "&targetService=" + decodeURIComponent(this.targetService)
            };
            if (this.renew) {
                param += "&renew=1"
            };
            this.exec_login(param)
        })
    } else {
        this.f_call_back = call_back;
        var param = "";
        param += "&type=1";
        if (this.service != null && jQuery.trim(this.service) != "") {
            param += "&service=" + decodeURIComponent(this.service)
        };
        param += "&username=" + user;
        param += "&password=" + this.encrypt(pwd, this.j_data["dc"]);
        param += "&vcode=" + vcode;
        if (to_save) {
            param += "&toSave=1"
        } else {
            param += "&toSave=0"
        };
        if (this.targetService != null && jQuery.trim(this.targetService) != "") {
            param += "&targetService=" + decodeURIComponent(this.targetService)
        };
        if (this.renew) {
            param += "&renew=1"
        };
        this.exec_login(param)
    }
},
'login_sms': function(user, smscode, to_save, vcode, call_back) {
    var tempTime = Date.parse(new Date()) - this.timestamp;
    if ((tempTime / 1000) >= 180) {
        this.j_data = null
    };
    if (this.j_data == null || this.j_data == "") {
        this.check(function() {
            this.f_call_back = call_back;
            var param = "";
            param += "&type=2";
            param += "&service=" + this.service;
            param += "&username=" + user;
            param += "&vcode=" + vcode;
            param += "&smscode=" + smscode;
            if (to_save) {
                param += "&toSave=1"
            } else {
                param += "&toSave=0"
            };
            if (this.targetService != null) {
                param += "&targetService=" + decodeURIComponent(this.targetService)
            };
            if (this.renew) {
                param += "&renew=1"
            };
            this.exec_login(param)
        })
    } else {
        this.f_call_back = call_back;
        var param = "";
        param += "&type=2";
        param += "&service=" + this.service;
        param += "&username=" + user;
        param += "&vcode=" + vcode;
        param += "&smscode=" + smscode;
        if (to_save) {
            param += "&toSave=1"
        } else {
            param += "&toSave=0"
        };
        if (this.targetService != null) {
            param += "&targetService=" + decodeURIComponent(this.targetService)
        };
        if (this.renew) {
            param += "&renew=1"
        };
        this.exec_login(param)
    }
},
'login_reg': function(user, pwd, to_save, call_back) {
    var tempTime = Date.parse(new Date()) - this.timestamp;
    if ((tempTime / 1000) >= 180) {
        this.j_data = null
    };
    if (this.j_data == null || this.j_data == "") {
        this.check(function() {
            this.f_call_back = call_back;
            var param = "";
            param += "&type=101";
            param += "&service=" + this.service;
            param += "&username=" + user;
            param += "&password=" + pwd;
            if (to_save) {
                param += "&toSave=1"
            } else {
                param += "&toSave=0"
            };
            if (this.renew) {
                param += "&renew=1"
            };
            this.exec_login(param)
        })
    } else {
        this.f_call_back = call_back;
        var param = "";
        param += "&type=101";
        param += "&service=" + this.service;
        param += "&username=" + user;
        param += "&password=" + pwd;
        if (to_save) {
            param += "&toSave=1"
        } else {
            param += "&toSave=0"
        };
        if (this.renew) {
            param += "&renew=1"
        };
        this.exec_login(param)
    }
},
'encrypt': function(str, pwd) {
    if (pwd == null || pwd.length <= 0) {
        return null
    };
    var prand = "";
    for (var i = 0; i < pwd.length; i++) {
        prand += pwd.charCodeAt(i).toString()
    };
    var sPos = Math.floor(prand.length / 5);
    var mult = parseInt(prand.charAt(sPos) + prand.charAt(sPos * 2) + prand.charAt(sPos * 3) + prand.charAt(sPos * 4) + prand.charAt(sPos * 5));
    var incr = Math.ceil(pwd.length / 2);
    var modu = Math.pow(2, 31) - 1;
    if (mult < 2) {
        return null
    };
    var salt = Math.round(Math.random() * 1000000000) % 100000000;
    prand += salt;
    while (prand.length > 10) {
        var a = prand.substring(0, 1);
        var b = prand.substring(10, prand.length);
        if (b.length > 10) {
            prand = b
        } else {
            prand = (parseInt(a) + parseInt(b)).toString()
        }
    };
    prand = (mult * prand + incr) % modu;
    var enc_chr = "";
    var enc_str = "";
    for (var i = 0; i < str.length; i++) {
        enc_chr = parseInt(str.charCodeAt(i) ^ Math.floor((prand / modu) * 255));
        if (enc_chr < 16) {
            enc_str += "0" + enc_chr.toString(16)
        } else enc_str += enc_chr.toString(16);
        prand = (mult * prand + incr) % modu
    };
    salt = salt.toString(16);
    while (salt.length < 8) salt = "0" + salt;
    enc_str += salt;
    return enc_str
}
};