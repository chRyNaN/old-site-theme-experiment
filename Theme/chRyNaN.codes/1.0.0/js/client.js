if (typeof kotlin === 'undefined') {
  throw new Error("Error loading module 'client'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'client'.");
}
if (typeof this['kotlinx-html-js'] === 'undefined') {
  throw new Error("Error loading module 'client'. Its dependency 'kotlinx-html-js' was not found. Please, check whether 'kotlinx-html-js' is loaded prior to 'client'.");
}
if (typeof this['kotlinx-coroutines-core'] === 'undefined') {
  throw new Error("Error loading module 'client'. Its dependency 'kotlinx-coroutines-core' was not found. Please, check whether 'kotlinx-coroutines-core' is loaded prior to 'client'.");
}
var client = function (_, Kotlin, $module$kotlinx_html_js, $module$kotlinx_coroutines_core) {
  'use strict';
  var Unit = Kotlin.kotlin.Unit;
  var get_create = $module$kotlinx_html_js.kotlinx.html.dom.get_create_4wc2mh$;
  var Kind_INTERFACE = Kotlin.Kind.INTERFACE;
  var append = $module$kotlinx_html_js.kotlinx.html.dom.append_k9bwru$;
  var lazy = Kotlin.kotlin.lazy_klfg04$;
  var Kind_CLASS = Kotlin.Kind.CLASS;
  var set_id = $module$kotlinx_html_js.kotlinx.html.set_id_ueiko3$;
  var div = $module$kotlinx_html_js.kotlinx.html.div_ri36nr$;
  var setOf = Kotlin.kotlin.collections.setOf_i5x0yv$;
  var set_classes = $module$kotlinx_html_js.kotlinx.html.set_classes_njy09m$;
  var setOf_0 = Kotlin.kotlin.collections.setOf_mh5how$;
  var trimIndent = Kotlin.kotlin.text.trimIndent_pdl1vz$;
  var set_style = $module$kotlinx_html_js.kotlinx.html.set_style_ueiko3$;
  var div_0 = $module$kotlinx_html_js.kotlinx.html.div_59el9d$;
  var h1 = $module$kotlinx_html_js.kotlinx.html.h1_vmej1w$;
  var header = $module$kotlinx_html_js.kotlinx.html.header_8btlf7$;
  var main = $module$kotlinx_html_js.kotlinx.html.main_m1e3ev$;
  var section = $module$kotlinx_html_js.kotlinx.html.section_ezs79p$;
  var COROUTINE_SUSPENDED = Kotlin.kotlin.coroutines.intrinsics.COROUTINE_SUSPENDED;
  var CoroutineImpl = Kotlin.kotlin.coroutines.CoroutineImpl;
  var launch = $module$kotlinx_coroutines_core.kotlinx.coroutines.launch_s496o7$;
  var SupervisorJob = $module$kotlinx_coroutines_core.kotlinx.coroutines.SupervisorJob_5dx9e$;
  var coroutines = $module$kotlinx_coroutines_core.kotlinx.coroutines;
  var CoroutineScope = $module$kotlinx_coroutines_core.kotlinx.coroutines.CoroutineScope;
  var listOf = Kotlin.kotlin.collections.listOf_mh5how$;
  var listOf_0 = Kotlin.kotlin.collections.listOf_i5x0yv$;
  var InputType = $module$kotlinx_html_js.kotlinx.html.InputType;
  var input = $module$kotlinx_html_js.kotlinx.html.input_e1g74z$;
  var a = $module$kotlinx_html_js.kotlinx.html.a_gu26kr$;
  var li = $module$kotlinx_html_js.kotlinx.html.li_yzv5uh$;
  var ul = $module$kotlinx_html_js.kotlinx.html.ul_pzlyaf$;
  var footer = $module$kotlinx_html_js.kotlinx.html.footer_x2k50h$;
  var toString = Kotlin.toString;
  var unsafe = $module$kotlinx_html_js.kotlinx.html.unsafe_vdrn79$;
  var style = $module$kotlinx_html_js.kotlinx.html.style_st6e4p$;
  var h2 = $module$kotlinx_html_js.kotlinx.html.h2_eh5gi3$;
  var h4 = $module$kotlinx_html_js.kotlinx.html.h4_zdyoc7$;
  var img = $module$kotlinx_html_js.kotlinx.html.img_evw26v$;
  var strong = $module$kotlinx_html_js.kotlinx.html.strong_okpg28$;
  var span = $module$kotlinx_html_js.kotlinx.html.span_6djfml$;
  var nav = $module$kotlinx_html_js.kotlinx.html.nav_19d8h1$;
  var header_0 = $module$kotlinx_html_js.kotlinx.html.header_dwfinh$;
  var emptyList = Kotlin.kotlin.collections.emptyList_287e2$;
  HeaderFooterPage.prototype = Object.create(Page.prototype);
  HeaderFooterPage.prototype.constructor = HeaderFooterPage;
  HomePage.prototype = Object.create(HeaderFooterPage.prototype);
  HomePage.prototype.constructor = HomePage;
  NotFoundPage.prototype = Object.create(HeaderFooterPage.prototype);
  NotFoundPage.prototype.constructor = NotFoundPage;
  PostPage.prototype = Object.create(Page.prototype);
  PostPage.prototype.constructor = PostPage;
  HomePresenter.prototype = Object.create(HeaderFooterPresenter.prototype);
  HomePresenter.prototype.constructor = HomePresenter;
  function main$lambda(it) {
    var tmp$;
    var page = new HomePage();
    (tmp$ = document.body) != null ? (appendPage(tmp$, page), Unit) : null;
    page.onLayoutCreated();
    return Unit;
  }
  function main_0() {
    window.onload = main$lambda;
  }
  function appendPage($receiver, page) {
    var node = page.onCreateLayout_3mrk8e$(get_create(document));
    $receiver.appendChild(node);
  }
  function HeaderFooterBinder() {
  }
  HeaderFooterBinder.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'HeaderFooterBinder',
    interfaces: []
  };
  function HomeBinder() {
  }
  HomeBinder.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'HomeBinder',
    interfaces: [HeaderFooterBinder]
  };
  function NotFoundBinder() {
  }
  NotFoundBinder.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'NotFoundBinder',
    interfaces: [HeaderFooterBinder]
  };
  function HeaderFooterPage() {
    Page.call(this);
    this.headerContainerId_rfyo91$_0 = 'headerContainer';
    this.footerContainerId_cu9fbd$_0 = 'footerContainer';
    this.headerContainer_yca8pi$_fyrf9n$_0 = lazy(HeaderFooterPage$headerContainer$lambda(this));
    this.footerContainer_ytrbj8$_4qg1hk$_0 = lazy(HeaderFooterPage$footerContainer$lambda(this));
    this.headerTemplate_s27al9$_otrvbo$_0 = lazy(HeaderFooterPage$headerTemplate$lambda);
    this.footerTemplate_hs402d$_927zux$_0 = lazy(HeaderFooterPage$footerTemplate$lambda);
  }
  Object.defineProperty(HeaderFooterPage.prototype, 'headerContainerId', {
    get: function () {
      return this.headerContainerId_rfyo91$_0;
    }
  });
  Object.defineProperty(HeaderFooterPage.prototype, 'footerContainerId', {
    get: function () {
      return this.footerContainerId_cu9fbd$_0;
    }
  });
  Object.defineProperty(HeaderFooterPage.prototype, 'headerContainer_yca8pi$_0', {
    get: function () {
      return this.headerContainer_yca8pi$_fyrf9n$_0.value;
    }
  });
  Object.defineProperty(HeaderFooterPage.prototype, 'footerContainer_ytrbj8$_0', {
    get: function () {
      return this.footerContainer_ytrbj8$_4qg1hk$_0.value;
    }
  });
  Object.defineProperty(HeaderFooterPage.prototype, 'headerTemplate_s27al9$_0', {
    get: function () {
      return this.headerTemplate_s27al9$_otrvbo$_0.value;
    }
  });
  Object.defineProperty(HeaderFooterPage.prototype, 'footerTemplate_hs402d$_0', {
    get: function () {
      return this.footerTemplate_hs402d$_927zux$_0.value;
    }
  });
  function HeaderFooterPage$bindHeader$lambda(this$HeaderFooterPage, closure$model) {
    return function ($receiver) {
      var $receiver_0 = this$HeaderFooterPage.headerTemplate_s27al9$_0;
      $receiver_0.layout_1d26kt$($receiver, closure$model);
      return Unit;
    };
  }
  HeaderFooterPage.prototype.bindHeader_yl6vvj$ = function (model) {
    var tmp$;
    (tmp$ = this.headerContainer_yca8pi$_0) != null ? append(tmp$, HeaderFooterPage$bindHeader$lambda(this, model)) : null;
  };
  function HeaderFooterPage$bindFooter$lambda(this$HeaderFooterPage, closure$model) {
    return function ($receiver) {
      var $receiver_0 = this$HeaderFooterPage.footerTemplate_hs402d$_0;
      $receiver_0.layout_1d26kt$($receiver, closure$model);
      return Unit;
    };
  }
  HeaderFooterPage.prototype.bindFooter_mmfqex$ = function (model) {
    var tmp$;
    (tmp$ = this.footerContainer_ytrbj8$_0) != null ? append(tmp$, HeaderFooterPage$bindFooter$lambda(this, model)) : null;
  };
  function HeaderFooterPage$headerContainer$lambda(this$HeaderFooterPage) {
    return function () {
      return document.getElementById(this$HeaderFooterPage.headerContainerId);
    };
  }
  function HeaderFooterPage$footerContainer$lambda(this$HeaderFooterPage) {
    return function () {
      return document.getElementById(this$HeaderFooterPage.footerContainerId);
    };
  }
  function HeaderFooterPage$headerTemplate$lambda() {
    return new TopNavbarTemplate();
  }
  function HeaderFooterPage$footerTemplate$lambda() {
    return new FooterTemplate();
  }
  HeaderFooterPage.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'HeaderFooterPage',
    interfaces: [HeaderFooterBinder, HeaderFooterView, Page]
  };
  function HomePage() {
    HeaderFooterPage.call(this);
    this.presenter_k0myc5$_0 = lazy(HomePage$presenter$lambda(this));
    this.postTemplate_xm09kp$_0 = lazy(HomePage$postTemplate$lambda);
    this.postContainer_4ck84y$_0 = lazy(HomePage$postContainer$lambda);
    this.progressBar_cmlr1p$_0 = lazy(HomePage$progressBar$lambda);
  }
  Object.defineProperty(HomePage.prototype, 'presenter', {
    get: function () {
      return this.presenter_k0myc5$_0.value;
    }
  });
  Object.defineProperty(HomePage.prototype, 'postTemplate_0', {
    get: function () {
      return this.postTemplate_xm09kp$_0.value;
    }
  });
  Object.defineProperty(HomePage.prototype, 'postContainer_0', {
    get: function () {
      return this.postContainer_4ck84y$_0.value;
    }
  });
  Object.defineProperty(HomePage.prototype, 'progressBar_0', {
    get: function () {
      return this.progressBar_cmlr1p$_0.value;
    }
  });
  function HomePage$onCreateLayout$lambda$lambda(this$HomePage) {
    return function ($receiver) {
      set_id($receiver, this$HomePage.headerContainerId);
      return Unit;
    };
  }
  function HomePage$onCreateLayout$lambda$lambda_0($receiver) {
    set_classes($receiver, setOf(['mdl-progress', 'mdl-js-progress', 'mdl-progress__indeterminate', 'progress-bar']));
    set_id($receiver, 'progressBar');
    return Unit;
  }
  function HomePage$onCreateLayout$lambda$lambda$lambda($receiver) {
    set_classes($receiver, setOf(['mdl-cell', 'mdl-cell--1-col']));
    set_id($receiver, 'postContainer');
    return Unit;
  }
  function HomePage$onCreateLayout$lambda$lambda_1($receiver) {
    set_classes($receiver, setOf_0('mdl-grid'));
    set_style($receiver, trimIndent('\n                    justify-content: space-evenly;\n                '));
    div($receiver, void 0, HomePage$onCreateLayout$lambda$lambda$lambda);
    return Unit;
  }
  function HomePage$onCreateLayout$lambda$lambda_2(this$HomePage) {
    return function ($receiver) {
      set_id($receiver, this$HomePage.footerContainerId);
      return Unit;
    };
  }
  function HomePage$onCreateLayout$lambda(this$HomePage) {
    return function ($receiver) {
      div($receiver, void 0, HomePage$onCreateLayout$lambda$lambda(this$HomePage));
      div($receiver, void 0, HomePage$onCreateLayout$lambda$lambda_0);
      div($receiver, void 0, HomePage$onCreateLayout$lambda$lambda_1);
      div($receiver, void 0, HomePage$onCreateLayout$lambda$lambda_2(this$HomePage));
      return Unit;
    };
  }
  HomePage.prototype.onCreateLayout_3mrk8e$ = function ($receiver) {
    return div_0($receiver, void 0, HomePage$onCreateLayout$lambda(this));
  };
  HomePage.prototype.onLayoutCreated = function () {
    HeaderFooterPage.prototype.onLayoutCreated.call(this);
    this.presenter.loadHeader();
    this.presenter.loadFooter();
    this.presenter.loadPosts();
  };
  HomePage.prototype.showProgressBar = function () {
    var tmp$, tmp$_0;
    (tmp$_0 = (tmp$ = this.progressBar_0) != null ? tmp$.classList : null) != null ? (tmp$_0.remove('hide'), Unit) : null;
  };
  HomePage.prototype.hideProgressBar = function () {
    var tmp$, tmp$_0;
    (tmp$_0 = (tmp$ = this.progressBar_0) != null ? tmp$.classList : null) != null ? (tmp$_0.add('hide'), Unit) : null;
  };
  function HomePage$bindPosts$lambda(this$HomePage, closure$models) {
    return function ($receiver) {
      var $receiver_0 = this$HomePage.postTemplate_0;
      var tmp$;
      tmp$ = closure$models.iterator();
      while (tmp$.hasNext()) {
        var model = tmp$.next();
        $receiver_0.layout_1d26kt$($receiver, model);
      }
      return Unit;
    };
  }
  HomePage.prototype.bindPosts_da2kou$ = function (models) {
    var tmp$;
    (tmp$ = this.postContainer_0) != null ? append(tmp$, HomePage$bindPosts$lambda(this, models)) : null;
  };
  function HomePage$presenter$lambda(this$HomePage) {
    return function () {
      return new HomePresenter(this$HomePage, this$HomePage, new PostRepositorySource(), new MainNavigationItemRepositorySource(), new FooterItemRepositorySource());
    };
  }
  function HomePage$postTemplate$lambda() {
    return new PostItemTemplate();
  }
  function HomePage$postContainer$lambda() {
    return document.getElementById('postContainer');
  }
  function HomePage$progressBar$lambda() {
    return document.getElementById('progressBar');
  }
  HomePage.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'HomePage',
    interfaces: [HomeBinder, HomeView, HeaderFooterPage]
  };
  function NotFoundPage() {
    HeaderFooterPage.call(this);
    this.presenter_pfmag5$_0 = new HeaderFooterPresenter(this, this, new MainNavigationItemRepositorySource(), new FooterItemRepositorySource());
  }
  Object.defineProperty(NotFoundPage.prototype, 'presenter', {
    get: function () {
      return this.presenter_pfmag5$_0;
    }
  });
  function NotFoundPage$onCreateLayout$lambda$lambda(this$NotFoundPage) {
    return function ($receiver) {
      set_id($receiver, this$NotFoundPage.headerContainerId);
      return Unit;
    };
  }
  function NotFoundPage$onCreateLayout$lambda$lambda$lambda$lambda($receiver) {
    set_classes($receiver, setOf_0('page-title'));
    $receiver.unaryPlus_pdl1vz$('404 - Page Not Found');
    return Unit;
  }
  function NotFoundPage$onCreateLayout$lambda$lambda$lambda($receiver) {
    set_classes($receiver, setOf_0('page-header'));
    h1($receiver, void 0, NotFoundPage$onCreateLayout$lambda$lambda$lambda$lambda);
    return Unit;
  }
  function NotFoundPage$onCreateLayout$lambda$lambda_0($receiver) {
    set_id($receiver, 'main');
    set_classes($receiver, setOf_0('site-main'));
    header($receiver, void 0, NotFoundPage$onCreateLayout$lambda$lambda$lambda);
    return Unit;
  }
  function NotFoundPage$onCreateLayout$lambda$lambda_1(this$NotFoundPage) {
    return function ($receiver) {
      set_id($receiver, this$NotFoundPage.footerContainerId);
      return Unit;
    };
  }
  function NotFoundPage$onCreateLayout$lambda(this$NotFoundPage) {
    return function ($receiver) {
      set_id($receiver, 'primary');
      set_classes($receiver, setOf_0('content-area'));
      div($receiver, void 0, NotFoundPage$onCreateLayout$lambda$lambda(this$NotFoundPage));
      main($receiver, void 0, NotFoundPage$onCreateLayout$lambda$lambda_0);
      div($receiver, void 0, NotFoundPage$onCreateLayout$lambda$lambda_1(this$NotFoundPage));
      return Unit;
    };
  }
  NotFoundPage.prototype.onCreateLayout_3mrk8e$ = function ($receiver) {
    return section($receiver, void 0, NotFoundPage$onCreateLayout$lambda(this));
  };
  NotFoundPage.prototype.onLayoutCreated = function () {
    HeaderFooterPage.prototype.onLayoutCreated.call(this);
    this.presenter.loadHeader();
    this.presenter.loadFooter();
  };
  NotFoundPage.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'NotFoundPage',
    interfaces: [NotFoundBinder, NotFoundView, HeaderFooterPage]
  };
  function Page() {
  }
  Page.prototype.onLayoutCreated = function () {
  };
  Page.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Page',
    interfaces: []
  };
  function PostPage() {
    Page.call(this);
  }
  function PostPage$onCreateLayout$lambda$lambda($receiver) {
    set_id($receiver, 'headerContainerId');
    return Unit;
  }
  function PostPage$onCreateLayout$lambda$lambda_0($receiver) {
    set_classes($receiver, setOf(['mdl_layout__content', 'post-content']));
    return Unit;
  }
  function PostPage$onCreateLayout$lambda$lambda_1($receiver) {
    set_id($receiver, 'footerContainerId');
    return Unit;
  }
  function PostPage$onCreateLayout$lambda($receiver) {
    set_classes($receiver, setOf(['mdl-layout', 'post-container']));
    div($receiver, void 0, PostPage$onCreateLayout$lambda$lambda);
    main($receiver, void 0, PostPage$onCreateLayout$lambda$lambda_0);
    div($receiver, void 0, PostPage$onCreateLayout$lambda$lambda_1);
    return Unit;
  }
  PostPage.prototype.onCreateLayout_3mrk8e$ = function ($receiver) {
    return div_0($receiver, void 0, PostPage$onCreateLayout$lambda);
  };
  PostPage.prototype.onLayoutCreated = function () {
    Page.prototype.onLayoutCreated.call(this);
  };
  PostPage.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'PostPage',
    interfaces: [Page]
  };
  function HeaderFooterPresenter(view, binder, mainNavigationItemRepository, footerItemRepository) {
    this.view_mda0gn$_0 = view;
    this.binder_glzt1g$_0 = binder;
    this.mainNavigationItemRepository_z2sazo$_0 = mainNavigationItemRepository;
    this.footerItemRepository_6fneuu$_0 = footerItemRepository;
  }
  function Coroutine$HeaderFooterPresenter$loadHeader$lambda(this$HeaderFooterPresenter_0, $receiver_0, controller, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.$controller = controller;
    this.exceptionState_0 = 1;
    this.local$this$HeaderFooterPresenter = this$HeaderFooterPresenter_0;
  }
  Coroutine$HeaderFooterPresenter$loadHeader$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$HeaderFooterPresenter$loadHeader$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$HeaderFooterPresenter$loadHeader$lambda.prototype.constructor = Coroutine$HeaderFooterPresenter$loadHeader$lambda;
  Coroutine$HeaderFooterPresenter$loadHeader$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.state_0 = 2;
            this.result_0 = this.local$this$HeaderFooterPresenter.mainNavigationItemRepository_z2sazo$_0.getNavigationItem(this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            var headerItem = this.result_0;
            return this.local$this$HeaderFooterPresenter.binder_glzt1g$_0.bindHeader_yl6vvj$(headerItem), Unit;
          default:this.state_0 = 1;
            throw new Error('State Machine Unreachable execution');
        }
      }
       catch (e) {
        if (this.state_0 === 1) {
          this.exceptionState_0 = this.state_0;
          throw e;
        }
         else {
          this.state_0 = this.exceptionState_0;
          this.exception_0 = e;
        }
      }
     while (true);
  };
  function HeaderFooterPresenter$loadHeader$lambda(this$HeaderFooterPresenter_0) {
    return function ($receiver_0, continuation_0, suspended) {
      var instance = new Coroutine$HeaderFooterPresenter$loadHeader$lambda(this$HeaderFooterPresenter_0, $receiver_0, this, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  HeaderFooterPresenter.prototype.loadHeader = function () {
    launch(this, void 0, void 0, HeaderFooterPresenter$loadHeader$lambda(this));
  };
  function Coroutine$HeaderFooterPresenter$loadFooter$lambda(this$HeaderFooterPresenter_0, $receiver_0, controller, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.$controller = controller;
    this.exceptionState_0 = 1;
    this.local$this$HeaderFooterPresenter = this$HeaderFooterPresenter_0;
  }
  Coroutine$HeaderFooterPresenter$loadFooter$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$HeaderFooterPresenter$loadFooter$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$HeaderFooterPresenter$loadFooter$lambda.prototype.constructor = Coroutine$HeaderFooterPresenter$loadFooter$lambda;
  Coroutine$HeaderFooterPresenter$loadFooter$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.state_0 = 2;
            this.result_0 = this.local$this$HeaderFooterPresenter.footerItemRepository_6fneuu$_0.getFooterItem(this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            var footerItem = this.result_0;
            return this.local$this$HeaderFooterPresenter.binder_glzt1g$_0.bindFooter_mmfqex$(footerItem), Unit;
          default:this.state_0 = 1;
            throw new Error('State Machine Unreachable execution');
        }
      }
       catch (e) {
        if (this.state_0 === 1) {
          this.exceptionState_0 = this.state_0;
          throw e;
        }
         else {
          this.state_0 = this.exceptionState_0;
          this.exception_0 = e;
        }
      }
     while (true);
  };
  function HeaderFooterPresenter$loadFooter$lambda(this$HeaderFooterPresenter_0) {
    return function ($receiver_0, continuation_0, suspended) {
      var instance = new Coroutine$HeaderFooterPresenter$loadFooter$lambda(this$HeaderFooterPresenter_0, $receiver_0, this, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  HeaderFooterPresenter.prototype.loadFooter = function () {
    launch(this, void 0, void 0, HeaderFooterPresenter$loadFooter$lambda(this));
  };
  HeaderFooterPresenter.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'HeaderFooterPresenter',
    interfaces: [Presenter]
  };
  function HomePresenter(view, binder, postRepository, mainNavigationItemRepository, footerItemRepository) {
    HeaderFooterPresenter.call(this, view, binder, mainNavigationItemRepository, footerItemRepository);
    this.view_0 = view;
    this.binder_0 = binder;
    this.postRepository_0 = postRepository;
  }
  function Coroutine$HomePresenter$loadPosts$lambda(this$HomePresenter_0, $receiver_0, controller, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.$controller = controller;
    this.exceptionState_0 = 1;
    this.local$this$HomePresenter = this$HomePresenter_0;
  }
  Coroutine$HomePresenter$loadPosts$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$HomePresenter$loadPosts$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$HomePresenter$loadPosts$lambda.prototype.constructor = Coroutine$HomePresenter$loadPosts$lambda;
  Coroutine$HomePresenter$loadPosts$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.local$this$HomePresenter.view_0.showProgressBar();
            this.state_0 = 2;
            this.result_0 = this.local$this$HomePresenter.postRepository_0.getMostRecentPosts(this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            var postItems = this.result_0;
            this.local$this$HomePresenter.binder_0.bindPosts_da2kou$(postItems);
            return this.local$this$HomePresenter.view_0.hideProgressBar(), Unit;
          default:this.state_0 = 1;
            throw new Error('State Machine Unreachable execution');
        }
      }
       catch (e) {
        if (this.state_0 === 1) {
          this.exceptionState_0 = this.state_0;
          throw e;
        }
         else {
          this.state_0 = this.exceptionState_0;
          this.exception_0 = e;
        }
      }
     while (true);
  };
  function HomePresenter$loadPosts$lambda(this$HomePresenter_0) {
    return function ($receiver_0, continuation_0, suspended) {
      var instance = new Coroutine$HomePresenter$loadPosts$lambda(this$HomePresenter_0, $receiver_0, this, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  HomePresenter.prototype.loadPosts = function () {
    launch(this, void 0, void 0, HomePresenter$loadPosts$lambda(this));
  };
  HomePresenter.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'HomePresenter',
    interfaces: [HeaderFooterPresenter]
  };
  function Presenter() {
  }
  Object.defineProperty(Presenter.prototype, 'coroutineContext', {
    get: function () {
      return SupervisorJob().plus_1fupul$(coroutines.Dispatchers.Main);
    }
  });
  Presenter.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'Presenter',
    interfaces: [CoroutineScope]
  };
  function FooterItemRepository() {
  }
  FooterItemRepository.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'FooterItemRepository',
    interfaces: []
  };
  function MainNavigationItemRepository() {
  }
  MainNavigationItemRepository.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'MainNavigationItemRepository',
    interfaces: []
  };
  function PostRepository() {
  }
  PostRepository.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'PostRepository',
    interfaces: []
  };
  function FooterItemRepositorySource() {
  }
  FooterItemRepositorySource.prototype.getFooterItem = function (continuation) {
    return new FooterViewModel('chRyNaN Codes', 'chrynan.codes', 'Copyright 2019');
  };
  FooterItemRepositorySource.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'FooterItemRepositorySource',
    interfaces: [FooterItemRepository]
  };
  function MainNavigationItemRepositorySource() {
  }
  MainNavigationItemRepositorySource.prototype.getNavigationItem = function (continuation) {
    return new TopNavbarViewModel('chRyNaN Codes', 'chrynan.codes', new NavigationMenuViewModel('TopNavBar', listOf(new NavigationMenuItemViewModel('Test Link', 'chrynan.codes'))));
  };
  MainNavigationItemRepositorySource.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'MainNavigationItemRepositorySource',
    interfaces: [MainNavigationItemRepository]
  };
  function PostRepositorySource() {
  }
  PostRepositorySource.prototype.getMostRecentPosts = function (continuation) {
    return listOf_0([new PostItemViewModel('Test Title', 'Test Subtitle', 'This is the excerpt', null, 'Today', 'Me', '', 'chrynan.codes', 'Read More'), new PostItemViewModel('Another Test Title', 'Another Test Subtitle', 'This is another the excerpt', null, 'Yesterday', 'Someone', '', 'chrynan.codes', 'Read More')]);
  };
  PostRepositorySource.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'PostRepositorySource',
    interfaces: [PostRepository]
  };
  function FooterTemplate() {
  }
  function FooterTemplate$layout$lambda$lambda$lambda$lambda($receiver) {
    set_classes($receiver, setOf_0('mdl-mega-footer__heading-checkbox'));
    $receiver.type = InputType.checkBox;
    $receiver.checked = true;
    return Unit;
  }
  function FooterTemplate$layout$lambda$lambda$lambda$lambda_0(closure$menu) {
    return function ($receiver) {
      set_classes($receiver, setOf_0('mdl-mega-footer__heading'));
      $receiver.unaryPlus_pdl1vz$(closure$menu.name);
      return Unit;
    };
  }
  function FooterTemplate$layout$lambda$lambda$lambda$lambda$lambda$lambda(closure$item) {
    return function ($receiver) {
      $receiver.href = closure$item.link;
      $receiver.unaryPlus_pdl1vz$(closure$item.name);
      return Unit;
    };
  }
  function FooterTemplate$layout$lambda$lambda$lambda$lambda$lambda(closure$item) {
    return function ($receiver) {
      a($receiver, void 0, void 0, void 0, FooterTemplate$layout$lambda$lambda$lambda$lambda$lambda$lambda(closure$item));
      return Unit;
    };
  }
  function FooterTemplate$layout$lambda$lambda$lambda$lambda_1(closure$menu) {
    return function ($receiver) {
      var tmp$;
      set_classes($receiver, setOf_0('mdl-mega-footer__link-list'));
      tmp$ = closure$menu.items.iterator();
      while (tmp$.hasNext()) {
        var item = tmp$.next();
        li($receiver, void 0, FooterTemplate$layout$lambda$lambda$lambda$lambda$lambda(item));
      }
      return Unit;
    };
  }
  function FooterTemplate$layout$lambda$lambda$lambda(closure$menu) {
    return function ($receiver) {
      set_classes($receiver, setOf_0('mdl-mega-footer__drop-down-section'));
      input($receiver, void 0, void 0, void 0, void 0, void 0, FooterTemplate$layout$lambda$lambda$lambda$lambda);
      h1($receiver, void 0, FooterTemplate$layout$lambda$lambda$lambda$lambda_0(closure$menu));
      ul($receiver, void 0, FooterTemplate$layout$lambda$lambda$lambda$lambda_1(closure$menu));
      return Unit;
    };
  }
  function FooterTemplate$layout$lambda$lambda(closure$viewModel) {
    return function ($receiver) {
      var tmp$;
      set_classes($receiver, setOf_0('mdl-mega-footer__middle-section'));
      tmp$ = closure$viewModel.navigationMenus.iterator();
      while (tmp$.hasNext()) {
        var menu = tmp$.next();
        div($receiver, void 0, FooterTemplate$layout$lambda$lambda$lambda(menu));
      }
      return Unit;
    };
  }
  function FooterTemplate$layout$lambda$lambda$lambda$lambda_2(closure$viewModel) {
    return function ($receiver) {
      $receiver.href = closure$viewModel.siteTitleLink;
      $receiver.unaryPlus_pdl1vz$(closure$viewModel.siteTitle);
      return Unit;
    };
  }
  function FooterTemplate$layout$lambda$lambda$lambda_0(closure$viewModel) {
    return function ($receiver) {
      set_classes($receiver, setOf_0('mdl-logo'));
      a($receiver, void 0, void 0, void 0, FooterTemplate$layout$lambda$lambda$lambda$lambda_2(closure$viewModel));
      return Unit;
    };
  }
  function FooterTemplate$layout$lambda$lambda$lambda$lambda$lambda_0(closure$viewModel) {
    return function ($receiver) {
      if (closure$viewModel.copyrightTitleLink != null) {
        $receiver.href = closure$viewModel.copyrightTitleLink;
      }
      $receiver.unaryPlus_pdl1vz$(closure$viewModel.copyrightTitle);
      return Unit;
    };
  }
  function FooterTemplate$layout$lambda$lambda$lambda$lambda_3(closure$viewModel) {
    return function ($receiver) {
      a($receiver, void 0, void 0, void 0, FooterTemplate$layout$lambda$lambda$lambda$lambda$lambda_0(closure$viewModel));
      return Unit;
    };
  }
  function FooterTemplate$layout$lambda$lambda$lambda_1(closure$viewModel) {
    return function ($receiver) {
      set_classes($receiver, setOf_0('mdl-mega-footer__link-list'));
      li($receiver, void 0, FooterTemplate$layout$lambda$lambda$lambda$lambda_3(closure$viewModel));
      return Unit;
    };
  }
  function FooterTemplate$layout$lambda$lambda_0(closure$viewModel) {
    return function ($receiver) {
      set_classes($receiver, setOf_0('mdl-mega-footer__bottom-section'));
      div($receiver, void 0, FooterTemplate$layout$lambda$lambda$lambda_0(closure$viewModel));
      if (closure$viewModel.copyrightTitle != null) {
        ul($receiver, void 0, FooterTemplate$layout$lambda$lambda$lambda_1(closure$viewModel));
      }
      return Unit;
    };
  }
  function FooterTemplate$layout$lambda(closure$viewModel) {
    return function ($receiver) {
      set_classes($receiver, setOf(['footer', 'bottom-navbar', 'bottom-navigation', 'mdl-mega-footer']));
      div($receiver, void 0, FooterTemplate$layout$lambda$lambda(closure$viewModel));
      div($receiver, void 0, FooterTemplate$layout$lambda$lambda_0(closure$viewModel));
      return Unit;
    };
  }
  FooterTemplate.prototype.layout_1d26kt$ = function ($receiver, viewModel) {
    return footer($receiver, void 0, FooterTemplate$layout$lambda(viewModel));
  };
  FooterTemplate.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'FooterTemplate',
    interfaces: [Template]
  };
  function HomeTemplate() {
  }
  function HomeTemplate$layout$lambda$lambda($receiver) {
    set_classes($receiver, setOf(['mdl-layout__content', 'mdl-grid']));
    return Unit;
  }
  function HomeTemplate$layout$lambda($receiver) {
    set_classes($receiver, setOf(['mdl-layout', 'mdl-js-layout']));
    main($receiver, void 0, HomeTemplate$layout$lambda$lambda);
    return Unit;
  }
  HomeTemplate.prototype.layout_1d26kt$ = function ($receiver, viewModel) {
    return div_0($receiver, void 0, HomeTemplate$layout$lambda);
  };
  HomeTemplate.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'HomeTemplate',
    interfaces: [Template]
  };
  function PostItemTemplate() {
  }
  function PostItemTemplate$layout$lambda$lambda$lambda$lambda(closure$viewModel) {
    return function ($receiver) {
      $receiver.raw_61zpoe$(trimIndent('\n' + "                                background-image: url('" + toString(closure$viewModel.imageUrl) + "');" + '\n' + '                            '));
      return Unit;
    };
  }
  function PostItemTemplate$layout$lambda$lambda$lambda(closure$viewModel) {
    return function ($receiver) {
      unsafe($receiver, PostItemTemplate$layout$lambda$lambda$lambda$lambda(closure$viewModel));
      return Unit;
    };
  }
  function PostItemTemplate$layout$lambda$lambda$lambda$lambda$lambda(closure$viewModel) {
    return function ($receiver) {
      set_classes($receiver, setOf_0('post-item-title-link'));
      $receiver.unaryPlus_pdl1vz$(closure$viewModel.title);
      return Unit;
    };
  }
  function PostItemTemplate$layout$lambda$lambda$lambda$lambda_0(closure$viewModel) {
    return function ($receiver) {
      set_classes($receiver, setOf(['post-item-title', 'mdl-card__title-text']));
      a($receiver, void 0, void 0, void 0, PostItemTemplate$layout$lambda$lambda$lambda$lambda$lambda(closure$viewModel));
      return Unit;
    };
  }
  function PostItemTemplate$layout$lambda$lambda$lambda$lambda_1(closure$viewModel) {
    return function ($receiver) {
      set_classes($receiver, setOf(['post-item-subtitle', 'mdl-card__subtitle-text']));
      $receiver.unaryPlus_pdl1vz$(closure$viewModel.subtitle);
      return Unit;
    };
  }
  function PostItemTemplate$layout$lambda$lambda$lambda_0(closure$viewModel) {
    return function ($receiver) {
      set_classes($receiver, setOf(['post-item-title-container', 'mdl-card__title']));
      h2($receiver, void 0, PostItemTemplate$layout$lambda$lambda$lambda$lambda_0(closure$viewModel));
      if (closure$viewModel.subtitle != null) {
        h4($receiver, void 0, PostItemTemplate$layout$lambda$lambda$lambda$lambda_1(closure$viewModel));
      }
      return Unit;
    };
  }
  function PostItemTemplate$layout$lambda$lambda(closure$viewModel) {
    return function ($receiver) {
      set_classes($receiver, setOf(['card-media-background', 'post-item-image-container', 'mdl-card__media']));
      if (closure$viewModel.imageUrl != null) {
        style($receiver, void 0, PostItemTemplate$layout$lambda$lambda$lambda(closure$viewModel));
      }
      div($receiver, void 0, PostItemTemplate$layout$lambda$lambda$lambda_0(closure$viewModel));
      return Unit;
    };
  }
  function PostItemTemplate$layout$lambda$lambda_0(closure$viewModel) {
    return function ($receiver) {
      set_classes($receiver, setOf(['post-item-excerpt', 'mdl-card__supporting-text']));
      $receiver.unaryPlus_pdl1vz$(closure$viewModel.excerpt);
      return Unit;
    };
  }
  function PostItemTemplate$layout$lambda$lambda$lambda_1(closure$viewModel) {
    return function ($receiver) {
      set_classes($receiver, setOf(['author-thumbnail-image', 'post-item-author-image']));
      $receiver.src = closure$viewModel.authorImageUrl;
      $receiver.alt = closure$viewModel.author;
      return Unit;
    };
  }
  function PostItemTemplate$layout$lambda$lambda$lambda$lambda_2(closure$viewModel) {
    return function ($receiver) {
      set_classes($receiver, setOf(['author-name', 'post-item-details-author-name', 'post-item-author-name']));
      $receiver.unaryPlus_pdl1vz$(closure$viewModel.author);
      return Unit;
    };
  }
  function PostItemTemplate$layout$lambda$lambda$lambda$lambda_3(closure$viewModel) {
    return function ($receiver) {
      set_classes($receiver, setOf_0('post-item-details-date'));
      $receiver.unaryPlus_pdl1vz$(closure$viewModel.date);
      return Unit;
    };
  }
  function PostItemTemplate$layout$lambda$lambda$lambda_2(closure$viewModel) {
    return function ($receiver) {
      set_classes($receiver, setOf_0('post-item-details'));
      strong($receiver, void 0, PostItemTemplate$layout$lambda$lambda$lambda$lambda_2(closure$viewModel));
      span($receiver, void 0, PostItemTemplate$layout$lambda$lambda$lambda$lambda_3(closure$viewModel));
      return Unit;
    };
  }
  function PostItemTemplate$layout$lambda$lambda_1(closure$viewModel) {
    return function ($receiver) {
      set_classes($receiver, setOf(['post-item-details-container', 'mdl-card__supporting-text']));
      img($receiver, void 0, void 0, void 0, PostItemTemplate$layout$lambda$lambda$lambda_1(closure$viewModel));
      div($receiver, void 0, PostItemTemplate$layout$lambda$lambda$lambda_2(closure$viewModel));
      return Unit;
    };
  }
  function PostItemTemplate$layout$lambda$lambda$lambda_3(closure$viewModel) {
    return function ($receiver) {
      set_classes($receiver, setOf(['post-item-link', 'read-more', 'mdl-button', 'mdl-button--colored', 'mdl-js-button', 'mdl-js-ripple-effect']));
      $receiver.href = closure$viewModel.link;
      $receiver.unaryPlus_pdl1vz$(closure$viewModel.readMoreText);
      return Unit;
    };
  }
  function PostItemTemplate$layout$lambda$lambda_2(closure$viewModel) {
    return function ($receiver) {
      set_classes($receiver, setOf(['post-item-link-container', 'read-more-container', 'mdl-card__actions', 'mdl-card--border']));
      a($receiver, void 0, void 0, void 0, PostItemTemplate$layout$lambda$lambda$lambda_3(closure$viewModel));
      return Unit;
    };
  }
  function PostItemTemplate$layout$lambda(closure$viewModel) {
    return function ($receiver) {
      set_classes($receiver, setOf(['card', 'post-item', 'mdl-card', 'mdl-shadow--2dp']));
      div($receiver, void 0, PostItemTemplate$layout$lambda$lambda(closure$viewModel));
      div($receiver, void 0, PostItemTemplate$layout$lambda$lambda_0(closure$viewModel));
      div($receiver, void 0, PostItemTemplate$layout$lambda$lambda_1(closure$viewModel));
      div($receiver, void 0, PostItemTemplate$layout$lambda$lambda_2(closure$viewModel));
      return Unit;
    };
  }
  PostItemTemplate.prototype.layout_1d26kt$ = function ($receiver, viewModel) {
    return div_0($receiver, void 0, PostItemTemplate$layout$lambda(viewModel));
  };
  PostItemTemplate.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'PostItemTemplate',
    interfaces: [Template]
  };
  function Template() {
  }
  Template.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'Template',
    interfaces: []
  };
  function TopNavbarTemplate() {
  }
  function TopNavbarTemplate$layout$lambda$lambda$lambda$lambda(closure$viewModel) {
    return function ($receiver) {
      set_classes($receiver, setOf(['site-title', 'top-navbar-title']));
      $receiver.href = closure$viewModel.siteTitleLink;
      $receiver.unaryPlus_pdl1vz$(closure$viewModel.siteTitle);
      return Unit;
    };
  }
  function TopNavbarTemplate$layout$lambda$lambda$lambda(closure$viewModel) {
    return function ($receiver) {
      a($receiver, void 0, void 0, void 0, TopNavbarTemplate$layout$lambda$lambda$lambda$lambda(closure$viewModel));
      return Unit;
    };
  }
  function TopNavbarTemplate$layout$lambda$lambda$lambda$lambda_0(closure$item) {
    return function ($receiver) {
      set_classes($receiver, setOf(['mdl-navigation__link', 'navbar-link', 'site-navbar-link', 'top-navbar-link']));
      $receiver.href = closure$item.link;
      $receiver.unaryPlus_pdl1vz$(closure$item.name);
      return Unit;
    };
  }
  function TopNavbarTemplate$layout$lambda$lambda$lambda_0(closure$viewModel) {
    return function ($receiver) {
      var tmp$;
      set_classes($receiver, setOf(['mdl-navigation', 'navbar', 'site-navbar', 'top-navbar']));
      tmp$ = closure$viewModel.navigationMenu.items.iterator();
      while (tmp$.hasNext()) {
        var item = tmp$.next();
        a($receiver, void 0, void 0, void 0, TopNavbarTemplate$layout$lambda$lambda$lambda$lambda_0(item));
      }
      return Unit;
    };
  }
  function TopNavbarTemplate$layout$lambda$lambda(closure$viewModel) {
    return function ($receiver) {
      span($receiver, 'mdl-layout-title', TopNavbarTemplate$layout$lambda$lambda$lambda(closure$viewModel));
      div($receiver, 'mdl-layout-spacer');
      nav($receiver, void 0, TopNavbarTemplate$layout$lambda$lambda$lambda_0(closure$viewModel));
      return Unit;
    };
  }
  function TopNavbarTemplate$layout$lambda(closure$viewModel) {
    return function ($receiver) {
      set_classes($receiver, setOf(['mdl-layout__header', 'site-header']));
      div($receiver, 'mdl-layout__header-row', TopNavbarTemplate$layout$lambda$lambda(closure$viewModel));
      return Unit;
    };
  }
  TopNavbarTemplate.prototype.layout_1d26kt$ = function ($receiver, viewModel) {
    return header_0($receiver, void 0, TopNavbarTemplate$layout$lambda(viewModel));
  };
  TopNavbarTemplate.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'TopNavbarTemplate',
    interfaces: [Template]
  };
  function HeaderFooterView() {
  }
  HeaderFooterView.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'HeaderFooterView',
    interfaces: []
  };
  function HomeView() {
  }
  HomeView.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'HomeView',
    interfaces: [HeaderFooterView]
  };
  function NotFoundView() {
  }
  NotFoundView.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'NotFoundView',
    interfaces: [HeaderFooterView]
  };
  function FooterViewModel(siteTitle, siteTitleLink, copyrightTitle, copyrightTitleLink, navigationMenus) {
    if (copyrightTitle === void 0)
      copyrightTitle = null;
    if (copyrightTitleLink === void 0)
      copyrightTitleLink = null;
    if (navigationMenus === void 0)
      navigationMenus = emptyList();
    this.siteTitle = siteTitle;
    this.siteTitleLink = siteTitleLink;
    this.copyrightTitle = copyrightTitle;
    this.copyrightTitleLink = copyrightTitleLink;
    this.navigationMenus = navigationMenus;
  }
  FooterViewModel.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'FooterViewModel',
    interfaces: []
  };
  FooterViewModel.prototype.component1 = function () {
    return this.siteTitle;
  };
  FooterViewModel.prototype.component2 = function () {
    return this.siteTitleLink;
  };
  FooterViewModel.prototype.component3 = function () {
    return this.copyrightTitle;
  };
  FooterViewModel.prototype.component4 = function () {
    return this.copyrightTitleLink;
  };
  FooterViewModel.prototype.component5 = function () {
    return this.navigationMenus;
  };
  FooterViewModel.prototype.copy_98wgcm$ = function (siteTitle, siteTitleLink, copyrightTitle, copyrightTitleLink, navigationMenus) {
    return new FooterViewModel(siteTitle === void 0 ? this.siteTitle : siteTitle, siteTitleLink === void 0 ? this.siteTitleLink : siteTitleLink, copyrightTitle === void 0 ? this.copyrightTitle : copyrightTitle, copyrightTitleLink === void 0 ? this.copyrightTitleLink : copyrightTitleLink, navigationMenus === void 0 ? this.navigationMenus : navigationMenus);
  };
  FooterViewModel.prototype.toString = function () {
    return 'FooterViewModel(siteTitle=' + Kotlin.toString(this.siteTitle) + (', siteTitleLink=' + Kotlin.toString(this.siteTitleLink)) + (', copyrightTitle=' + Kotlin.toString(this.copyrightTitle)) + (', copyrightTitleLink=' + Kotlin.toString(this.copyrightTitleLink)) + (', navigationMenus=' + Kotlin.toString(this.navigationMenus)) + ')';
  };
  FooterViewModel.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.siteTitle) | 0;
    result = result * 31 + Kotlin.hashCode(this.siteTitleLink) | 0;
    result = result * 31 + Kotlin.hashCode(this.copyrightTitle) | 0;
    result = result * 31 + Kotlin.hashCode(this.copyrightTitleLink) | 0;
    result = result * 31 + Kotlin.hashCode(this.navigationMenus) | 0;
    return result;
  };
  FooterViewModel.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.siteTitle, other.siteTitle) && Kotlin.equals(this.siteTitleLink, other.siteTitleLink) && Kotlin.equals(this.copyrightTitle, other.copyrightTitle) && Kotlin.equals(this.copyrightTitleLink, other.copyrightTitleLink) && Kotlin.equals(this.navigationMenus, other.navigationMenus)))));
  };
  function HomeViewModel() {
  }
  HomeViewModel.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'HomeViewModel',
    interfaces: []
  };
  function NavigationMenuItemViewModel(name, link, imageUrl) {
    if (imageUrl === void 0)
      imageUrl = null;
    this.name = name;
    this.link = link;
    this.imageUrl = imageUrl;
  }
  NavigationMenuItemViewModel.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'NavigationMenuItemViewModel',
    interfaces: []
  };
  NavigationMenuItemViewModel.prototype.component1 = function () {
    return this.name;
  };
  NavigationMenuItemViewModel.prototype.component2 = function () {
    return this.link;
  };
  NavigationMenuItemViewModel.prototype.component3 = function () {
    return this.imageUrl;
  };
  NavigationMenuItemViewModel.prototype.copy_buzeal$ = function (name, link, imageUrl) {
    return new NavigationMenuItemViewModel(name === void 0 ? this.name : name, link === void 0 ? this.link : link, imageUrl === void 0 ? this.imageUrl : imageUrl);
  };
  NavigationMenuItemViewModel.prototype.toString = function () {
    return 'NavigationMenuItemViewModel(name=' + Kotlin.toString(this.name) + (', link=' + Kotlin.toString(this.link)) + (', imageUrl=' + Kotlin.toString(this.imageUrl)) + ')';
  };
  NavigationMenuItemViewModel.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.name) | 0;
    result = result * 31 + Kotlin.hashCode(this.link) | 0;
    result = result * 31 + Kotlin.hashCode(this.imageUrl) | 0;
    return result;
  };
  NavigationMenuItemViewModel.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.name, other.name) && Kotlin.equals(this.link, other.link) && Kotlin.equals(this.imageUrl, other.imageUrl)))));
  };
  function NavigationMenuViewModel(name, items) {
    if (items === void 0)
      items = emptyList();
    this.name = name;
    this.items = items;
  }
  NavigationMenuViewModel.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'NavigationMenuViewModel',
    interfaces: []
  };
  NavigationMenuViewModel.prototype.component1 = function () {
    return this.name;
  };
  NavigationMenuViewModel.prototype.component2 = function () {
    return this.items;
  };
  NavigationMenuViewModel.prototype.copy_ylfs1z$ = function (name, items) {
    return new NavigationMenuViewModel(name === void 0 ? this.name : name, items === void 0 ? this.items : items);
  };
  NavigationMenuViewModel.prototype.toString = function () {
    return 'NavigationMenuViewModel(name=' + Kotlin.toString(this.name) + (', items=' + Kotlin.toString(this.items)) + ')';
  };
  NavigationMenuViewModel.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.name) | 0;
    result = result * 31 + Kotlin.hashCode(this.items) | 0;
    return result;
  };
  NavigationMenuViewModel.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.name, other.name) && Kotlin.equals(this.items, other.items)))));
  };
  function PostItemViewModel(title, subtitle, excerpt, imageUrl, date, author, authorImageUrl, link, readMoreText) {
    if (subtitle === void 0)
      subtitle = null;
    if (imageUrl === void 0)
      imageUrl = null;
    this.title = title;
    this.subtitle = subtitle;
    this.excerpt = excerpt;
    this.imageUrl = imageUrl;
    this.date = date;
    this.author = author;
    this.authorImageUrl = authorImageUrl;
    this.link = link;
    this.readMoreText = readMoreText;
  }
  PostItemViewModel.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'PostItemViewModel',
    interfaces: []
  };
  function TopNavbarViewModel(siteTitle, siteTitleLink, navigationMenu) {
    this.siteTitle = siteTitle;
    this.siteTitleLink = siteTitleLink;
    this.navigationMenu = navigationMenu;
  }
  TopNavbarViewModel.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'TopNavbarViewModel',
    interfaces: []
  };
  TopNavbarViewModel.prototype.component1 = function () {
    return this.siteTitle;
  };
  TopNavbarViewModel.prototype.component2 = function () {
    return this.siteTitleLink;
  };
  TopNavbarViewModel.prototype.component3 = function () {
    return this.navigationMenu;
  };
  TopNavbarViewModel.prototype.copy_xi49pv$ = function (siteTitle, siteTitleLink, navigationMenu) {
    return new TopNavbarViewModel(siteTitle === void 0 ? this.siteTitle : siteTitle, siteTitleLink === void 0 ? this.siteTitleLink : siteTitleLink, navigationMenu === void 0 ? this.navigationMenu : navigationMenu);
  };
  TopNavbarViewModel.prototype.toString = function () {
    return 'TopNavbarViewModel(siteTitle=' + Kotlin.toString(this.siteTitle) + (', siteTitleLink=' + Kotlin.toString(this.siteTitleLink)) + (', navigationMenu=' + Kotlin.toString(this.navigationMenu)) + ')';
  };
  TopNavbarViewModel.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.siteTitle) | 0;
    result = result * 31 + Kotlin.hashCode(this.siteTitleLink) | 0;
    result = result * 31 + Kotlin.hashCode(this.navigationMenu) | 0;
    return result;
  };
  TopNavbarViewModel.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.siteTitle, other.siteTitle) && Kotlin.equals(this.siteTitleLink, other.siteTitleLink) && Kotlin.equals(this.navigationMenu, other.navigationMenu)))));
  };
  var package$com = _.com || (_.com = {});
  var package$chrynan = package$com.chrynan || (package$com.chrynan = {});
  var package$sitetheme = package$chrynan.sitetheme || (package$chrynan.sitetheme = {});
  package$sitetheme.main = main_0;
  package$sitetheme.appendPage_adiukm$ = appendPage;
  var package$binder = package$sitetheme.binder || (package$sitetheme.binder = {});
  package$binder.HeaderFooterBinder = HeaderFooterBinder;
  package$binder.HomeBinder = HomeBinder;
  package$binder.NotFoundBinder = NotFoundBinder;
  var package$page = package$sitetheme.page || (package$sitetheme.page = {});
  package$page.HeaderFooterPage = HeaderFooterPage;
  package$page.HomePage = HomePage;
  package$page.NotFoundPage = NotFoundPage;
  package$page.Page = Page;
  package$page.PostPage = PostPage;
  var package$presenter = package$sitetheme.presenter || (package$sitetheme.presenter = {});
  package$presenter.HeaderFooterPresenter = HeaderFooterPresenter;
  package$presenter.HomePresenter = HomePresenter;
  package$presenter.Presenter = Presenter;
  var package$repository = package$sitetheme.repository || (package$sitetheme.repository = {});
  package$repository.FooterItemRepository = FooterItemRepository;
  package$repository.MainNavigationItemRepository = MainNavigationItemRepository;
  package$repository.PostRepository = PostRepository;
  var package$source = package$repository.source || (package$repository.source = {});
  package$source.FooterItemRepositorySource = FooterItemRepositorySource;
  package$source.MainNavigationItemRepositorySource = MainNavigationItemRepositorySource;
  package$source.PostRepositorySource = PostRepositorySource;
  var package$templates = package$sitetheme.templates || (package$sitetheme.templates = {});
  package$templates.FooterTemplate = FooterTemplate;
  package$templates.HomeTemplate = HomeTemplate;
  package$templates.PostItemTemplate = PostItemTemplate;
  package$templates.Template = Template;
  package$templates.TopNavbarTemplate = TopNavbarTemplate;
  var package$view = package$sitetheme.view || (package$sitetheme.view = {});
  package$view.HeaderFooterView = HeaderFooterView;
  package$view.HomeView = HomeView;
  package$view.NotFoundView = NotFoundView;
  var package$viewmodel = package$sitetheme.viewmodel || (package$sitetheme.viewmodel = {});
  package$viewmodel.FooterViewModel = FooterViewModel;
  package$viewmodel.HomeViewModel = HomeViewModel;
  package$viewmodel.NavigationMenuItemViewModel = NavigationMenuItemViewModel;
  package$viewmodel.NavigationMenuViewModel = NavigationMenuViewModel;
  package$viewmodel.PostItemViewModel = PostItemViewModel;
  package$viewmodel.TopNavbarViewModel = TopNavbarViewModel;
  Object.defineProperty(HeaderFooterPresenter.prototype, 'coroutineContext', Object.getOwnPropertyDescriptor(Presenter.prototype, 'coroutineContext'));
  main_0();
  Kotlin.defineModule('client', _);
  return _;
}(typeof client === 'undefined' ? {} : client, kotlin, this['kotlinx-html-js'], this['kotlinx-coroutines-core']);
