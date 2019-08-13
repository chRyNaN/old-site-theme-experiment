if (typeof kotlin === 'undefined') {
  throw new Error("Error loading module 'locator'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'locator'.");
}
var locator = function (_, Kotlin) {
  'use strict';
  var $$importsForInline$$ = _.$$importsForInline$$ || (_.$$importsForInline$$ = {});
  var defineInlineFunction = Kotlin.defineInlineFunction;
  var wrapFunction = Kotlin.wrapFunction;
  var Kind_OBJECT = Kotlin.Kind.OBJECT;
  var LinkedHashMap_init = Kotlin.kotlin.collections.LinkedHashMap_init_q3lmfv$;
  var Kind_INTERFACE = Kotlin.Kind.INTERFACE;
  var Kind_CLASS = Kotlin.Kind.CLASS;
  var ReadOnlyProperty = Kotlin.kotlin.properties.ReadOnlyProperty;
  var Exception = Kotlin.kotlin.Exception;
  var ClassCastException = Kotlin.kotlin.ClassCastException;
  var toString = Kotlin.toString;
  var RuntimeException_init = Kotlin.kotlin.RuntimeException_init_pdl1vj$;
  var RuntimeException = Kotlin.kotlin.RuntimeException;
  ModuleClassCastException.prototype = Object.create(ClassCastException.prototype);
  ModuleClassCastException.prototype.constructor = ModuleClassCastException;
  ModuleNotInitializedException.prototype = Object.create(RuntimeException.prototype);
  ModuleNotInitializedException.prototype.constructor = ModuleNotInitializedException;
  function DependencyGraph() {
    DependencyGraph_instance = this;
    this.modules = LinkedHashMap_init();
  }
  DependencyGraph.prototype.getModule_amyoeg$ = defineInlineFunction('locator.com.chrynan.locator.DependencyGraph.getModule_amyoeg$', wrapFunction(function () {
    var getKClass = Kotlin.getKClass;
    var ModuleNotInitializedException_init = _.com.chrynan.locator.ModuleNotInitializedException;
    var ModuleClassCastException_init = _.com.chrynan.locator.ModuleClassCastException;
    return function (M_0, isM) {
      var tmp$, tmp$_0, tmp$_1;
      tmp$ = this.modules.get_11rb$(getKClass(M_0));
      if (tmp$ == null) {
        throw new ModuleNotInitializedException_init('Module not found for KClass = ' + getKClass(M_0));
      }
      var module_0 = tmp$;
      tmp$_1 = isM(tmp$_0 = module_0) ? tmp$_0 : null;
      if (tmp$_1 == null) {
        throw new ModuleClassCastException_init(getKClass(M_0));
      }
      return tmp$_1;
    };
  }));
  DependencyGraph.prototype.attachModule_tzatgi$ = defineInlineFunction('locator.com.chrynan.locator.DependencyGraph.attachModule_tzatgi$', wrapFunction(function () {
    var getKClass = Kotlin.getKClass;
    return function (M_0, isM, module_0) {
      var $receiver = this.modules;
      var key = getKClass(M_0);
      $receiver.put_xwzc9p$(key, module_0);
    };
  }));
  DependencyGraph.prototype.detachModule_amyoeg$ = defineInlineFunction('locator.com.chrynan.locator.DependencyGraph.detachModule_amyoeg$', wrapFunction(function () {
    var getKClass = Kotlin.getKClass;
    return function (M_0, isM) {
      this.modules.remove_11rb$(getKClass(M_0));
    };
  }));
  DependencyGraph.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'DependencyGraph',
    interfaces: []
  };
  var DependencyGraph_instance = null;
  function DependencyGraph_getInstance() {
    if (DependencyGraph_instance === null) {
      new DependencyGraph();
    }
    return DependencyGraph_instance;
  }
  function LocatesWith() {
  }
  LocatesWith.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'LocatesWith',
    interfaces: []
  };
  var attachToDependencyGraph = defineInlineFunction('locator.com.chrynan.locator.attachToDependencyGraph_34m9iu$', wrapFunction(function () {
    var locator = _.com.chrynan.locator;
    var getKClass = Kotlin.getKClass;
    return function (M_0, isM, $receiver) {
      var $this = locator.DependencyGraph;
      var module_0 = $receiver.module;
      var $receiver_0 = $this.modules;
      var key = getKClass(M_0);
      $receiver_0.put_xwzc9p$(key, module_0);
    };
  }));
  var detachFromDependencyGraph = defineInlineFunction('locator.com.chrynan.locator.detachFromDependencyGraph_34m9iu$', wrapFunction(function () {
    var locator = _.com.chrynan.locator;
    var getKClass = Kotlin.getKClass;
    return function (M_0, isM, $receiver) {
      locator.DependencyGraph.modules.remove_11rb$(getKClass(M_0));
    };
  }));
  var locate = defineInlineFunction('locator.com.chrynan.locator.locate_1tb6k4$', wrapFunction(function () {
    var Locator_init = _.com.chrynan.locator.Locator;
    return function (M_0, isM, $receiver, moduleAccessor) {
      return new Locator_init(moduleAccessor, $receiver.module);
    };
  }));
  var locateOrNull = defineInlineFunction('locator.com.chrynan.locator.locateOrNull_1tb6k4$', wrapFunction(function () {
    var LocatorOrNull_init = _.com.chrynan.locator.LocatorOrNull;
    return function (M_0, isM, $receiver, moduleAccessor) {
      return new LocatorOrNull_init(moduleAccessor, $receiver.module);
    };
  }));
  function Locator(moduleAccessor, module_0) {
    this.moduleAccessor_0 = moduleAccessor;
    this.module_0 = module_0;
  }
  Locator.prototype.getValue_lrcp0p$ = function (thisRef, property) {
    return this.moduleAccessor_0(this.module_0);
  };
  Locator.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Locator',
    interfaces: [ReadOnlyProperty]
  };
  function LocatorOrNull(moduleAccessor, module_0) {
    this.moduleAccessor_0 = moduleAccessor;
    this.module_0 = module_0;
  }
  LocatorOrNull.prototype.getValue_lrcp0p$ = function (thisRef, property) {
    try {
      return this.moduleAccessor_0(this.module_0);
    }
     catch (e) {
      if (Kotlin.isType(e, Exception)) {
        return null;
      }
       else
        throw e;
    }
  };
  LocatorOrNull.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'LocatorOrNull',
    interfaces: [ReadOnlyProperty]
  };
  function Module() {
  }
  Module.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'Module',
    interfaces: []
  };
  var dependencyGraph = defineInlineFunction('locator.com.chrynan.locator.dependencyGraph_amyoeg$', wrapFunction(function () {
    var locator = _.com.chrynan.locator;
    var getKClass = Kotlin.getKClass;
    var ModuleNotInitializedException_init = _.com.chrynan.locator.ModuleNotInitializedException;
    var ModuleClassCastException_init = _.com.chrynan.locator.ModuleClassCastException;
    return function (M_0, isM) {
      var tmp$, tmp$_0, tmp$_1;
      tmp$ = locator.DependencyGraph.modules.get_11rb$(getKClass(M_0));
      if (tmp$ == null) {
        throw new ModuleNotInitializedException_init('Module not found for KClass = ' + getKClass(M_0));
      }
      var module_0 = tmp$;
      tmp$_1 = isM(tmp$_0 = module_0) ? tmp$_0 : null;
      if (tmp$_1 == null) {
        throw new ModuleClassCastException_init(getKClass(M_0));
      }
      return tmp$_1;
    };
  }));
  function ModuleClassCastException(kClass) {
    ClassCastException.call(this, 'Module does not implement KClass = ' + kClass);
    this.kClass = kClass;
    this.name = 'ModuleClassCastException';
  }
  ModuleClassCastException.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ModuleClassCastException',
    interfaces: [ClassCastException]
  };
  ModuleClassCastException.prototype.component1 = function () {
    return this.kClass;
  };
  ModuleClassCastException.prototype.copy_xo1ogr$ = function (kClass) {
    return new ModuleClassCastException(kClass === void 0 ? this.kClass : kClass);
  };
  ModuleClassCastException.prototype.toString = function () {
    return 'ModuleClassCastException(kClass=' + Kotlin.toString(this.kClass) + ')';
  };
  ModuleClassCastException.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.kClass) | 0;
    return result;
  };
  ModuleClassCastException.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && Kotlin.equals(this.kClass, other.kClass))));
  };
  function ModuleNotInitializedException(message) {
    if (message === void 0)
      message = null;
    RuntimeException_init('Module was not initialized. Message = ' + toString(message), this);
    this.name = 'ModuleNotInitializedException';
  }
  ModuleNotInitializedException.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ModuleNotInitializedException',
    interfaces: [RuntimeException]
  };
  var package$com = _.com || (_.com = {});
  var package$chrynan = package$com.chrynan || (package$com.chrynan = {});
  var package$locator = package$chrynan.locator || (package$chrynan.locator = {});
  Object.defineProperty(package$locator, 'DependencyGraph', {
    get: DependencyGraph_getInstance
  });
  package$locator.LocatesWith = LocatesWith;
  $$importsForInline$$.locator = _;
  package$locator.Locator = Locator;
  package$locator.LocatorOrNull = LocatorOrNull;
  package$locator.Module = Module;
  package$locator.ModuleClassCastException = ModuleClassCastException;
  package$locator.ModuleNotInitializedException = ModuleNotInitializedException;
  Kotlin.defineModule('locator', _);
  return _;
}(typeof locator === 'undefined' ? {} : locator, kotlin);
