var PhonePe = function(e) {
    var t = {};
    function n(r) {
        if (t[r])
            return t[r].exports;
        var i = t[r] = {
            i: r,
            l: !1,
            exports: {}
        };
        return e[r].call(i.exports, i, i.exports, n),
        i.l = !0,
        i.exports
    }
    return n.m = e,
    n.c = t,
    n.d = function(e, t, r) {
        n.o(e, t) || Object.defineProperty(e, t, {
            enumerable: !0,
            get: r
        })
    }
    ,
    n.r = function(e) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }),
        Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }
    ,
    n.t = function(e, t) {
        if (1 & t && (e = n(e)),
        8 & t)
            return e;
        if (4 & t && "object" == typeof e && e && e.__esModule)
            return e;
        var r = Object.create(null);
        if (n.r(r),
        Object.defineProperty(r, "default", {
            enumerable: !0,
            value: e
        }),
        2 & t && "string" != typeof e)
            for (var i in e)
                n.d(r, i, function(t) {
                    return e[t]
                }
                .bind(null, i));
        return r
    }
    ,
    n.n = function(e) {
        var t = e && e.__esModule ? function() {
            return e.default
        }
        : function() {
            return e
        }
        ;
        return n.d(t, "a", t),
        t
    }
    ,
    n.o = function(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }
    ,
    n.p = "",
    n(n.s = 10)
}([function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }),
    function(e) {
        let t, n, r, i, a, s, o, c;
        !function(e) {
            e.READ_SMS = "READ_SMS",
            e.LOCATION = "LOCATION",
            e.CAMERA = "CAMERA",
            e.WRITE_EXTERNAL_STORAGE = "WRITE_EXTERNAL_STORAGE",
            e.READ_EXTERNAL_STORAGE = "READ_EXTERNAL_STORAGE"
        }(t = e.Permission || (e.Permission = {})),
        function(e) {
            e.LANDSCAPE = "LANDSCAPE",
            e.PORTRAIT = "PORTRAIT",
            e.DEVICE = "DEVICE"
        }(n = e.OrientationMode || (e.OrientationMode = {})),
        function(e) {
            e.web = "web",
            e.native = "native"
        }(r = e.Species || (e.Species = {})),
        function(e) {
            e.ios = "ios",
            e.android = "android"
        }(i = e.OS || (e.OS = {})),
        function(e) {
            e.ios = "phonepe-ios",
            e.android = "phonepe-android"
        }(a = e.OSUserAgent || (e.OSUserAgent = {})),
        function(e) {
            e.email = "email",
            e.name = "name",
            e.phoneNumber = "phoneNumber",
            e.isEmailVerified = "isEmailVerified"
        }(s = e.UserDetail || (e.UserDetail = {})),
        function(e) {
            e.BleManagerDidUpdateState = "BleManagerDidUpdateState",
            e.BleManagerStopScan = "BleManagerStopScan",
            e.BleManagerDiscoverPeripheral = "BleManagerDiscoverPeripheral",
            e.BleManagerDidUpdateValueForCharacteristic = "BleManagerDidUpdateValueForCharacteristic",
            e.BleManagerConnectPeripheral = "BleManagerConnectPeripheral",
            e.BleManagerDisconnectPeripheral = "BleManagerDisconnectPeripheral"
        }(o = e.BlueToothListenerEvents || (e.BlueToothListenerEvents = {})),
        function(e) {
            e.ORDER_ACTION = "ORDER_ACTION",
            e.ENGAGEMENT_ACTION = "ENGAGEMENT_ACTION"
        }(c = e.TokenType || (e.TokenType = {})),
        e.version = "1.0.7"
    }(t.ExternalConstants || (t.ExternalConstants = {}))
}
, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    const r = n(5)
      , i = n(4)
      , a = n(3)
      , s = n(11);
    class o {
        static callback(e, t, n, r) {
            i.Logger.logd("PhonePe", "phonepeCallback called! with callbackName = " + e);
            let s = o.promiseMapping[e];
            s && ("1" === t ? s[a.PhonePeSDKWebConstants.General.resolve](n) : s[a.PhonePeSDKWebConstants.General.reject](r),
            delete o.promiseMapping[e])
        }
        static callNative(e, t, n) {
            if (!s.MethodVersioningHandler.isMethodSupported(e))
                return void i.Logger.logd("PhonePe", "Sorry! This method is not supported with PhonePe app's version");
            i.Logger.logd("PhonePe", "Trying to call methodName = " + e);
            let a = window.webkit;
            if (r.PhonePeUtils.isValidMethodOniOS(e))
                a.messageHandlers[e].postMessage(n);
            else {
                window[t][e](JSON.stringify(n))
            }
        }
        static storePromiseAndCallNative(e, t, n) {
            return new Promise((i,s)=>{
                let o = r.PhonePeUtils.createuuid();
                n[a.PhonePeSDKWebConstants.General.callbackId] = o,
                this.callNative(e, t, n),
                this.promiseMapping[o] = {
                    resolve: i,
                    reject: s
                }
            }
            )
        }
    }
    o.promiseMapping = {},
    t.MessagingHandler = o
}
, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }),
    function(e) {
        let t, n, r, i, a, s, o, c, l, d, u, g, h, p;
        e.sdkVersion = "0.1",
        e.PhonePeSDKRNMajorVersion = 0,
        e.PhonePeSDKRNMinorVersion = 53,
        e.data_preferences = "database_versions",
        e.PhonePeSDKVersion = 4,
        function(e) {
            e.confirmationScreenDuration = 400,
            e.discoveryContextMode = "PEER_TO_MERCHANT",
            e.paymentScreenName = "PAY",
            e.v1 = "v1",
            e.v2 = "v2"
        }(t = e.General || (e.General = {})),
        function(e) {
            e.invalidParams = "PARAMS_INVALID_OR_INSUFFICIENT"
        }(n = e.ErrorCode || (e.ErrorCode = {})),
        function(e) {
            e.payments = 103,
            e.transactionDetails = 105
        }(r = e.ActivityID || (e.ActivityID = {})),
        function(e) {
            e.name = "PermissionsBridge",
            e.seekPermission = "seekPermission",
            e.openSettingsPage = "openSettingsPageForPermission",
            e.androidPrefix = "android.permission.",
            e.locationPermissionName = "ACCESS_FINE_LOCATION",
            e.kPermission = "permission",
            e.kPermissionStatus = "permissionGranted",
            e.kShowAgain = "willShowPermissionAlertAgain"
        }(i = e.PermissionsBridge || (e.PermissionsBridge = {})),
        function(e) {
            e.bridgeName = "AnalyticsBridge",
            e.methodName = "logMerchantEvent",
            e.kName = "name",
            e.kMetadata = "metadata",
            e.kGroupingKey = "groupingKey"
        }(a = e.AnalyticsBridge || (e.AnalyticsBridge = {})),
        function(e) {
            e.bridgeName = "AuthBridge",
            e.fetchGrantToken = "fetchGrantToken",
            e.fetchAuthToken = "fetchAuthToken",
            e.fetchPermissionGrantToken = "resourceGrant",
            e.resourceGrant = "resourceGrant"
        }(s = e.AuthBridge || (e.AuthBridge = {})),
        function(e) {
            e.bridgeName = "NavigationBridge",
            e.navigateToMap = "navigateToMap",
            e.navigateToSwitchApp = "navigateToSwitchApp"
        }(o = e.NavigationBridge || (e.NavigationBridge = {})),
        function(e) {
            e.bridgeName = "OrientationBridge",
            e.changeOrientation = "changeOrientation",
            e.requestFullScreenMode = "requestFullScreenMode",
            e.requestExitFullScreenMode = "requestExitFullScreenMode"
        }(c = e.OrientationBridge || (e.OrientationBridge = {})),
        function(e) {
            e.bridgeName = "OrderActionBridge",
            e.reserveOrder = "reserveOrder",
            e.fetchOrderRequestToken = "fetchOrderRequestToken",
            e.fetchToken = "fetchToken",
            e.openPaymentsPageForReservedOrder = "openPaymentsPageForReservedOrder"
        }(l = e.OrderActionBridge || (e.OrderActionBridge = {})),
        function(e) {
            e.bridgeName = "FilePickerBridge",
            e.selectFile = "selectFile",
            e.readFile = "readFile"
        }(d = e.FilePickerBridge || (e.FilePickerBridge = {})),
        function(e) {
            e.bridgeName = "CameraBridge",
            e.scanQRCode = "scanQRCode",
            e.startCamera = "startCamera"
        }(u = e.CameraBridge || (e.CameraBridge = {})),
        function(e) {
            e.bridgeName = "BleManager",
            e.read = "read",
            e.readRSSI = "readRSSI",
            e.refreshCache = "refreshCache",
            e.retrieveServices = "retrieveServices",
            e.write = "write",
            e.writeWithoutResponse = "writeWithoutResponse",
            e.connect = "connect",
            e.createBond = "createBond",
            e.removeBond = "removeBond",
            e.disconnect = "disconnect",
            e.startNotification = "startNotification",
            e.stopNotification = "stopNotification",
            e.checkState = "checkState",
            e.start = "start",
            e.scan = "scan",
            e.stopScan = "stopScan",
            e.enableBluetooth = "enableBluetooth",
            e.getConnectedPeripherals = "getConnectedPeripherals",
            e.getBondedPeripherals = "getBondedPeripherals",
            e.getDiscoveredPeripherals = "getDiscoveredPeripherals",
            e.removePeripheral = "removePeripheral",
            e.isPeripheralConnected = "isPeripheralConnected",
            e.requestConnectionPriority = "requestConnectionPriority",
            e.requestMTU = "requestMTU",
            e.registerBluetoothOperationSuccessCallback = "registerBluetoothOperationSuccessCallback"
        }(g = e.BleManager || (e.BleManager = {})),
        function(e) {
            e.bridgeName = "VideoPlayerBridge",
            e.startVideoPlayer = "startVideoPlayer"
        }(h = e.VideoPlayerBridge || (e.VideoPlayerBridge = {})),
        function(e) {
            e.videoCall = "videoCall"
        }(p = e.Feature || (e.Feature = {}))
    }(t.InternalConstants || (t.InternalConstants = {}))
}
, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }),
    function(e) {
        let t, n, r, i, a, s, o, c, l;
        !function(e) {
            e.reject = "reject",
            e.resolve = "resolve",
            e.callbackId = "callbackId",
            e.prefName = "prefName",
            e.key = "key",
            e.defaultValue = "defaultValue",
            e.value = "value",
            e.min = "min",
            e.max = "max"
        }(t = e.General || (e.General = {})),
        function(e) {
            e.androidBridgeName = "PreferencesBridge",
            e.getItem = "getItem",
            e.setItem = "setItem",
            e.removeItem = "removeItem",
            e.removeItemAndroid = "removeKey"
        }(n = e.Preferences || (e.Preferences = {})),
        function(e) {
            e.supportedVersion = "getSupportedWebSDKVersion",
            e.androidBridgeName = "MetadataBridge"
        }(r = e.Metadata || (e.Metadata = {})),
        function(e) {
            e.androidBridgeName = "LocationBridge",
            e.startUpdatingLocation = "startUpdatingLocation",
            e.stopUpdatingLocation = "stopUpdatingLocation",
            e.getCurrentLocation = "getCurrentLocation",
            e.locationSuccessEventKey = "locationUpdated",
            e.locationFailureEventKey = "failedToUpdateLocation",
            e.forceNewLocation = "forceNew",
            e.getAddress = "getAddress"
        }(i = e.Location || (e.Location = {})),
        function(e) {
            e.androidBridgeName = "NavigationBridge",
            e.processRequest = "processRequest",
            e.navigateToPath = "navigateToPath",
            e.navigateToPathForResult = "navigateToPathForResult",
            e.navigateToGenericPaymentForResult = "navigateToGenericPaymentForResult",
            e.navigateToGenericPayment = "navigateToGenericPayment"
        }(a = e.Navigation || (e.Navigation = {})),
        function(e) {
            e.navigateToPaymentsView = "openPaymentsPage",
            e.navigateToTransactionDetail = "openTransactionDetailsPage",
            e.navigateToGenericPaymentsView = "openGenericPaymentsPage",
            e.navigateToHelpPage = "openHelpPage",
            e.navigateToReactView = "openReactView"
        }(s = e.NavigationIOS || (e.NavigationIOS = {})),
        function(e) {
            e.merchantId = "merchantId",
            e.discoveryMode = "mode",
            e.discoveryModeValue = "PEER_TO_MERCHANT",
            e.title = "Pay",
            e.transactionType = "SENT_PAYMENT",
            e.timeoutTitle = "Payment Expired",
            e.timeoutMessage = "Sorry! Your payment request timed out. Please try again.",
            e.timeoutActionButtonTitle = "OK",
            e.dismissTitle = "Are you sure?",
            e.dismissMessage = "Going back will cancel the payment. Are you sure you want to proceed?",
            e.dismissPositiveButtonTitle = "I'm sure",
            e.dismissNegativeButtonTitle = "Dismiss"
        }(o = e.Payments || (e.Payments = {})),
        function(e) {
            e.getUserDetails = "getUserDetails",
            e.androidBridgeName = "UserBridge",
            e.attributes = "attributes"
        }(c = e.User || (e.User = {})),
        function(e) {
            e.androidBridgeName = "CameraBridge",
            e.scanQRCode = "scanQRCode",
            e.startCamera = "startCamera"
        }(l = e.Camera || (e.Camera = {}))
    }(t.PhonePeSDKWebConstants || (t.PhonePeSDKWebConstants = {}))
}
, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    const r = n(10);
    class i {
        static isLoggingEnabled() {
            return r.PhonePe.loggingEnabled
        }
        static logd(e, t) {
            i.isLoggingEnabled() && console.log("[" + e + "] " + t)
        }
        constructor(e) {
            this.tag = e
        }
        logd(e) {
            i.logd(this.tag, e)
        }
        logAnything(e) {
            console.log(e)
        }
        logError(e) {
            0
        }
    }
    t.Logger = i
}
, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    const r = n(0)
      , i = n(2);
    var a = r.ExternalConstants.Permission;
    class s {
        static assert(e, t) {
            if (!e)
                throw new Error(t)
        }
        static assertString(e, t) {
            s.assertType(e, "string", t)
        }
        static assertNumber(e, t) {
            s.assertType(e, "number", t)
        }
        static assertBoolean(e, t) {
            s.assertType(e, "boolean", t)
        }
        static assertFunction(e, t) {
            s.assertType(e, "function", t)
        }
        static assertArray(e, t) {
            if ((!t || e) && e.constructor !== Array)
                throw new TypeError(i.InternalConstants.ErrorCode.invalidParams)
        }
        static assertObject(e, t) {
            s.assertType(e, "object", t)
        }
        static assertType(e, t, n) {
            if ((!n || e) && typeof e !== t)
                throw new TypeError(i.InternalConstants.ErrorCode.invalidParams)
        }
        static returnResolution(e) {
            return new Promise((t,n)=>{
                t(e)
            }
            )
        }
        static returnRejection(e) {
            return new Promise((t,n)=>{
                n(e)
            }
            )
        }
        static isValidSpecies(e) {
            return e === r.ExternalConstants.Species.web || e === r.ExternalConstants.Species.native
        }
        static isValidOS(e) {
            return e === r.ExternalConstants.OS.ios || e === r.ExternalConstants.OS.android
        }
        static createuuid() {
            return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(e) {
                var t = 16 * Math.random() | 0;
                return ("x" == e ? t : 3 & t | 8).toString(16)
            })
        }
        static osSpecificPermissionNames(e, t) {
            let n = [];
            for (let s of e)
                if (t === r.ExternalConstants.OS.ios)
                    n.push(a[s]);
                else {
                    let e = "";
                    e = s === a.LOCATION ? i.InternalConstants.PermissionsBridge.androidPrefix + i.InternalConstants.PermissionsBridge.locationPermissionName : i.InternalConstants.PermissionsBridge.androidPrefix + a[s],
                    n.push(e)
                }
            return n
        }
        static strippedPermissionName(e, t) {
            if (t === r.ExternalConstants.OS.ios)
                return e;
            let n = i.InternalConstants.PermissionsBridge.androidPrefix
              , s = e.replace(new RegExp("^" + n), "");
            return s === i.InternalConstants.PermissionsBridge.locationPermissionName && (s = a.LOCATION),
            s
        }
        static isValidMethodOniOS(e) {
            let t = window.webkit;
            return t && t.messageHandlers && t.messageHandlers[e] && "function" == typeof t.messageHandlers[e].postMessage
        }
        static getReserveOrderPayload(e, t) {
            const n = {};
            return n["X-PROVIDER-ID"] = t,
            {
                headers: n,
                body: e
            }
        }
    }
    t.PhonePeUtils = s
}
, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    const r = n(4);
    class i {
        static addSubscription(e) {
            let t = this.eventNameToSubscriptionMapping[e.eventName];
            t ? t.push(e) : (t = []).push(e),
            this.eventNameToSubscriptionMapping[e.eventName] = t
        }
        static removeSubscription(e) {
            let t = e.eventName
              , n = e.callbackName
              , r = this.eventNameToSubscriptionMapping[t];
            if (r) {
                let e = []
                  , t = 0;
                for (let i of r)
                    i.callbackName === n && (e.push(t),
                    t++);
                for (; e.length; ) {
                    let t = e.pop();
                    t && r.splice(t, 1)
                }
            }
        }
        static removeAllSubscriptions(e) {
            this.eventNameToSubscriptionMapping.hasOwnProperty(e) && delete this.eventNameToSubscriptionMapping[e]
        }
        static sendEvent(e, t) {
            let n = this.eventNameToSubscriptionMapping[e];
            if (n)
                for (let e of n)
                    e.listener(t);
            else
                r.Logger.logd("PhonePe", "[Error] No subscribers for eventName = " + e)
        }
    }
    i.eventNameToSubscriptionMapping = {},
    t.EventHandler = i
}
, function(e, t, n) {
    "use strict";
    var r;
    Object.defineProperty(t, "__esModule", {
        value: !0
    }),
    function(e) {
        e.WebView = "WebView",
        e.ReactView = "ReactView",
        e.PaymentsView = "PaymentView",
        e.GenericPaymentsView = "GenericPaymentsView",
        e.AppScreen = "AppScreen",
        e.ContactPicker = "ContactPicker",
        e.TransactionDetail = "TransactionDetail",
        e.Profile = "Profile",
        e.HelpPage = "HelpPage",
        e.MandateSetup = "MandateSetup",
        e.AddToWallet = "AddToWallet",
        e.MicroApp = "MicroApp",
        e.PWAWebView = "PWAWebView"
    }(r = t.NavigationScreenType || (t.NavigationScreenType = {}));
    class i {
        constructor(e, t, n, r) {
            this.screenType = e,
            this.title = t,
            this.animated = n,
            this.showModally = r,
            this.isNewTask = !1
        }
    }
    t.BaseNavigationRequest = i;
    t.ReactViewNavigationRequest = class extends i {
        constructor(e, t, n, i, a, s, o, c, l, d, u, g, h) {
            super(r.ReactView, i, a, s),
            this.appId = g,
            this.bundleName = e,
            this.componentName = t,
            this.shouldShowToolbar = n,
            this.toolBarText = i,
            this.animated = a,
            this.showModally = s,
            this.initialProperties = o,
            this.category = c,
            this.merchantId = l,
            this.merchantName = d,
            this.tAndCUrl = u,
            this.appUniqueId = h
        }
    }
    ;
    t.WebViewNavigationRequest = class extends i {
        constructor(e, t, n, i, a, s, o, c, l) {
            super(r.WebView, t, c, l),
            this.url = e,
            this.title = t,
            this.shouldShowToolBar = n,
            this.shouldShowBackButton = i,
            this.screenName = a,
            this.shouldAllowWebViewBack = s,
            this.shouldShowProgressWhileLoading = o
        }
    }
    ;
    t.PWAWebViewNavigationRequest = class extends i {
        constructor(e, t, n, i) {
            super(r.PWAWebView, "", !0, !0),
            this.merchantId = e,
            this.deepLinkUrl = t,
            this.appId = n,
            this.appUniqueId = i
        }
    }
    ;
    t.AppScreenNavigationRequest = class extends i {
        constructor(e, t, n, i, a, s) {
            super(r.AppScreen, i, a, s),
            this.screenName = e,
            this.url = t,
            this.params = n
        }
    }
    ;
    t.PaymentMetaData = class {
        constructor(e) {
            this.details = e
        }
    }
    ;
    t.PaymentNavigationRequest = class extends i {
        constructor(e, t, n, i, a, s, o, c, l, d) {
            super(r.PaymentsView, t, n, i),
            this.mode = a,
            this.microPayRequest = s,
            this.internalPaymentUiConfig = o,
            this.transactionType = c,
            this.metaData = l,
            this.originInfo = d
        }
    }
    ;
    t.GenericPaymentNavigationRequest = class extends i {
        constructor(e, t, n, i, a) {
            super(r.GenericPaymentsView, e, t, n),
            this.reservationId = i,
            a && (this.fallbackUrl = a)
        }
    }
    ;
    t.MandateSetupNavigationRequest = class extends i {
        constructor(e, t, n, i, a, s) {
            super(r.MandateSetup, n, i, a),
            this.mandateContext = e,
            this.mandateUiConfig = t,
            this.mandateType = s || "MERCHANT"
        }
    }
    ;
    t.AddToWalletNavigationRequest = class extends i {
        constructor(e, t, n, i) {
            super(r.AddToWallet, t, n, i),
            this.addToWalletUiContext = e
        }
    }
    ;
    t.TransactionDetailsNavigationRequest = class extends i {
        constructor(e, t, n, i, a, s, o) {
            super(r.TransactionDetail, t, n, i),
            this.transactionId = a,
            this.transactionType = s,
            this.info = o
        }
    }
    ;
    t.ContactNavigationRequest = class extends i {
        constructor(e, t, n, i, a, s, o, c, l, d, u, g, h, p) {
            super(r.ContactPicker, t, n, i),
            this.contactPickerMode = a,
            this.contactPickerType = s,
            this.initialContacts = o,
            this.transactionType = c,
            this.isVpaEnable = l,
            this.isSelfEnable = d,
            this.phoneContact = u,
            this.vpaContact = g,
            this.accountContact = h
        }
    }
    ;
    t.ProfileNavRequest = class extends i {
        constructor(e, t, n, r) {
            super(e, t, n, r)
        }
    }
    ;
    t.HelpPageNavRequest = class extends i {
        constructor(e, t, n, i, a, s, o, c, l) {
            super(r.HelpPage, t, n, i),
            this.transactionId = e,
            this.screen = o,
            this.url = c,
            this.shouldShowToolBar = a,
            this.shouldAllowWebViewBack = s,
            this.freshBotIntentData = l
        }
    }
    ;
    t.FreshBotIntentData = class {
        constructor(e) {
            this.freshBotScreens = e,
            this.queryParams = {}
        }
    }
    ;
    t.CloseAppNavRequest = class {
        constructor(e) {
            this.appIdentifier = e
        }
    }
    ;
    t.MicroAppNavigationRequest = class extends i {
        constructor(e, t, n, i, a, s) {
            super(r.MicroApp, i, a, s),
            this.appId = e,
            this.appUniqueId = t,
            this.initialProperties = n
        }
    }
}
, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var r = n(12).ExternalPaymentModels.ActionButtonProp;
    !function(e) {
        let t, n, i, a, s;
        !function(e) {
            e.discoveryModeValue = "PEER_TO_MERCHANT",
            e.title = "Pay",
            e.transactionType = "SENT_PAYMENT",
            e.timeoutTitle = "Payment Expired",
            e.timeoutMessage = "Sorry! Your payment request timed out. Please try again.",
            e.timeoutActionButtonTitle = "OK",
            e.dismissTitle = "Are you sure?",
            e.dismissMessage = "Going back will cancel the payment. Are you sure you want to proceed?",
            e.dismissPositiveButtonTitle = "I'm sure",
            e.dismissNegativeButtonTitle = "Dismiss",
            e.PAYMENT_TIMEOUT = "PAYMENT_TIMEOUT",
            e.PAYMENT_DISMISS = "PAYMENT_DISMISS",
            e.kMerchantId = "merchantId",
            e.kSellingPrice = "sellingPrice",
            e.kPayableAmount = "payableAmount",
            e.kServiceType = "serviceType",
            e.kServiceTypeValue = "WEBAPP",
            e.kReservationId = "reservationId",
            e.kServiceRequestId = "serviceRequestId",
            e.kServiceCategory = "serviceCategory",
            e.kServiceCategoryValue = "WEB",
            e.kServiceContext = "serviceContext",
            e.kQuantity = "quantity",
            e.kValidFor = "validFor",
            e.kMerchantTransactionId = "merchantTransactionId",
            e.kServiceTypeVersion = "serviceTypeVersion",
            e.kKey = "key",
            e.kValue = "value"
        }(t = e.Constant || (e.Constant = {})),
        function(e) {
            e[e.CONTACT_TYPE_VPA = 1] = "CONTACT_TYPE_VPA",
            e[e.CONTACT_TYPE_PHONE = 2] = "CONTACT_TYPE_PHONE",
            e[e.CONTACT_TYPE_MERCHANT = 3] = "CONTACT_TYPE_MERCHANT",
            e[e.CONTACT_TYPE_USER_DATA = 4] = "CONTACT_TYPE_USER_DATA",
            e[e.CONTACT_TYPE_EXTERNAL_UPI_MERCHANT = 5] = "CONTACT_TYPE_EXTERNAL_UPI_MERCHANT",
            e[e.CONTACT_TYPE_RETAIL_MERCHANT = 6] = "CONTACT_TYPE_RETAIL_MERCHANT",
            e[e.CONTACT_TYPE_BANK_ACCOUNT = 7] = "CONTACT_TYPE_BANK_ACCOUNT",
            e[e.CONTACT_TYPE_WALLET = 8] = "CONTACT_TYPE_WALLET",
            e[e.CONTACT_TYPE_MY_ACCOUNT = 9] = "CONTACT_TYPE_MY_ACCOUNT"
        }(n = e.CONTACT_TYPE || (e.CONTACT_TYPE = {})),
        function(e) {
            e[e.MODE_SEND_MONEY = 1] = "MODE_SEND_MONEY",
            e[e.MODE_SPLIT_MONEY = 2] = "MODE_SPLIT_MONEY",
            e[e.REQUEST_MONEY = 3] = "REQUEST_MONEY",
            e[e.MODE_RECHARGE_MOBILE = 4] = "MODE_RECHARGE_MOBILE",
            e[e.MODE_WALLET_TOP_UP = 5] = "MODE_WALLET_TOP_UP",
            e[e.MODE_BLE_PAYMENT = 6] = "MODE_BLE_PAYMENT"
        }(i = e.PAYMENT_MODE || (e.PAYMENT_MODE = {})),
        function(e) {
            e.SENT_PAYMENT = "SENT_PAYMENT",
            e.RECEIVED_PAYMENT = "RECEIVED_PAYMENT",
            e.USER_TO_USER_SENT_REQUEST = "USER_TO_USER_SENT_REQUEST",
            e.USER_TO_USER_RECEIVED_REQUEST = "USER_TO_USER_RECEIVED_REQUEST",
            e.ENSEMBLE_SENT_PAYMENT = "ENSEMBLE_SENT_PAYMENT",
            e.MISSED_PAYMENT = "MISSED_PAYMENT",
            e.PHONE_RECHARGE = "PHONE_RECHARGE",
            e.BILL_PAYMENT = "BILL_PAYMENT",
            e.TICKETING = "TICKETING",
            e.COMMUTE = "COMMUTE",
            e.UNKNOWN = "UNKNOWN"
        }(a = e.TRANSACTION_TYPE || (e.TRANSACTION_TYPE = {})),
        function(e) {
            e.MERCHANT_REVERSAL = "MERCHANT_REVERSAL",
            e.MERCHANT_CASHBACK = "MERCHANT_CASHBACK"
        }(s = e.TRANSFER_MODE || (e.TRANSFER_MODE = {}));
        e.Contact = class {
            constructor(e, t, n, r) {
                this.type = e,
                this.name = t,
                this.displayImageUrl = n,
                this.lookupId = r
            }
        }
        ;
        e.InternalPaymentUiConfig = class {
            constructor(e, t, n, i, a, s) {
                if (this.isAmountEditable = !1,
                this.isInitialContactEditable = !1,
                this.isNoteEditable = !1,
                this.showRateMeDialog = !1,
                this.title = e,
                this.initialAmount = t,
                this.initialContactList = n,
                this.confirmationScreenDuration = i,
                a)
                    this.confirmationActionButtonProperties = a;
                else {
                    let e = {
                        PENDING: new r("DONE"),
                        COMPLETED: new r("VIEW BOOKING"),
                        ERRORED: new r("DONE"),
                        DEFAULT: new r("DONE")
                    };
                    this.confirmationActionButtonProperties = e
                }
                this.shouldConfirmationCloseOnFailure = s || !1
            }
        }
        ;
        class o {
            constructor(e) {
                this.allowedInstruments = e,
                this.supportedInstruments = e
            }
        }
        e.PayRequest = o;
        e.MicroPayRequest = class extends o {
            constructor(e, t, n, r, i, a) {
                super(t),
                this.merchantId = e,
                this.serviceVersion = n,
                this.fallbackURL = r,
                this.paymentOptionsContext = i,
                this.serviceRequestId = a
            }
        }
        ;
        e.PaymentTimeOutModel = class {
            constructor(e, t, n, r, i, a) {
                this.time = e,
                this.showDialog = t,
                this.title = n,
                this.message = r,
                this.actionButtonName = i,
                this.errorCode = a
            }
        }
        ;
        e.DismissBehaviourModel = class {
            constructor(e, t, n, r, i, a) {
                this.showDialog = e,
                this.title = t,
                this.message = n,
                this.positiveButton = r,
                this.negativeButton = i,
                this.errorCode = a
            }
        }
        ;
        e.TopUpConsentContext = class {
            constructor(e, t, n) {
                this.showDialog = e,
                this.title = t,
                this.message = n
            }
        }
        ;
        e.AddToWalletUiContext = class {
            constructor(e, t, n, r, i, a, s, o, c, l, d, u) {
                this.walletPageTitle = e,
                this.suggestedAmount = t,
                this.showCloseWalletOption = n,
                this.hideWalletWithdrawal = r,
                this.minAmount = i,
                this.showRateMeDialog = a,
                this.isAmountEditable = s,
                this.confirmationScreenDuration = o,
                this.showTopupConsent = c,
                this.topUpConsentContext = l,
                this.paymentDismiss = d,
                this.paymentOptionsContext = u
            }
        }
        ;
        e.MandateConfig = class {
            constructor(e, t, n, r, i, a) {
                this.type = e,
                this.merchantId = t,
                this.serviceProviderIds = n,
                this.serviceType = r,
                this.serviceCategory = i,
                this.entityType = a
            }
        }
        ;
        e.MandateVisibleProperties = class {
            constructor(e, t, n, r, i) {
                this.amount = e,
                this.frequency = t,
                this.autoPayDay = n,
                this.payeeWidget = r,
                this.toolbar = i
            }
        }
        ;
        e.MandateUiConfig = class {
            constructor(e, t, n, r, i, a, s, o, c, l, d, u, g, h, p) {
                this.visibilityProperty = e,
                this.analyticsInfo = t,
                this.successMessage = n,
                this.actionButtonText = r,
                this.title = i,
                this.merchantName = a,
                this.merchantMandateDescription = s,
                this.merchantBannerImageId = o,
                this.merchantBannerImageSection = c,
                this.merchantImageId = l,
                this.merchantImageSection = d,
                this.mandateInfoLink = u,
                this.confirmationScreenDuration = g,
                this.dismissButtonDisplayTimeout = h,
                this.contactId = p
            }
        }
        ;
        e.PaymentOptionsContext = class {
            constructor(e) {
                this.type = "FULFILL_SERVICE",
                this.metaData = e
            }
        }
        ;
        e.PaymentOptionsContextMetadata = class {
            constructor(e, t, n, r) {
                this.merchantId = e,
                this.serviceCategory = t,
                this.serviceProviderId = n,
                this.serviceType = r
            }
        }
    }(t.ExternalPaymentsNamespace || (t.ExternalPaymentsNamespace = {}))
}
, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    const r = n(6);
    t.PhonePeWebSubscription = class {
        constructor(e, t, n) {
            this.eventName = t,
            this.listener = n,
            this.callbackName = e
        }
        remove() {
            r.EventHandler.removeSubscription(this)
        }
    }
}
, function(e, t, n) {
    "use strict";
    var r = this && this.__awaiter || function(e, t, n, r) {
        return new (n || (n = Promise))(function(i, a) {
            function s(e) {
                try {
                    c(r.next(e))
                } catch (e) {
                    a(e)
                }
            }
            function o(e) {
                try {
                    c(r.throw(e))
                } catch (e) {
                    a(e)
                }
            }
            function c(e) {
                e.done ? i(e.value) : new n(function(t) {
                    t(e.value)
                }
                ).then(s, o)
            }
            c((r = r.apply(e, t || [])).next())
        }
        )
    }
    ;
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    const i = n(7)
      , a = n(13)
      , s = n(15)
      , o = n(17)
      , c = n(11)
      , l = n(5)
      , d = n(20)
      , u = n(24)
      , g = n(27)
      , h = n(32)
      , p = n(35)
      , P = n(37)
      , m = n(39)
      , v = n(41)
      , N = n(1)
      , y = n(6)
      , T = n(2)
      , f = n(0)
      , C = n(3)
      , S = n(8)
      , b = n(12)
      , M = n(43)
      , E = n(45)
      , O = n(47)
      , A = n(49);
    var B = f.ExternalConstants.Permission
      , I = f.ExternalConstants.BlueToothListenerEvents
      , w = f.ExternalConstants.TokenType;
    t.MessagingHandler = N.MessagingHandler,
    t.EventHandler = y.EventHandler,
    t.Constants = f.ExternalConstants,
    t.PaymentModels = b.ExternalPaymentModels;
    class _ {
        constructor(e, t) {
            this.preferencesModule = h.NativePreferenceBridgeFactory.getNativePreferenceBridge(e, t),
            this.locationModule = u.LocationBridgeFactory.getNativeLocationBridge(e, t),
            this.navigationModule = g.NativeNavigationFactory.repository(e, t),
            this.cameraBridge = E.NativeCameraBridgeFactory.getNativeCameraBridge(e),
            this.permissionsBridge = o.NativePermissionsBridgeFactory.getPermissionsBridge(e, t),
            this.analyticsBridge = s.NativeAnalyticsBridgeFactory.getNativeAnalyticsBridge(e, t),
            this.authBridge = a.NativeOAuthBridgeFactory.bridge(e),
            this.deviceInfoBridge = p.NativeDeviceInfoBridgeFactory.bridge(e),
            this.bleManagerBridge = M.default.getBleManagerBridge(e),
            this.orderActionBridge = P.NativeOrderActionBridgeFactory.bridge(e),
            this.filePickerBridge = m.NativeFilePickerBridgeFactory.bridge(e),
            this.orientationBridge = v.OrientationBridgeFactory.getOrientationBridge(e),
            this.videoPlayerBridge = O.NativeVideoPlayerBridgeFactory.getNativeVideoPlayerBridge(e),
            this.species = e
        }
        static build(e, t) {
            return r(this, void 0, void 0, function*() {
                let n = t;
                if (n || (n = this.getOperatingSystem(e)),
                !n)
                    throw new Error(T.InternalConstants.ErrorCode.invalidParams);
                if (!l.PhonePeUtils.isValidSpecies(e) || !l.PhonePeUtils.isValidOS(n))
                    throw new Error(T.InternalConstants.ErrorCode.invalidParams);
                let r = new _(e,n);
                return e === f.ExternalConstants.Species.web && (yield c.MethodVersioningHandler.initSupportedVersionFromNative()),
                r
            })
        }
        static getOperatingSystem(e) {
            if (e === f.ExternalConstants.Species.web) {
                if (-1 !== navigator.userAgent.search(f.ExternalConstants.OSUserAgent.android))
                    return f.ExternalConstants.OS.android;
                if (-1 !== navigator.userAgent.search(f.ExternalConstants.OSUserAgent.ios))
                    return f.ExternalConstants.OS.ios;
                let e = C.PhonePeSDKWebConstants.NavigationIOS.navigateToPaymentsView;
                return l.PhonePeUtils.isValidMethodOniOS(e) ? f.ExternalConstants.OS.ios : f.ExternalConstants.OS.android
            }
            return f.ExternalConstants.OS.android
        }
        getItem(e, t, n) {
            try {
                l.PhonePeUtils.assertString(e),
                l.PhonePeUtils.assertString(t),
                l.PhonePeUtils.assertString(n, !0)
            } catch (e) {
                return l.PhonePeUtils.returnRejection(e)
            }
            return this.preferencesModule.getString(e, t, n)
        }
        setItem(e, t, n) {
            try {
                l.PhonePeUtils.assertString(e),
                l.PhonePeUtils.assertString(t),
                l.PhonePeUtils.assertString(n)
            } catch (e) {
                return l.PhonePeUtils.returnRejection(e)
            }
            return this.preferencesModule.saveString(e, t, n),
            l.PhonePeUtils.returnResolution(void 0)
        }
        removeItem(e, t) {
            try {
                l.PhonePeUtils.assertString(e),
                l.PhonePeUtils.assertString(t)
            } catch (e) {
                return l.PhonePeUtils.returnRejection(e)
            }
            return this.preferencesModule.removeItem(e, t),
            l.PhonePeUtils.returnResolution(void 0)
        }
        startUpdatingLocation() {
            this.locationModule.startUpdatingLocation()
        }
        stopUpdatingLocation() {
            this.locationModule.stopUpdatingLocation()
        }
        getCurrentLocation() {
            return this.locationModule.getCurrentLocation(!0)
        }
        registerLocationUpdateSuccessCallback(e, t) {
            try {
                l.PhonePeUtils.assertString(e),
                l.PhonePeUtils.assertFunction(t)
            } catch (e) {
                return l.PhonePeUtils.returnRejection(e)
            }
            let n = this.locationModule.onLocationUpdateSuccess(e, t);
            return l.PhonePeUtils.returnResolution(n)
        }
        registerLocationUpdateFailureCallback(e, t) {
            try {
                l.PhonePeUtils.assertString(e),
                l.PhonePeUtils.assertFunction(t)
            } catch (e) {
                return l.PhonePeUtils.returnRejection(e)
            }
            let n = this.locationModule.onLocationUpdateFailure(e, t);
            return l.PhonePeUtils.returnResolution(n)
        }
        openPaymentsPage(e, t, n, r, i, a) {
            return this.makeCommonPaymentsPageCall(T.InternalConstants.General.v1, e, t, n, r, i, a)
        }
        openTransactionDetailsPage(e) {
            try {
                l.PhonePeUtils.assertString(e)
            } catch (e) {
                return l.PhonePeUtils.returnRejection(e)
            }
            let t = d.ExternalNavigationFactory.transactionDetailRequest(e);
            return this.navigationModule.processNavigationRequestForResultAsync(t)
        }
        seekPermission(e) {
            try {
                l.PhonePeUtils.assertArray(e);
                for (let t of e)
                    l.PhonePeUtils.assertString(t),
                    l.PhonePeUtils.assert(void 0 !== B[t], T.InternalConstants.ErrorCode.invalidParams)
            } catch (e) {
                return l.PhonePeUtils.returnRejection(e)
            }
            return this.permissionsBridge.seekPermission(e)
        }
        openSettingsPageForPermission() {
            return this.permissionsBridge.openSettingsPageForPermission()
        }
        scanQRCode(e, t=".*") {
            return this.cameraBridge.scanQRCode(e, t)
        }
        startCamera() {
            return this.cameraBridge.startCamera()
        }
        loadFont(e, t, n) {
            if (this.species === f.ExternalConstants.Species.web)
                return l.PhonePeUtils.returnRejection(T.InternalConstants.ErrorCode.invalidParams);
            throw new Error("Wrong species sent")
        }
        logMerchantEvent(e, t) {
            try {
                l.PhonePeUtils.assertString(e),
                l.PhonePeUtils.assertObject(t, !0)
            } catch (e) {
                return l.PhonePeUtils.returnRejection(e)
            }
            return this.analyticsBridge.logMerchantEvent(e, t)
        }
        fetchGrantToken() {
            return this.authBridge.fetchGrantToken()
        }
        fetchPermissionGrantToken(e) {
            return this.authBridge.resourceGrant(e)
        }
        fetchAuthToken() {
            return this.authBridge.fetchAuthToken()
        }
        createServiceRequestToken() {
            return this.orderActionBridge.createServiceRequestToken()
        }
        getDeviceInfo() {
            return this.deviceInfoBridge.getDeviceInfo()
        }
        bluetoothRead(e, t, n) {
            return this.bleManagerBridge.read(e, t, n)
        }
        bluetoothReadRSSI(e) {
            return this.bleManagerBridge.readRSSI(e)
        }
        registerBluetoothOperationSuccessCallback(e, t, n) {
            try {
                l.PhonePeUtils.assertString(e),
                l.PhonePeUtils.assertFunction(n),
                l.PhonePeUtils.assert(Boolean(I[t]), T.InternalConstants.ErrorCode.invalidParams)
            } catch (e) {
                return l.PhonePeUtils.returnRejection(e)
            }
            let r = this.bleManagerBridge.registerBluetoothOperationSuccessCallback(e, t, n);
            return l.PhonePeUtils.returnResolution(r)
        }
        bluetoothRefreshCache(e) {
            return this.bleManagerBridge.refreshCache(e)
        }
        bluetoothRetrieveServices(e, t) {
            return this.bleManagerBridge.retrieveServices(e, t)
        }
        bluetoothWrite(e, t, n, r, i=20) {
            return this.bleManagerBridge.write(e, t, n, r, i)
        }
        bluetoothWriteWithoutResponse(e, t, n, r, i=20, a=10) {
            return this.bleManagerBridge.writeWithoutResponse(e, t, n, r, i, a)
        }
        bluetoothConnect(e) {
            return this.bleManagerBridge.connect(e)
        }
        bluetoothCreateBond(e) {
            return this.bleManagerBridge.createBond(e)
        }
        bluetoothRemoveBond(e) {
            return this.bleManagerBridge.removeBond(e)
        }
        bluetoothDisconnect(e) {
            return this.bleManagerBridge.disconnect(e)
        }
        bluetoothStartNotification(e, t, n) {
            return this.bleManagerBridge.startNotification(e, t, n)
        }
        bluetoothStopNotification(e, t, n) {
            return this.bleManagerBridge.stopNotification(e, t, n)
        }
        bluetoothCheckState() {
            this.bleManagerBridge.checkState()
        }
        bluetoothStart(e) {
            return this.bleManagerBridge.start(e)
        }
        bluetoothScan(e, t, n=!1, r={}) {
            return this.bleManagerBridge.scan(e, t, n, r)
        }
        bluetoothStopScan() {
            return this.bleManagerBridge.stopScan()
        }
        bluetoothEnableBluetooth() {
            return this.bleManagerBridge.enableBluetooth()
        }
        bluetoothGetConnectedPeripherals(e) {
            return this.bleManagerBridge.getConnectedPeripherals(e)
        }
        bluetoothGetBondedPeripherals() {
            return this.bleManagerBridge.getBondedPeripherals()
        }
        bluetoothGetDiscoveredPeripherals() {
            return this.bleManagerBridge.getDiscoveredPeripherals()
        }
        bluetoothRemovePeripheral(e) {
            return this.bleManagerBridge.removePeripheral(e)
        }
        bluetoothIsPeripheralConnected(e, t) {
            return this.bleManagerBridge.isPeripheralConnected(e, t)
        }
        bluetoothRequestConnectionPriority(e, t) {
            return this.bleManagerBridge.requestConnectionPriority(e, t)
        }
        bluetoothRequestMTU(e, t) {
            return this.bleManagerBridge.requestMTU(e, t)
        }
        reserveOrder(e, t) {
            let n;
            try {
                l.PhonePeUtils.assertString(e),
                l.PhonePeUtils.assertString(t),
                n = JSON.parse(A.Base64Client.decode(e)),
                l.PhonePeUtils.assertObject(n)
            } catch (e) {
                return l.PhonePeUtils.returnRejection(e)
            }
            return this.orderActionBridge.reserveOrder(l.PhonePeUtils.getReserveOrderPayload(n, t))
        }
        proceedToPay(e, t) {
            try {
                let n = {};
                e && (n = {
                    rid: e
                }),
                this.logMerchantEvent("CATEGORY_PAYMENT_INIT", n),
                l.PhonePeUtils.assertString(e),
                _.getOperatingSystem(this.species) !== f.ExternalConstants.OS.ios && l.PhonePeUtils.assertString(t)
            } catch (e) {
                return l.PhonePeUtils.returnRejection(e)
            }
            let n = t ? encodeURIComponent(t) : "";
            const r = d.ExternalNavigationFactory.genericPaymentNavigationRequest(e, n);
            return this.navigationModule.processNavigationRequestForResultAsync(r)
        }
        openPaymentsPageForReservedOrder(e, t, n, r, i, a) {
            const s = JSON.parse(A.Base64Client.decode(t));
            return this.makeCommonPaymentsPageCall(T.InternalConstants.General.v2, e, s, n, r, i, a)
        }
        makeCommonPaymentsPageCall(e, t, n, r, i, a, s) {
            try {
                l.PhonePeUtils.assertString(t),
                l.PhonePeUtils.assertObject(n),
                this.species === f.ExternalConstants.Species.web && l.PhonePeUtils.assertString(r, !0),
                l.PhonePeUtils.assertString(i, !0),
                l.PhonePeUtils.assertArray(a, !0)
            } catch (e) {
                return l.PhonePeUtils.returnRejection(e)
            }
            let o = n[S.ExternalPaymentsNamespace.Constant.kPayableAmount]
              , c = {};
            o && (c = {
                amount: o
            }),
            this.logMerchantEvent("CATEGORY_PAYMENT_INIT", c);
            let u = d.ExternalNavigationFactory.paymentNavigationRequest(t, n, e, r, i, a, s);
            return new Promise((e,t)=>{
                this.navigationModule.processNavigationRequestForResultAsync(u).then(t=>{
                    let r = {}
                      , i = S.ExternalPaymentsNamespace.Constant.kMerchantTransactionId
                      , a = n[i];
                    a && (r[i] = a),
                    e(r)
                }
                ).catch(e=>{
                    t(e)
                }
                )
            }
            )
        }
        selectFile(e, t) {
            try {
                l.PhonePeUtils.assertString(e),
                l.PhonePeUtils.assertBoolean(t)
            } catch (e) {
                return l.PhonePeUtils.returnRejection(e)
            }
            return this.filePickerBridge.selectFile(e, t)
        }
        readFile(e, t, n) {
            try {
                if (l.PhonePeUtils.assertString(e),
                l.PhonePeUtils.assertNumber(t),
                l.PhonePeUtils.assertNumber(n),
                t < 0 || n < 0)
                    throw new TypeError(T.InternalConstants.ErrorCode.invalidParams)
            } catch (e) {
                return l.PhonePeUtils.returnRejection(e)
            }
            return this.filePickerBridge.readFile(e, t, n)
        }
        changeOrientation(e) {
            try {
                if (!e)
                    throw new TypeError(T.InternalConstants.ErrorCode.invalidParams);
                l.PhonePeUtils.assertString(e)
            } catch (e) {
                return l.PhonePeUtils.returnRejection(e)
            }
            return this.orientationBridge.changeOrientation(e)
        }
        requestFullScreenMode() {
            this.orientationBridge.requestFullScreenMode()
        }
        requestExitFullScreenMode() {
            this.orientationBridge.requestExitFullScreenMode()
        }
        closeApp() {
            let e = new i.CloseAppNavRequest("");
            this.navigationModule.closeAppRequest(e)
        }
        openMicroApp(e) {
            try {
                l.PhonePeUtils.assertString(e)
            } catch (e) {
                return l.PhonePeUtils.returnRejection(e)
            }
            const t = {
                appUniqueId: e,
                microAppOpenAnalyticsInfo: {
                    pageDepth: "APP_REDIRECT",
                    index: 0,
                    source: "UNKNOWN",
                    category: "UNKNOWN",
                    serviceabilityStatus: "UNKNOWN",
                    appUniqueId: e
                }
            };
            return this.navigationModule.navigateToSwitchApp(t)
        }
        navigateToMap(e, t) {
            try {
                l.PhonePeUtils.assertNumber(e),
                l.PhonePeUtils.assertNumber(t),
                l.PhonePeUtils.assert(e <= 90 && e >= -90, "Latitude should be between -90 to 90"),
                l.PhonePeUtils.assert(t <= 180 && t >= -180, "Latitude should be between -180 to 180")
            } catch (e) {
                return l.PhonePeUtils.returnRejection(e)
            }
            return this.navigationModule.navigateToMap(e, t)
        }
        isVideoCallingEnabled() {
            return this.isMethodSupported("videoCall")
        }
        startVideoPlayer(e) {
            try {
                l.PhonePeUtils.assertString(e)
            } catch (e) {
                return l.PhonePeUtils.returnRejection(e)
            }
            return this.videoPlayerBridge.startVideoPlayer(e)
        }
        fetchToken(e) {
            try {
                l.PhonePeUtils.assert(Boolean(w[e]), T.InternalConstants.ErrorCode.invalidParams)
            } catch (e) {
                return l.PhonePeUtils.returnRejection(e)
            }
            return this.orderActionBridge.fetchToken(e)
        }
        isMethodSupported(e) {
            return c.MethodVersioningHandler.isMethodSupported(e)
        }
    }
    _.loggingEnabled = !1,
    t.PhonePe = _
}
, function(e, t, n) {
    "use strict";
    var r = this && this.__awaiter || function(e, t, n, r) {
        return new (n || (n = Promise))(function(i, a) {
            function s(e) {
                try {
                    c(r.next(e))
                } catch (e) {
                    a(e)
                }
            }
            function o(e) {
                try {
                    c(r.throw(e))
                } catch (e) {
                    a(e)
                }
            }
            function c(e) {
                e.done ? i(e.value) : new n(function(t) {
                    t(e.value)
                }
                ).then(s, o)
            }
            c((r = r.apply(e, t || [])).next())
        }
        )
    }
    ;
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    const i = n(4)
      , a = n(1)
      , s = n(3)
      , o = n(2);
    class c {
        static initSupportedVersionFromNative() {
            return r(this, void 0, void 0, function*() {
                yield this.fetchNativeSupportedSDKVersion().then(e=>{
                    i.Logger.logd("PhonePe", "Version received from native side = " + e),
                    c.version = Number(e)
                }
                ).catch(e=>{
                    throw i.Logger.logd("PhonePe", "Error found when trying to fetch version = " + e),
                    Error("Unable to fetch native version. App has to run inside PhonePe app.")
                }
                ),
                this.populateMethodToVersionMapping()
            })
        }
        static isMethodSupported(e) {
            if (e === s.PhonePeSDKWebConstants.Metadata.supportedVersion)
                return !0;
            if (!c.version)
                throw i.Logger.logd("PhonePe", "[Error] Can't call isMethodSupported before native has returned the version"),
                Error("Can't call isMethodSupported before native has returned the version");
            let t = c.methodToVersionMapping[e];
            if (!t)
                throw i.Logger.logd("PhonePe", "[Error] Could not find this method in mapping. This should never happen!"),
                Error("Could not find this method in supported methods.");
            {
                let e = t[s.PhonePeSDKWebConstants.General.min]
                  , n = t[s.PhonePeSDKWebConstants.General.max]
                  , r = c.version;
                if (i.Logger.logd("PhonePe", "Comparing minVersion = " + e + " maxVersion = " + n + " nativeSDKSupportVersion = " + r),
                r < e)
                    return !1;
                if (-1 !== n && r > n)
                    return !1
            }
            return !0
        }
        static fetchNativeSupportedSDKVersion() {
            return i.Logger.logd("PhonePe", "Trying to call supportedVersion method in fetchNativeSupportedSDKVersion"),
            a.MessagingHandler.storePromiseAndCallNative(s.PhonePeSDKWebConstants.Metadata.supportedVersion, s.PhonePeSDKWebConstants.Metadata.androidBridgeName, {})
        }
        static populateMethodToVersionMapping() {
            let e = {
                min: 1,
                max: -1
            };
            this.methodToVersionMapping[s.PhonePeSDKWebConstants.Preferences.getItem] = e,
            this.methodToVersionMapping[s.PhonePeSDKWebConstants.Preferences.setItem] = e,
            this.methodToVersionMapping[s.PhonePeSDKWebConstants.Preferences.removeItem] = e,
            this.methodToVersionMapping[s.PhonePeSDKWebConstants.Preferences.removeItemAndroid] = e,
            this.methodToVersionMapping[s.PhonePeSDKWebConstants.Location.startUpdatingLocation] = e,
            this.methodToVersionMapping[s.PhonePeSDKWebConstants.Location.stopUpdatingLocation] = e,
            this.methodToVersionMapping[s.PhonePeSDKWebConstants.Location.getCurrentLocation] = e,
            this.methodToVersionMapping[s.PhonePeSDKWebConstants.Navigation.navigateToPath] = e,
            this.methodToVersionMapping[s.PhonePeSDKWebConstants.Navigation.navigateToPathForResult] = e,
            this.methodToVersionMapping[s.PhonePeSDKWebConstants.NavigationIOS.navigateToPaymentsView] = e,
            this.methodToVersionMapping[s.PhonePeSDKWebConstants.NavigationIOS.navigateToHelpPage] = e,
            this.methodToVersionMapping[s.PhonePeSDKWebConstants.NavigationIOS.navigateToTransactionDetail] = e,
            this.methodToVersionMapping[s.PhonePeSDKWebConstants.User.getUserDetails] = e,
            this.methodToVersionMapping[s.PhonePeSDKWebConstants.Metadata.supportedVersion] = e,
            this.methodToVersionMapping[o.InternalConstants.PermissionsBridge.openSettingsPage] = e,
            this.methodToVersionMapping[o.InternalConstants.PermissionsBridge.seekPermission] = e,
            this.methodToVersionMapping[o.InternalConstants.AnalyticsBridge.methodName] = e,
            this.methodToVersionMapping[o.InternalConstants.AuthBridge.fetchGrantToken] = e,
            this.methodToVersionMapping[o.InternalConstants.CameraBridge.scanQRCode] = e,
            this.methodToVersionMapping[o.InternalConstants.CameraBridge.startCamera] = e,
            this.methodToVersionMapping[o.InternalConstants.OrderActionBridge.reserveOrder] = Object.assign({}, e, {
                min: 3
            }),
            this.methodToVersionMapping[o.InternalConstants.OrderActionBridge.openPaymentsPageForReservedOrder] = Object.assign({}, e, {
                min: 3
            }),
            this.methodToVersionMapping[o.InternalConstants.OrderActionBridge.fetchOrderRequestToken] = Object.assign({}, e, {
                min: 6
            }),
            this.methodToVersionMapping[o.InternalConstants.OrderActionBridge.fetchToken] = Object.assign({}, e, {
                min: 6
            }),
            this.methodToVersionMapping[o.InternalConstants.FilePickerBridge.readFile] = Object.assign({}, e, {
                min: 4
            }),
            this.methodToVersionMapping[o.InternalConstants.FilePickerBridge.selectFile] = Object.assign({}, e, {
                min: 4
            }),
            this.methodToVersionMapping[s.PhonePeSDKWebConstants.NavigationIOS.navigateToGenericPaymentsView] = Object.assign({}, e, {
                min: 5
            }),
            this.methodToVersionMapping[s.PhonePeSDKWebConstants.Navigation.navigateToGenericPayment] = Object.assign({}, e, {
                min: 5
            }),
            this.methodToVersionMapping[s.PhonePeSDKWebConstants.Navigation.navigateToGenericPaymentForResult] = Object.assign({}, e, {
                min: 5
            }),
            this.methodToVersionMapping[o.InternalConstants.AuthBridge.fetchAuthToken] = Object.assign({}, e, {
                min: 5
            }),
            this.methodToVersionMapping[o.InternalConstants.AuthBridge.fetchPermissionGrantToken] = Object.assign({}, e, {
                min: 5
            }),
            this.methodToVersionMapping[o.InternalConstants.BleManager.read] = Object.assign({}, e, {
                min: 6
            }),
            this.methodToVersionMapping[o.InternalConstants.BleManager.readRSSI] = Object.assign({}, e, {
                min: 6
            }),
            this.methodToVersionMapping[o.InternalConstants.BleManager.refreshCache] = Object.assign({}, e, {
                min: 6
            }),
            this.methodToVersionMapping[o.InternalConstants.BleManager.retrieveServices] = Object.assign({}, e, {
                min: 6
            }),
            this.methodToVersionMapping[o.InternalConstants.BleManager.write] = Object.assign({}, e, {
                min: 6
            }),
            this.methodToVersionMapping[o.InternalConstants.BleManager.writeWithoutResponse] = Object.assign({}, e, {
                min: 6
            }),
            this.methodToVersionMapping[o.InternalConstants.BleManager.connect] = Object.assign({}, e, {
                min: 6
            }),
            this.methodToVersionMapping[o.InternalConstants.BleManager.createBond] = Object.assign({}, e, {
                min: 6
            }),
            this.methodToVersionMapping[o.InternalConstants.BleManager.removeBond] = Object.assign({}, e, {
                min: 6
            }),
            this.methodToVersionMapping[o.InternalConstants.BleManager.disconnect] = Object.assign({}, e, {
                min: 6
            }),
            this.methodToVersionMapping[o.InternalConstants.BleManager.startNotification] = Object.assign({}, e, {
                min: 6
            }),
            this.methodToVersionMapping[o.InternalConstants.BleManager.stopNotification] = Object.assign({}, e, {
                min: 6
            }),
            this.methodToVersionMapping[o.InternalConstants.BleManager.checkState] = Object.assign({}, e, {
                min: 6
            }),
            this.methodToVersionMapping[o.InternalConstants.BleManager.start] = Object.assign({}, e, {
                min: 6
            }),
            this.methodToVersionMapping[o.InternalConstants.BleManager.scan] = Object.assign({}, e, {
                min: 6
            }),
            this.methodToVersionMapping[o.InternalConstants.BleManager.stopScan] = Object.assign({}, e, {
                min: 6
            }),
            this.methodToVersionMapping[o.InternalConstants.BleManager.enableBluetooth] = Object.assign({}, e, {
                min: 6
            }),
            this.methodToVersionMapping[o.InternalConstants.BleManager.getConnectedPeripherals] = Object.assign({}, e, {
                min: 6
            }),
            this.methodToVersionMapping[o.InternalConstants.BleManager.getBondedPeripherals] = Object.assign({}, e, {
                min: 6
            }),
            this.methodToVersionMapping[o.InternalConstants.BleManager.getDiscoveredPeripherals] = Object.assign({}, e, {
                min: 6
            }),
            this.methodToVersionMapping[o.InternalConstants.BleManager.removePeripheral] = Object.assign({}, e, {
                min: 6
            }),
            this.methodToVersionMapping[o.InternalConstants.BleManager.isPeripheralConnected] = Object.assign({}, e, {
                min: 6
            }),
            this.methodToVersionMapping[o.InternalConstants.BleManager.requestConnectionPriority] = Object.assign({}, e, {
                min: 6
            }),
            this.methodToVersionMapping[o.InternalConstants.BleManager.requestMTU] = Object.assign({}, e, {
                min: 6
            }),
            this.methodToVersionMapping[o.InternalConstants.BleManager.registerBluetoothOperationSuccessCallback] = Object.assign({}, e, {
                min: 6
            }),
            this.methodToVersionMapping[o.InternalConstants.NavigationBridge.navigateToMap] = Object.assign({}, e, {
                min: 6
            }),
            this.methodToVersionMapping[o.InternalConstants.NavigationBridge.navigateToSwitchApp] = Object.assign({}, e, {
                min: 6
            }),
            this.methodToVersionMapping[o.InternalConstants.OrientationBridge.changeOrientation] = Object.assign({}, e, {
                min: 6
            }),
            this.methodToVersionMapping[o.InternalConstants.OrientationBridge.requestExitFullScreenMode] = Object.assign({}, e, {
                min: 6
            }),
            this.methodToVersionMapping[o.InternalConstants.OrientationBridge.requestFullScreenMode] = Object.assign({}, e, {
                min: 6
            }),
            this.methodToVersionMapping[o.InternalConstants.Feature.videoCall] = Object.assign({}, e, {
                min: 7
            }),
            this.methodToVersionMapping[o.InternalConstants.VideoPlayerBridge.startVideoPlayer] = Object.assign({}, e, {
                min: 6
            })
        }
    }
    c.methodToVersionMapping = {},
    t.MethodVersioningHandler = c
}
, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }),
    function(e) {
        let t;
        !function(e) {
            e.PENDING = "PENDING",
            e.COMPLETED = "COMPLETED",
            e.ERRORED = "ERRORED",
            e.DEFAULT = "DEFAULT"
        }(t = e.TransactionState || (e.TransactionState = {}));
        e.ActionButtonProp = class {
            constructor(e, t) {
                this.name = e,
                this.shouldHide = t
            }
        }
    }(t.ExternalPaymentModels || (t.ExternalPaymentModels = {}))
}
, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    const r = n(14)
      , i = n(0);
    t.NativeOAuthBridgeFactory = class {
        static bridge(e) {
            if (e === i.ExternalConstants.Species.web)
                return new r.WebNativeOAuthBridge;
            throw new Error("Wrong species sent")
        }
    }
}
, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    const r = n(1)
      , i = n(2).InternalConstants.AuthBridge;
    t.WebNativeOAuthBridge = class {
        fetchGrantToken() {
            return new Promise((e,t)=>{
                r.MessagingHandler.storePromiseAndCallNative(i.fetchGrantToken, i.bridgeName, {}).then(t=>{
                    e(JSON.parse(t))
                }
                ).catch(e=>{
                    t(e)
                }
                )
            }
            )
        }
        resourceGrant(e) {
            return new Promise((t,n)=>{
                r.MessagingHandler.storePromiseAndCallNative(i.resourceGrant, i.bridgeName, {
                    permissions: e
                }).then(e=>{
                    t(JSON.parse(e))
                }
                ).catch(e=>{
                    n(e)
                }
                )
            }
            )
        }
        fetchAuthToken() {
            return new Promise((e,t)=>{
                r.MessagingHandler.storePromiseAndCallNative(i.fetchAuthToken, i.bridgeName, {}).then(t=>{
                    JSON.stringify(e(JSON.parse(t)))
                }
                ).catch(e=>{
                    t(e)
                }
                )
            }
            )
        }
    }
}
, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    const r = n(16)
      , i = n(0);
    t.NativeAnalyticsBridgeFactory = class {
        static getNativeAnalyticsBridge(e, t) {
            if (e === i.ExternalConstants.Species.web)
                return new r.WebNativeAnalyticsBridge;
            throw new Error("Wrong species sent")
        }
    }
}
, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    const r = n(1)
      , i = n(2);
    var a = i.InternalConstants.AnalyticsBridge;
    t.WebNativeAnalyticsBridge = class {
        logMerchantEvent(e, t) {
            return r.MessagingHandler.storePromiseAndCallNative(a.methodName, a.bridgeName, this.objectForAnalytics(e, t))
        }
        objectForAnalytics(e, t) {
            let n = {};
            return n[i.InternalConstants.AnalyticsBridge.kName] = e,
            t && (n[i.InternalConstants.AnalyticsBridge.kMetadata] = t),
            n
        }
    }
}
, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    const r = n(18)
      , i = n(19)
      , a = n(0);
    t.NativePermissionsBridgeFactory = class {
        static getPermissionsBridge(e, t) {
            if (e === a.ExternalConstants.Species.web)
                return t === a.ExternalConstants.OS.ios ? new i.WebPermissionsBridgeiOS(t) : new r.WebPermissionsBridge(t);
            throw new Error("Wrong species sent")
        }
    }
}
, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    const r = n(4)
      , i = n(5)
      , a = n(1);
    var s = n(2).InternalConstants.PermissionsBridge;
    t.WebPermissionsBridge = class {
        constructor(e) {
            this.operatingSystem = e
        }
        seekPermission(e) {
            let t = i.PhonePeUtils.osSpecificPermissionNames(e, this.operatingSystem);
            return new Promise((e,n)=>{
                a.MessagingHandler.storePromiseAndCallNative(s.seekPermission, s.name, {
                    permissions: t
                }).then(t=>{
                    if (r.Logger.logd("PhonePe", "Unstripped response = " + JSON.stringify(t)),
                    "string" == typeof t) {
                        let n = JSON.parse(t);
                        n.forEach(e=>{
                            let t = i.PhonePeUtils.strippedPermissionName(e[s.kPermission], this.operatingSystem);
                            e[s.kPermission] = t
                        }
                        ),
                        r.Logger.logd("PhonePe", "Stripped response = " + JSON.stringify(n)),
                        e(n)
                    } else
                        n("Wrong response sent by PhonePe")
                }
                ).catch(e=>{
                    n(e)
                }
                )
            }
            )
        }
        openSettingsPageForPermission() {
            return a.MessagingHandler.storePromiseAndCallNative(s.openSettingsPage, s.name, {})
        }
    }
}
, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    const r = n(1)
      , i = n(0)
      , a = n(2);
    var s = i.ExternalConstants.Permission
      , o = a.InternalConstants.PermissionsBridge;
    t.WebPermissionsBridgeiOS = class {
        constructor(e) {
            this.operatingSystem = e
        }
        seekPermission(e) {
            let t = e.map(e=>{
                if (e === s.LOCATION) {
                    let t = {};
                    return t[o.kPermission] = e,
                    navigator.geolocation ? new Promise((e,n)=>{
                        navigator.geolocation.getCurrentPosition(n=>{
                            t[o.kPermissionStatus] = !0,
                            t[o.kShowAgain] = !1,
                            e(t)
                        }
                        , n=>{
                            n && 1 === n.code ? (t[o.kPermissionStatus] = !1,
                            t[o.kShowAgain] = !1,
                            e(t)) : (t[o.kPermissionStatus] = !0,
                            t[o.kShowAgain] = !1,
                            e(t))
                        }
                        , {
                            timeout: 100
                        })
                    }
                    ) : (t[o.kPermissionStatus] = !1,
                    t[o.kShowAgain] = !1,
                    t)
                }
                {
                    let t = {};
                    return t[o.kPermission] = e,
                    t[o.kPermissionStatus] = !1,
                    t[o.kShowAgain] = !1,
                    t
                }
            }
            );
            return Promise.all(t)
        }
        openSettingsPageForPermission() {
            return r.MessagingHandler.storePromiseAndCallNative(o.openSettingsPage, o.name, {})
        }
    }
}
, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    const r = n(21)
      , i = n(22)
      , a = n(7)
      , s = n(8)
      , o = n(23);
    var c = s.ExternalPaymentsNamespace.Constant;
    t.ExternalNavigationFactory = class {
        static genericPaymentNavigationRequest(e, t) {
            return new a.GenericPaymentNavigationRequest("Pay",!0,!1,e,t)
        }
        static paymentNavigationRequest(e, t, n, l, d, u, g) {
            let h = t[s.ExternalPaymentsNamespace.Constant.kPayableAmount]
              , p = t[s.ExternalPaymentsNamespace.Constant.kValidFor];
            p && (p *= 1e3);
            let P = t[c.kMerchantId]
              , m = i.ExternalPaymentsRequestFactory.internalPaymentUIConfig(h, e, p, d, g, P)
              , v = i.ExternalPaymentsRequestFactory.microPayRequest(t, n, l)
              , N = new a.PaymentMetaData([{}]);
            if (void 0 !== u) {
                let e = [];
                for (let t of u)
                    for (let n in t)
                        if (t.hasOwnProperty(n)) {
                            let r = n
                              , i = t[n]
                              , a = {};
                            a[c.kKey] = r,
                            a[c.kValue] = i,
                            e.push(a)
                        }
                N.details = e
            }
            let y = t[c.kServiceCategory];
            y || (y = "JSSDK");
            let T = new r.OriginInfo(new o.AnalyticsInfo(y,y + "_NAVIGATE_TO_PAYMENTS",Math.random().toString(36).substring(7)));
            return new a.PaymentNavigationRequest("Pay","Pay",!0,!1,s.ExternalPaymentsNamespace.PAYMENT_MODE.MODE_SEND_MONEY,v,m,s.ExternalPaymentsNamespace.TRANSACTION_TYPE.SENT_PAYMENT,N,T)
        }
        static transactionDetailRequest(e) {
            let t = new r.OriginInfo(new o.AnalyticsInfo("JSSDK","JSSDK_NAVIGATE_TO_TRANSACTION_DETAILS",Math.random().toString(36).substring(7)));
            return new a.TransactionDetailsNavigationRequest("Details","Details",!0,!1,e,s.ExternalPaymentsNamespace.TRANSACTION_TYPE.SENT_PAYMENT,t)
        }
    }
}
, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    t.OriginInfo = class {
        constructor(e) {
            this.analyticsInfo = e
        }
    }
}
, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    const r = n(8);
    var i = r.ExternalPaymentsNamespace.Constant
      , a = r.ExternalPaymentsNamespace.PaymentOptionsContext
      , s = r.ExternalPaymentsNamespace.PaymentOptionsContextMetadata
      , o = r.ExternalPaymentsNamespace.MicroPayRequest
      , c = r.ExternalPaymentsNamespace.PaymentTimeOutModel
      , l = r.ExternalPaymentsNamespace.DismissBehaviourModel
      , d = r.ExternalPaymentsNamespace.InternalPaymentUiConfig
      , u = r.ExternalPaymentsNamespace.Contact
      , g = r.ExternalPaymentsNamespace.CONTACT_TYPE;
    const h = n(2);
    t.ExternalPaymentsRequestFactory = class {
        static microPayRequest(e, t, n) {
            let r = e[i.kServiceRequestId]
              , c = new o(e[i.kMerchantId],191,h.InternalConstants.General.v1,n,void 0,r);
            c.serviceProviderId = c.merchantId;
            let l = {};
            l[i.kSellingPrice] = e[i.kPayableAmount],
            l[i.kServiceType] = i.kServiceTypeValue,
            l[i.kReservationId] = e[i.kReservationId];
            let d = {};
            d[i.kServiceCategory] = e[i.kServiceCategory],
            l[i.kServiceContext] = d,
            e[i.kQuantity] && (l[i.kQuantity] = e[i.kQuantity]),
            l[i.kServiceTypeVersion] = e[i.kServiceTypeVersion],
            c.fulFillContext = JSON.stringify(l),
            c.discoveryContext = JSON.stringify(this.discoveryContext(c.merchantId));
            let u = new s(c.merchantId,e[i.kServiceCategory],c.merchantId,i.kServiceTypeValue);
            return c.paymentOptionsContext = JSON.stringify(new a(u)),
            c
        }
        static discoveryContext(e) {
            return {
                merchantId: e,
                mode: h.InternalConstants.General.discoveryContextMode
            }
        }
        static internalPaymentUIConfig(e, t, n, r, i, a) {
            let s = [new u(g.CONTACT_TYPE_MERCHANT,t,r,a)]
              , o = h.InternalConstants.General.confirmationScreenDuration
              , c = new d(h.InternalConstants.General.paymentScreenName,e,s,o,i);
            return void 0 !== n && null !== n && n > 0 && (c.paymentTimeout = this.paymentTimeoutModel(n)),
            c.paymentDismiss = this.paymentDismissModel(),
            c
        }
        static paymentTimeoutModel(e) {
            return new c(e,!0,i.timeoutTitle,i.timeoutMessage,i.timeoutActionButtonTitle,i.PAYMENT_TIMEOUT)
        }
        static paymentDismissModel() {
            return new l(!0,i.dismissTitle,i.dismissMessage,i.dismissPositiveButtonTitle,i.dismissNegativeButtonTitle,i.PAYMENT_DISMISS)
        }
    }
}
, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    t.AnalyticsInfo = class {
        constructor(e, t, n) {
            this.category = e,
            this.action = t,
            this.groupingKey = n,
            this.startTimeStamp = (new Date).getTime(),
            this.lastTimeStamp = this.startTimeStamp,
            this.customDimens = {},
            this.isTransactionalEvent = !1,
            this.value = 0,
            this.isFirstTime = !0
        }
        setValue(e) {
            this.value = e
        }
        setTransactionalEvent(e) {
            this.isTransactionalEvent = !0,
            this.value = e
        }
        setCustomDimension(e) {
            this.customDimens = e
        }
        setLastTimeStamp(e) {
            this.lastTimeStamp = e
        }
    }
}
, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    const r = n(25)
      , i = n(26)
      , a = n(0);
    t.LocationBridgeFactory = class {
        static getNativeLocationBridge(e, t) {
            if (e === a.ExternalConstants.Species.web)
                return t === a.ExternalConstants.OS.ios ? new r.WebLocationBridgeiOS : new i.WebLocationBridge;
            throw new Error("Wrong species sent")
        }
    }
}
, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    const r = n(9)
      , i = n(3)
      , a = n(6);
    var s = i.PhonePeSDKWebConstants.Location;
    class o {
        getAddress(e, t) {
            return Promise.reject("METHOD_NOT_SUPPORTED")
        }
        startUpdatingLocation() {
            navigator.geolocation && (this.watchId = navigator.geolocation.watchPosition(o.watchSuccessCallback.bind(this), o.watchErrorCallback.bind(this)))
        }
        stopUpdatingLocation() {
            navigator.geolocation && this.watchId && navigator.geolocation.clearWatch(this.watchId)
        }
        static watchSuccessCallback(e) {
            a.EventHandler.sendEvent(s.locationSuccessEventKey, JSON.stringify({
                latitude: e.coords.latitude,
                longitude: e.coords.longitude
            }))
        }
        static watchErrorCallback(e) {
            a.EventHandler.sendEvent(s.locationSuccessEventKey, e.message)
        }
        getCurrentLocation() {
            return new Promise((e,t)=>{
                navigator.geolocation ? navigator.geolocation.getCurrentPosition(t=>{
                    e(JSON.stringify({
                        latitude: t.coords.latitude,
                        longitude: t.coords.longitude
                    }))
                }
                , e=>{
                    t("LOCATION_FETCH_FAILURE")
                }
                ) : t("INTERNAL_ERROR")
            }
            )
        }
        onLocationUpdateSuccess(e, t) {
            let n = new r.PhonePeWebSubscription(e,s.locationSuccessEventKey,t);
            return a.EventHandler.addSubscription(n),
            n
        }
        onLocationUpdateFailure(e, t) {
            let n = new r.PhonePeWebSubscription(e,s.locationFailureEventKey,t);
            return a.EventHandler.addSubscription(n),
            n
        }
        isLocationTurnedOn() {
            return Promise.resolve()
        }
        turnOnLocation() {
            return Promise.resolve()
        }
        setLocationPriority(e) {}
    }
    t.WebLocationBridgeiOS = o
}
, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    const r = n(9)
      , i = n(3)
      , a = n(1)
      , s = n(6);
    var o = i.PhonePeSDKWebConstants.Location;
    t.WebLocationBridge = class {
        getAddress(e, t) {
            return Promise.resolve()
        }
        startUpdatingLocation() {
            a.MessagingHandler.callNative(o.startUpdatingLocation, o.androidBridgeName, {})
        }
        stopUpdatingLocation() {
            a.MessagingHandler.callNative(o.stopUpdatingLocation, o.androidBridgeName, {}),
            s.EventHandler.removeAllSubscriptions(o.locationSuccessEventKey),
            s.EventHandler.removeAllSubscriptions(o.locationFailureEventKey)
        }
        getCurrentLocation() {
            let e = {};
            return e[o.forceNewLocation] = !0,
            a.MessagingHandler.storePromiseAndCallNative(o.getCurrentLocation, o.androidBridgeName, e)
        }
        onLocationUpdateSuccess(e, t) {
            let n = new r.PhonePeWebSubscription(e,o.locationSuccessEventKey,t);
            return s.EventHandler.addSubscription(n),
            n
        }
        onLocationUpdateFailure(e, t) {
            let n = new r.PhonePeWebSubscription(e,o.locationFailureEventKey,t);
            return s.EventHandler.addSubscription(n),
            n
        }
        isLocationTurnedOn() {
            return Promise.resolve()
        }
        turnOnLocation() {
            return Promise.resolve()
        }
        setLocationPriority(e) {}
    }
}
, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    const r = n(28)
      , i = n(31)
      , a = n(0);
    t.NativeNavigationFactory = class {
        static repository(e, t) {
            if (e === a.ExternalConstants.Species.web)
                return t === a.ExternalConstants.OS.ios ? new i.IOSWebNavigationHandler : new r.AndroidWebNavigationHandler;
            throw new Error("Wrong species sent")
        }
    }
}
, function(e, t, n) {
    "use strict";
    var r = this && this.__awaiter || function(e, t, n, r) {
        return new (n || (n = Promise))(function(i, a) {
            function s(e) {
                try {
                    c(r.next(e))
                } catch (e) {
                    a(e)
                }
            }
            function o(e) {
                try {
                    c(r.throw(e))
                } catch (e) {
                    a(e)
                }
            }
            function c(e) {
                e.done ? i(e.value) : new n(function(t) {
                    t(e.value)
                }
                ).then(s, o)
            }
            c((r = r.apply(e, t || [])).next())
        }
        )
    }
    ;
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    const i = n(5)
      , a = n(1)
      , s = n(29)
      , o = n(7)
      , c = n(3)
      , l = n(2);
    var d = c.PhonePeSDKWebConstants.Navigation
      , u = l.InternalConstants.NavigationBridge
      , g = l.InternalConstants.ActivityID;
    class h {
        processNavigationRequestAsync(e, t) {
            return r(this, void 0, void 0, function*() {
                if (e.screenType === o.NavigationScreenType.PaymentsView) {
                    let n = e;
                    return this.navigateToPayment(n, e.isNewTask, t)
                }
                if (e.screenType === o.NavigationScreenType.TransactionDetail) {
                    let n = e;
                    return this.navigateToTransactionDetail(n, e.isNewTask, t)
                }
                if (e.screenType === o.NavigationScreenType.GenericPaymentsView) {
                    let n = e;
                    return this.navigateToGenericPayment(n, e.isNewTask, t)
                }
                return i.PhonePeUtils.returnRejection("Unhandled request type")
            })
        }
        processNavigationRequestForResultAsync(e) {
            return r(this, void 0, void 0, function*() {
                return this.processNavigationRequestAsync(e, !0)
            })
        }
        navigateToPayment(e, t, n) {
            let r = s.NativeNavigationRequestFactory.pathFromPaymentRequest(e, t)
              , i = this.objectForNavigation(r, g.payments, t);
            return n ? a.MessagingHandler.storePromiseAndCallNative(d.navigateToPathForResult, d.androidBridgeName, i) : a.MessagingHandler.callNative(d.navigateToPath, d.androidBridgeName, i)
        }
        navigateToTransactionDetail(e, t, n) {
            return r(this, void 0, void 0, function*() {
                let r = s.NativeNavigationRequestFactory.pathFromTransactionDetailsRequest(e, t)
                  , i = this.objectForNavigation(r, g.transactionDetails, t);
                return n ? a.MessagingHandler.storePromiseAndCallNative(d.navigateToPathForResult, d.androidBridgeName, i) : a.MessagingHandler.callNative(d.navigateToPath, d.androidBridgeName, i)
            })
        }
        navigateToGenericPayment(e, t, n) {
            let r = s.NativeNavigationRequestFactory.pathFromGenericPaymentRequest(e, t)
              , i = this.objectForNavigation(r, g.payments, t);
            return n ? a.MessagingHandler.storePromiseAndCallNative(d.navigateToPathForResult, d.androidBridgeName, i) : a.MessagingHandler.callNative(d.navigateToPath, d.androidBridgeName, i)
        }
        objectForNavigation(e, t, n) {
            let r = {};
            return r[h.pathKey] = JSON.stringify(e),
            r[h.activityIdKey] = t,
            r[h.isNewTaskKey] = n ? 268435456 : 0,
            r
        }
        closeAppRequest(e) {}
        navigateToMap(e, t) {
            return new Promise((n,r)=>{
                a.MessagingHandler.storePromiseAndCallNative(u.navigateToMap, u.bridgeName, {
                    latitude: e,
                    longitude: t
                }).then(e=>{
                    n(JSON.parse(e))
                }
                ).catch(e=>{
                    r(e)
                }
                )
            }
            )
        }
        navigateToSwitchApp(e) {
            return new Promise((t,n)=>{
                a.MessagingHandler.storePromiseAndCallNative(u.navigateToSwitchApp, u.bridgeName, e).then(e=>{
                    t(JSON.parse(e))
                }
                ).catch(e=>{
                    n(e)
                }
                )
            }
            )
        }
    }
    h.pathKey = "path",
    h.activityIdKey = "activityId",
    h.isNewTaskKey = "isNewTask",
    t.AndroidWebNavigationHandler = h
}
, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    const r = n(30);
    t.NativeNavigationRequestFactory = class {
        static pathFromPaymentRequest(e, t) {
            let n = []
              , i = new r.Node("payment_activity","ACTIVITY",{})
              , a = {};
            a.mode = JSON.stringify(e.mode),
            a.internalPaymentUiConfig = JSON.stringify(e.internalPaymentUiConfig),
            a.microPayRequest = JSON.stringify(e.microPayRequest),
            a.transactionType = JSON.stringify(e.transactionType),
            a.info = JSON.stringify(e.originInfo),
            a.metaData = JSON.stringify(e.metaData);
            let s = new r.Node("micro_app_payment","FRAGMENT",a);
            return n.push(i),
            n.push(s),
            new r.Path(n)
        }
        static pathFromGenericPaymentRequest(e, t) {
            let n = []
              , i = new r.Node("payment_activity","ACTIVITY",{})
              , a = {};
            a.reservationId = e.reservationId,
            a.fallbackUrl = e.fallbackUrl;
            let s = new r.Node("micro_app_aggregator_payment","FRAGMENT",a);
            return n.push(i),
            n.push(s),
            new r.Path(n)
        }
        static pathFromTransactionDetailsRequest(e, t) {
            let n = []
              , i = new r.Node("transaction_details_activity","ACTIVITY",{})
              , a = {};
            a.transactionId = JSON.stringify(e.transactionId),
            a.transactionType = JSON.stringify("TICKETING"),
            a.info = JSON.stringify(e.info);
            let s = new r.Node("transaction_details_fragment","FRAGMENT",a);
            return n.push(i),
            n.push(s),
            new r.Path(n)
        }
    }
}
, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    t.Node = class {
        constructor(e, t, n) {
            this.name = e,
            this.screenType = t,
            this.data = n
        }
    }
    ;
    t.Path = class {
        constructor(e) {
            this.node = e
        }
    }
}
, function(e, t, n) {
    "use strict";
    var r = this && this.__awaiter || function(e, t, n, r) {
        return new (n || (n = Promise))(function(i, a) {
            function s(e) {
                try {
                    c(r.next(e))
                } catch (e) {
                    a(e)
                }
            }
            function o(e) {
                try {
                    c(r.throw(e))
                } catch (e) {
                    a(e)
                }
            }
            function c(e) {
                e.done ? i(e.value) : new n(function(t) {
                    t(e.value)
                }
                ).then(s, o)
            }
            c((r = r.apply(e, t || [])).next())
        }
        )
    }
    ;
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    const i = n(5)
      , a = n(7)
      , s = n(1)
      , o = n(3);
    t.IOSWebNavigationHandler = class {
        processNavigationRequestAsync(e, t) {
            return r(this, void 0, void 0, function*() {
                if (e.screenType === a.NavigationScreenType.PaymentsView) {
                    let n = e;
                    return this.navigateToPayment(n, e.isNewTask, t)
                }
                if (e.screenType === a.NavigationScreenType.TransactionDetail) {
                    let n = e;
                    return this.navigateToTransactionDetail(n, e.isNewTask, t)
                }
                if (e.screenType === a.NavigationScreenType.GenericPaymentsView) {
                    let n = e;
                    return this.navigateToGenericPayment(n, e.isNewTask, t)
                }
                return i.PhonePeUtils.returnRejection("Unhandled request type")
            })
        }
        processNavigationRequestForResultAsync(e) {
            return r(this, void 0, void 0, function*() {
                return this.processNavigationRequestAsync(e, !0)
            })
        }
        navigateToPayment(e, t, n) {
            let r = e
              , i = o.PhonePeSDKWebConstants.NavigationIOS.navigateToPaymentsView;
            return s.MessagingHandler.storePromiseAndCallNative(i, "", r)
        }
        navigateToTransactionDetail(e, t, n) {
            return r(this, void 0, void 0, function*() {
                let t = e
                  , n = o.PhonePeSDKWebConstants.NavigationIOS.navigateToTransactionDetail;
                return s.MessagingHandler.storePromiseAndCallNative(n, "", t)
            })
        }
        navigateToGenericPayment(e, t, n) {
            return r(this, void 0, void 0, function*() {
                let t = e
                  , n = o.PhonePeSDKWebConstants.NavigationIOS.navigateToGenericPaymentsView;
                return s.MessagingHandler.storePromiseAndCallNative(n, "", t)
            })
        }
        closeAppRequest(e) {}
        navigateToMap(e, t) {
            return Promise.reject("Implementation not found")
        }
        navigateToSwitchApp(e) {
            return Promise.reject("Implementation not found")
        }
    }
}
, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    const r = n(33)
      , i = n(0)
      , a = n(34);
    t.NativePreferenceBridgeFactory = class {
        static getNativePreferenceBridge(e, t) {
            if (e === i.ExternalConstants.Species.web)
                return t === i.ExternalConstants.OS.ios ? new a.WebNativePreferenceBridgeiOS(t) : new r.WebNativePreferenceBridge(t);
            throw new Error("Wrong species sent")
        }
    }
}
, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    const r = n(4)
      , i = n(1)
      , a = n(0)
      , s = n(3);
    var o = s.PhonePeSDKWebConstants.Preferences;
    t.WebNativePreferenceBridge = class {
        constructor(e) {
            this.operatingSystem = e
        }
        getString(e, t, n) {
            let r = this.prefObject(e, t, void 0, n);
            return i.MessagingHandler.storePromiseAndCallNative(o.getItem, o.androidBridgeName, r)
        }
        getNumber(e, t, n) {
            return new Promise((e,t)=>{
                t("This should not be called in case of web pref bridge")
            }
            )
        }
        getDecryptedUserId() {
            return new Promise((e,t)=>{
                t("This should not be called in case of web pref bridge")
            }
            )
        }
        saveNumber(e, t, n) {
            r.Logger.logd("PhonePe", "[Error] his should not be called in case of web pref bridge")
        }
        saveString(e, t, n) {
            let r = this.prefObject(e, t, n, void 0);
            i.MessagingHandler.callNative(o.setItem, o.androidBridgeName, r)
        }
        removeItem(e, t) {
            let n = this.prefObject(e, t, void 0, void 0)
              , r = o.removeItem;
            this.operatingSystem === a.ExternalConstants.OS.android && (r = o.removeItemAndroid),
            i.MessagingHandler.callNative(r, s.PhonePeSDKWebConstants.Preferences.androidBridgeName, n)
        }
        prefObject(e, t, n, r) {
            let i = {};
            return e && (i[s.PhonePeSDKWebConstants.General.prefName] = e),
            t && (i[s.PhonePeSDKWebConstants.General.key] = t),
            r && (i[s.PhonePeSDKWebConstants.General.defaultValue] = r),
            n && (i[s.PhonePeSDKWebConstants.General.value] = n),
            i
        }
    }
}
, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    const r = n(4);
    class i {
        constructor(e) {
            this.operatingSystem = e
        }
        getString(e, t, n) {
            const r = this.createKey(e, t);
            return new Promise((e,t)=>{
                e(window.localStorage.getItem(r) || n)
            }
            )
        }
        getNumber(e, t, n) {
            return new Promise((e,t)=>{
                t("This should not be called in case of web pref bridge")
            }
            )
        }
        getDecryptedUserId() {
            return new Promise((e,t)=>{
                t("This should not be called in case of web pref bridge")
            }
            )
        }
        saveNumber(e, t, n) {
            r.Logger.logd("PhonePe", "[Error] his should not be called in case of web pref bridge")
        }
        saveString(e, t, n) {
            const r = this.createKey(e, t);
            window.localStorage.setItem(r, n)
        }
        removeItem(e, t) {
            const n = this.createKey(e, t);
            window.localStorage.removeItem(n)
        }
        createKey(e, t) {
            return e + i.keySeperator + t
        }
    }
    i.keySeperator = "::",
    t.WebNativePreferenceBridgeiOS = i
}
, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    const r = n(36)
      , i = n(0);
    t.NativeDeviceInfoBridgeFactory = class {
        static bridge(e) {
            if (e === i.ExternalConstants.Species.web)
                return new r.WebNativeDeviceInfoBridge;
            throw new Error("Wrong species sent")
        }
    }
}
, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    t.WebNativeDeviceInfoBridge = class {
        getDeviceInfo() {
            return Promise.resolve()
        }
    }
}
, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    const r = n(38)
      , i = n(0);
    t.NativeOrderActionBridgeFactory = class {
        static bridge(e) {
            if (e === i.ExternalConstants.Species.web)
                return new r.WebNativeOrderActionBridge;
            throw new Error("Wrong species sent")
        }
    }
}
, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    const r = n(1)
      , i = n(2).InternalConstants.OrderActionBridge;
    t.WebNativeOrderActionBridge = class {
        reserveOrder(e) {
            return new Promise((t,n)=>{
                r.MessagingHandler.storePromiseAndCallNative(i.reserveOrder, i.bridgeName, e).then(e=>{
                    t(JSON.parse(e))
                }
                ).catch(e=>{
                    n(e)
                }
                )
            }
            )
        }
        createServiceRequestToken() {
            return new Promise((e,t)=>{
                r.MessagingHandler.storePromiseAndCallNative(i.fetchOrderRequestToken, i.bridgeName, {}).then(t=>{
                    e(JSON.parse(t))
                }
                ).catch(e=>{
                    t(e)
                }
                )
            }
            )
        }
        fetchToken(e) {
            return new Promise((t,n)=>{
                r.MessagingHandler.storePromiseAndCallNative(i.fetchToken, i.bridgeName, {
                    tokenType: e
                }).then(e=>{
                    t(JSON.parse(e))
                }
                ).catch(e=>{
                    n(e)
                }
                )
            }
            )
        }
    }
}
, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    const r = n(40)
      , i = n(0);
    t.NativeFilePickerBridgeFactory = class {
        static bridge(e) {
            if (e === i.ExternalConstants.Species.web)
                return new r.WebNativeFilePickerBridge;
            throw new Error("Wrong species sent")
        }
    }
}
, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    const r = n(1)
      , i = n(2).InternalConstants.FilePickerBridge;
    t.WebNativeFilePickerBridge = class {
        selectFile(e, t) {
            return new Promise((n,a)=>{
                r.MessagingHandler.storePromiseAndCallNative(i.selectFile, i.bridgeName, {
                    mimeType: e,
                    allowMultiple: t
                }).then(e=>{
                    n(JSON.parse(e))
                }
                ).catch(e=>{
                    a(e)
                }
                )
            }
            )
        }
        readFile(e, t, n) {
            return new Promise((a,s)=>{
                r.MessagingHandler.storePromiseAndCallNative(i.readFile, i.bridgeName, {
                    uri: e,
                    offset: t,
                    length: n
                }).then(e=>{
                    a(JSON.parse(e))
                }
                ).catch(e=>{
                    s(e)
                }
                )
            }
            )
        }
    }
}
, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    const r = n(0)
      , i = n(42);
    t.OrientationBridgeFactory = class {
        static getOrientationBridge(e) {
            if (e === r.ExternalConstants.Species.web)
                return new i.OrientationBridge;
            throw new Error("Wrong species sent")
        }
    }
}
, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    const r = n(1)
      , i = n(2).InternalConstants.OrientationBridge;
    t.OrientationBridge = class {
        changeOrientation(e) {
            return new Promise((t,n)=>{
                r.MessagingHandler.storePromiseAndCallNative(i.changeOrientation, i.bridgeName, {
                    orientation: e
                }).then(e=>{
                    t(JSON.parse(e))
                }
                ).catch(e=>{
                    n(e)
                }
                )
            }
            )
        }
        requestExitFullScreenMode() {
            r.MessagingHandler.storePromiseAndCallNative(i.requestExitFullScreenMode, i.bridgeName, {})
        }
        requestFullScreenMode() {
            r.MessagingHandler.storePromiseAndCallNative(i.requestFullScreenMode, i.bridgeName, {})
        }
    }
}
, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    const r = n(0)
      , i = n(44);
    t.default = class {
        static getBleManagerBridge(e) {
            if (e === r.ExternalConstants.Species.web)
                return new i.WebPPBleManager;
            throw new Error("Wrong species sent")
        }
    }
}
, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    const r = n(1)
      , i = n(2).InternalConstants.BleManager
      , a = n(9)
      , s = n(6);
    t.WebPPBleManager = class {
        read(e, t, n) {
            return new Promise((a,s)=>{
                r.MessagingHandler.storePromiseAndCallNative(i.read, i.bridgeName, {
                    peripheralId: e,
                    serviceUUID: t,
                    characteristicUUID: n
                }).then(e=>{
                    a(JSON.parse(e))
                }
                ).catch(e=>{
                    s(e)
                }
                )
            }
            )
        }
        readRSSI(e) {
            return new Promise((t,n)=>{
                r.MessagingHandler.storePromiseAndCallNative(i.readRSSI, i.bridgeName, {
                    peripheralId: e
                }).then(e=>{
                    t(JSON.parse(e))
                }
                ).catch(e=>{
                    n(e)
                }
                )
            }
            )
        }
        refreshCache(e) {
            return new Promise((t,n)=>{
                r.MessagingHandler.storePromiseAndCallNative(i.refreshCache, i.bridgeName, {
                    peripheralId: e
                }).then(e=>{
                    t(JSON.parse(e))
                }
                ).catch(e=>{
                    n(e)
                }
                )
            }
            )
        }
        retrieveServices(e, t) {
            return new Promise((n,a)=>{
                r.MessagingHandler.storePromiseAndCallNative(i.retrieveServices, i.bridgeName, {
                    peripheralId: e,
                    services: t
                }).then(e=>{
                    n(JSON.parse(e))
                }
                ).catch(e=>{
                    a(e)
                }
                )
            }
            )
        }
        write(e, t, n, a, s) {
            return new Promise((o,c)=>{
                r.MessagingHandler.storePromiseAndCallNative(i.write, i.bridgeName, {
                    peripheralId: e,
                    serviceUUID: t,
                    characteristicUUID: n,
                    data: a,
                    maxByteSize: s
                }).then(e=>{
                    o(JSON.parse(e))
                }
                ).catch(e=>{
                    c(e)
                }
                )
            }
            )
        }
        writeWithoutResponse(e, t, n, a, s, o) {
            return new Promise((c,l)=>{
                r.MessagingHandler.storePromiseAndCallNative(i.writeWithoutResponse, i.bridgeName, {
                    peripheralId: e,
                    serviceUUID: t,
                    characteristicUUID: n,
                    data: a,
                    maxByteSize: s,
                    queueSleepTime: o
                }).then(e=>{
                    c(JSON.parse(e))
                }
                ).catch(e=>{
                    l(e)
                }
                )
            }
            )
        }
        connect(e) {
            return new Promise((t,n)=>{
                r.MessagingHandler.storePromiseAndCallNative(i.connect, i.bridgeName, {
                    peripheralId: e
                }).then(e=>{
                    t(JSON.parse(e))
                }
                ).catch(e=>{
                    n(e)
                }
                )
            }
            )
        }
        createBond(e) {
            return new Promise((t,n)=>{
                r.MessagingHandler.storePromiseAndCallNative(i.createBond, i.bridgeName, {
                    peripheralId: e
                }).then(e=>{
                    t(JSON.parse(e))
                }
                ).catch(e=>{
                    n(e)
                }
                )
            }
            )
        }
        registerBluetoothOperationSuccessCallback(e, t, n) {
            let r = new a.PhonePeWebSubscription(e,t,n);
            return s.EventHandler.addSubscription(r),
            r
        }
        removeBond(e) {
            return new Promise((t,n)=>{
                r.MessagingHandler.storePromiseAndCallNative(i.removeBond, i.bridgeName, {
                    peripheralId: e
                }).then(e=>{
                    t(JSON.parse(e))
                }
                ).catch(e=>{
                    n(e)
                }
                )
            }
            )
        }
        disconnect(e) {
            return new Promise((t,n)=>{
                r.MessagingHandler.storePromiseAndCallNative(i.disconnect, i.bridgeName, {
                    peripheralId: e
                }).then(e=>{
                    t(JSON.parse(e))
                }
                ).catch(e=>{
                    n(e)
                }
                )
            }
            )
        }
        startNotification(e, t, n) {
            return new Promise((a,s)=>{
                r.MessagingHandler.storePromiseAndCallNative(i.startNotification, i.bridgeName, {
                    peripheralId: e,
                    serviceUUID: t,
                    characteristicUUID: n
                }).then(e=>{
                    a(JSON.parse(e))
                }
                ).catch(e=>{
                    s(e)
                }
                )
            }
            )
        }
        stopNotification(e, t, n) {
            return new Promise((a,s)=>{
                r.MessagingHandler.storePromiseAndCallNative(i.stopNotification, i.bridgeName, {
                    peripheralId: e,
                    serviceUUID: t,
                    characteristicUUID: n
                }).then(e=>{
                    a(JSON.parse(e))
                }
                ).catch(e=>{
                    s(e)
                }
                )
            }
            )
        }
        checkState() {
            return new Promise((e,t)=>{
                r.MessagingHandler.storePromiseAndCallNative(i.checkState, i.bridgeName, {}).then(t=>{
                    e(JSON.parse(t))
                }
                ).catch(e=>{
                    t(e)
                }
                )
            }
            )
        }
        start(e) {
            return e || (e = {}),
            new Promise((t,n)=>{
                r.MessagingHandler.storePromiseAndCallNative(i.start, i.bridgeName, {
                    options: e
                }).then(e=>{
                    t(JSON.parse(e))
                }
                ).catch(e=>{
                    n(e)
                }
                )
            }
            )
        }
        scan(e, t, n, a) {
            return new Promise((s,o)=>{
                r.MessagingHandler.storePromiseAndCallNative(i.scan, i.bridgeName, {
                    serviceUUIDs: e,
                    seconds: t,
                    allowDuplicates: n,
                    scanningOptions: a
                }).then(e=>{
                    s(JSON.parse(e))
                }
                ).catch(e=>{
                    o(e)
                }
                )
            }
            )
        }
        stopScan() {
            return new Promise((e,t)=>{
                r.MessagingHandler.storePromiseAndCallNative(i.stopScan, i.bridgeName, {}).then(t=>{
                    e(JSON.parse(t))
                }
                ).catch(e=>{
                    t(e)
                }
                )
            }
            )
        }
        enableBluetooth() {
            return new Promise((e,t)=>{
                r.MessagingHandler.storePromiseAndCallNative(i.enableBluetooth, i.bridgeName, {}).then(t=>{
                    e(JSON.parse(t))
                }
                ).catch(e=>{
                    t(e)
                }
                )
            }
            )
        }
        getConnectedPeripherals(e) {
            return new Promise((t,n)=>{
                r.MessagingHandler.storePromiseAndCallNative(i.getConnectedPeripherals, i.bridgeName, {
                    serviceUUIDs: e
                }).then(e=>{
                    t(JSON.parse(e))
                }
                ).catch(e=>{
                    n(e)
                }
                )
            }
            )
        }
        getBondedPeripherals() {
            return new Promise((e,t)=>{
                r.MessagingHandler.storePromiseAndCallNative(i.getBondedPeripherals, i.bridgeName, {}).then(t=>{
                    e(JSON.parse(t))
                }
                ).catch(e=>{
                    t(e)
                }
                )
            }
            )
        }
        getDiscoveredPeripherals() {
            return new Promise((e,t)=>{
                r.MessagingHandler.storePromiseAndCallNative(i.getDiscoveredPeripherals, i.bridgeName, {}).then(t=>{
                    e(JSON.parse(t))
                }
                ).catch(e=>{
                    t(e)
                }
                )
            }
            )
        }
        removePeripheral(e) {
            return new Promise((t,n)=>{
                r.MessagingHandler.storePromiseAndCallNative(i.removePeripheral, i.bridgeName, {
                    peripheralId: e
                }).then(e=>{
                    t(JSON.parse(e))
                }
                ).catch(e=>{
                    n(e)
                }
                )
            }
            )
        }
        isPeripheralConnected(e, t) {
            return new Promise((n,a)=>{
                r.MessagingHandler.storePromiseAndCallNative(i.isPeripheralConnected, i.bridgeName, {
                    peripheralId: e,
                    serviceUUIDs: t
                }).then(e=>{
                    n(JSON.parse(e))
                }
                ).catch(e=>{
                    a(e)
                }
                )
            }
            )
        }
        requestConnectionPriority(e, t) {
            return new Promise((n,a)=>{
                r.MessagingHandler.storePromiseAndCallNative(i.requestConnectionPriority, i.bridgeName, {
                    peripheralId: e,
                    connectionPriority: t
                }).then(e=>{
                    n(JSON.parse(e))
                }
                ).catch(e=>{
                    a(e)
                }
                )
            }
            )
        }
        requestMTU(e, t) {
            return new Promise((n,a)=>{
                r.MessagingHandler.storePromiseAndCallNative(i.requestMTU, i.bridgeName, {
                    peripheralId: e,
                    mtu: t
                }).then(e=>{
                    n(JSON.parse(e))
                }
                ).catch(e=>{
                    a(e)
                }
                )
            }
            )
        }
    }
}
, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    const r = n(46)
      , i = n(0);
    t.NativeCameraBridgeFactory = class {
        static getNativeCameraBridge(e) {
            if (e === i.ExternalConstants.Species.web)
                return new r.WebNativeCameraBridge;
            throw new Error("Wrong species sent")
        }
    }
}
, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    const r = n(1);
    var i = n(3).PhonePeSDKWebConstants.Camera;
    t.WebNativeCameraBridge = class {
        scanQRCode(e, t) {
            return new Promise((n,a)=>{
                r.MessagingHandler.storePromiseAndCallNative(i.scanQRCode, i.androidBridgeName, {
                    showGallery: e,
                    validator: t
                }).then(e=>{
                    n(e)
                }
                ).catch(e=>{
                    a(e)
                }
                )
            }
            )
        }
        startCamera() {
            return new Promise((e,t)=>{
                r.MessagingHandler.storePromiseAndCallNative(i.startCamera, i.androidBridgeName, {}).then(t=>{
                    e(t)
                }
                ).catch(e=>{
                    t(e)
                }
                )
            }
            )
        }
    }
}
, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    const r = n(48)
      , i = n(0);
    t.NativeVideoPlayerBridgeFactory = class {
        static getNativeVideoPlayerBridge(e) {
            if (e === i.ExternalConstants.Species.web)
                return new r.WebNativeVideoPlayerBridge;
            throw new Error("Wrong species sent")
        }
    }
}
, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    const r = n(1);
    var i = n(2).InternalConstants.VideoPlayerBridge;
    t.WebNativeVideoPlayerBridge = class {
        startVideoPlayer(e) {
            return new Promise((t,n)=>{
                r.MessagingHandler.storePromiseAndCallNative(i.startVideoPlayer, i.bridgeName, JSON.parse(e)).then(e=>{
                    t(JSON.parse(e))
                }
                ).catch(e=>{
                    n(e)
                }
                )
            }
            )
        }
    }
}
, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    const r = n(50);
    t.Base64Client = class {
        static encode(e) {
            return r.Base64.encode(e)
        }
        static decode(e) {
            return r.Base64.decode(e)
        }
    }
}
, function(e, t, n) {
    "use strict";
    n.r(t),
    n.d(t, "version", function() {
        return r
    }),
    n.d(t, "VERSION", function() {
        return i
    }),
    n.d(t, "atob", function() {
        return M
    }),
    n.d(t, "atobPolyfill", function() {
        return b
    }),
    n.d(t, "btoa", function() {
        return m
    }),
    n.d(t, "btoaPolyfill", function() {
        return P
    }),
    n.d(t, "fromBase64", function() {
        return A
    }),
    n.d(t, "toBase64", function() {
        return f
    }),
    n.d(t, "utob", function() {
        return y
    }),
    n.d(t, "encode", function() {
        return f
    }),
    n.d(t, "encodeURI", function() {
        return C
    }),
    n.d(t, "encodeURL", function() {
        return C
    }),
    n.d(t, "btou", function() {
        return S
    }),
    n.d(t, "decode", function() {
        return A
    }),
    n.d(t, "fromUint8Array", function() {
        return N
    }),
    n.d(t, "toUint8Array", function() {
        return B
    }),
    n.d(t, "extendString", function() {
        return w
    }),
    n.d(t, "extendUint8Array", function() {
        return _
    }),
    n.d(t, "extendBuiltins", function() {
        return R
    }),
    n.d(t, "Base64", function() {
        return U
    });
    const r = "3.4.4"
      , i = r
      , a = "function" == typeof atob
      , s = "function" == typeof btoa
      , o = "function" == typeof Buffer
      , c = [..."ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="]
      , l = (e=>{
        let t = {};
        return c.forEach((e,n)=>t[e] = n),
        t
    }
    )()
      , d = /^(?:[A-Za-z\d+\/]{4})*?(?:[A-Za-z\d+\/]{2}(?:==)?|[A-Za-z\d+\/]{3}=?)?$/
      , u = String.fromCharCode.bind(String)
      , g = "function" == typeof Uint8Array.from ? Uint8Array.from.bind(Uint8Array) : (e,t=(e=>e))=>new Uint8Array(Array.prototype.slice.call(e, 0).map(t))
      , h = e=>e.replace(/[+\/]/g, e=>"+" == e ? "-" : "_").replace(/=+$/m, "")
      , p = e=>e.replace(/[^A-Za-z0-9\+\/]/g, "")
      , P = e=>{
        let t, n, r, i, a = "";
        const s = e.length % 3;
        for (let s = 0; s < e.length; ) {
            if ((n = e.charCodeAt(s++)) > 255 || (r = e.charCodeAt(s++)) > 255 || (i = e.charCodeAt(s++)) > 255)
                throw new TypeError("invalid character found");
            a += c[(t = n << 16 | r << 8 | i) >> 18 & 63] + c[t >> 12 & 63] + c[t >> 6 & 63] + c[63 & t]
        }
        return s ? a.slice(0, s - 3) + "===".substring(s) : a
    }
      , m = s ? e=>btoa(e) : o ? e=>Buffer.from(e, "binary").toString("base64") : P
      , v = o ? e=>Buffer.from(e).toString("base64") : e=>{
        let t = [];
        for (let n = 0, r = e.length; n < r; n += 4096)
            t.push(u.apply(null, e.subarray(n, n + 4096)));
        return btoa(t.join(""))
    }
      , N = (e,t=!1)=>t ? h(v(e)) : v(e)
      , y = e=>unescape(encodeURIComponent(e))
      , T = o ? e=>Buffer.from(e, "utf8").toString("base64") : e=>m(y(e))
      , f = (e,t=!1)=>t ? h(T(e)) : T(e)
      , C = e=>f(e, !0)
      , S = e=>decodeURIComponent(escape(e))
      , b = e=>{
        if (e = e.replace(/\s+/g, ""),
        !d.test(e))
            throw new TypeError("malformed base64.");
        e += "==".slice(2 - (3 & e.length));
        let t, n, r, i = "";
        for (let a = 0; a < e.length; )
            t = l[e.charAt(a++)] << 18 | l[e.charAt(a++)] << 12 | (n = l[e.charAt(a++)]) << 6 | (r = l[e.charAt(a++)]),
            i += 64 === n ? u(t >> 16 & 255) : 64 === r ? u(t >> 16 & 255, t >> 8 & 255) : u(t >> 16 & 255, t >> 8 & 255, 255 & t);
        return i
    }
      , M = a ? e=>atob(p(e)) : o ? e=>Buffer.from(e, "base64").toString("binary") : b
      , E = o ? e=>Buffer.from(e, "base64").toString("utf8") : e=>S(M(e))
      , O = e=>p(e.replace(/[-_]/g, e=>"-" == e ? "+" : "/"))
      , A = e=>E(O(e))
      , B = o ? e=>g(Buffer.from(O(e), "base64")) : e=>g(M(O(e)), e=>e.charCodeAt(0))
      , I = e=>({
        value: e,
        enumerable: !1,
        writable: !0,
        configurable: !0
    })
      , w = function() {
        const e = (e,t)=>Object.defineProperty(String.prototype, e, I(t));
        e("fromBase64", function() {
            return A(this)
        }),
        e("toBase64", function(e) {
            return f(this, e)
        }),
        e("toBase64URI", function() {
            return f(this, !0)
        }),
        e("toBase64URL", function() {
            return f(this, !0)
        }),
        e("toUint8Array", function() {
            return B(this)
        })
    }
      , _ = function() {
        const e = (e,t)=>Object.defineProperty(Uint8Array.prototype, e, I(t));
        e("toBase64", function(e) {
            return N(this, e)
        }),
        e("toBase64URI", function() {
            return N(this, !0)
        }),
        e("toBase64URL", function() {
            return N(this, !0)
        })
    }
      , R = ()=>{
        w(),
        _()
    }
      , U = {
        version: r,
        VERSION: i,
        atob: M,
        atobPolyfill: b,
        btoa: m,
        btoaPolyfill: P,
        fromBase64: A,
        toBase64: f,
        encode: f,
        encodeURI: C,
        encodeURL: C,
        utob: y,
        btou: S,
        decode: A,
        fromUint8Array: N,
        toUint8Array: B,
        extendString: w,
        extendUint8Array: _,
        extendBuiltins: R
    }
}
]);
