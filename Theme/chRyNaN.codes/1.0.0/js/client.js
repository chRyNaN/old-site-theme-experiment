(function (_, Kotlin, $module$locator, $module$ktor_client_core, $module$ktor_client_json, $module$ktor_client_logging, $module$kotlinx_html_js, $module$kotlinx_coroutines_core, $module$graphql_query, $module$common) {
  'use strict';
  var $$importsForInline$$ = _.$$importsForInline$$ || (_.$$importsForInline$$ = {});
  var Kind_INTERFACE = Kotlin.Kind.INTERFACE;
  var PropertyMetadata = Kotlin.PropertyMetadata;
  var Kind_CLASS = Kotlin.Kind.CLASS;
  var LocatesWith = $module$locator.com.chrynan.locator.LocatesWith;
  var Locator_init = $module$locator.com.chrynan.locator.Locator;
  var locator = $module$locator.com.chrynan.locator;
  var getKClass = Kotlin.getKClass;
  var Module = $module$locator.com.chrynan.locator.Module;
  var lazy = Kotlin.kotlin.lazy_klfg04$;
  var ModuleNotInitializedException_init = $module$locator.com.chrynan.locator.ModuleNotInitializedException;
  var ModuleClassCastException_init = $module$locator.com.chrynan.locator.ModuleClassCastException;
  var js = $module$ktor_client_core.io.ktor.client.engine.js;
  var JsonFeature = $module$ktor_client_json.io.ktor.client.features.json.JsonFeature;
  var Logging = $module$ktor_client_logging.io.ktor.client.features.logging.Logging;
  var Logger = $module$ktor_client_logging.io.ktor.client.features.logging.Logger;
  var get_DEFAULT = $module$ktor_client_logging.io.ktor.client.features.logging.get_DEFAULT_3z44iy$;
  var LogLevel = $module$ktor_client_logging.io.ktor.client.features.logging.LogLevel;
  var Unit = Kotlin.kotlin.Unit;
  var HttpClient = $module$ktor_client_core.io.ktor.client.HttpClient_744i18$;
  var clear = Kotlin.kotlin.dom.clear_asww5s$;
  var ArrayList_init = Kotlin.kotlin.collections.ArrayList_init_287e2$;
  var Kind_OBJECT = Kotlin.Kind.OBJECT;
  var append = $module$kotlinx_html_js.kotlinx.html.dom.append_k9bwru$;
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
  var println = Kotlin.kotlin.io.println_s8jyv4$;
  var SupervisorJob = $module$kotlinx_coroutines_core.kotlinx.coroutines.SupervisorJob_5dx9e$;
  var coroutines = $module$kotlinx_coroutines_core.kotlinx.coroutines;
  var CoroutineScope = $module$kotlinx_coroutines_core.kotlinx.coroutines.CoroutineScope;
  var GraphQLQueryBuilder = $module$graphql_query.com.chrynan.graphqlquerybuilder.GraphQLQueryBuilder;
  var BaseGraphQLQueryBuilder$gqlScalar = $module$graphql_query.com.chrynan.graphqlquerybuilder.BaseGraphQLQueryBuilder.gqlScalar;
  var listOf = Kotlin.kotlin.collections.listOf_i5x0yv$;
  var PostObjectFieldFormat = $module$common.com.chrynan.sitetheme.model.PostObjectFieldFormat;
  var listOf_0 = Kotlin.kotlin.collections.listOf_mh5how$;
  var query = $module$graphql_query.com.chrynan.graphqlquerybuilder.query_fdm211$;
  var RootGraphQLQueryBuilder = $module$graphql_query.com.chrynan.graphqlquerybuilder.RootGraphQLQueryBuilder;
  var fragment = $module$graphql_query.com.chrynan.graphqlquerybuilder.fragment_p31hh$;
  var rangeTo = $module$graphql_query.com.chrynan.graphqlquerybuilder.rangeTo_pshcop$;
  var PostListItemConnection = $module$common.com.chrynan.sitetheme.model.PostListItemConnection;
  var PostRepository = $module$common.com.chrynan.sitetheme.repository.PostRepository;
  var header_0 = $module$ktor_client_core.io.ktor.client.request.header_xadl6p$;
  var takeFrom = $module$ktor_client_core.$$importsForInline$$['ktor-http'].io.ktor.http.takeFrom_jl1sg7$;
  var utils = $module$ktor_client_core.io.ktor.client.utils;
  var url = $module$ktor_client_core.io.ktor.client.request.url_3rzbk2$;
  var HttpMethod = $module$ktor_client_core.$$importsForInline$$['ktor-http'].io.ktor.http.HttpMethod;
  var HttpRequestBuilder_init = $module$ktor_client_core.io.ktor.client.request.HttpRequestBuilder;
  var call = $module$ktor_client_core.io.ktor.client.call.call_30bfl5$;
  var throwCCE = Kotlin.throwCCE;
  var call_0 = $module$ktor_client_core.io.ktor.client.call;
  var TypeInfo_init = $module$ktor_client_core.io.ktor.client.call.TypeInfo;
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
  var header_1 = $module$kotlinx_html_js.kotlinx.html.header_dwfinh$;
  var get_create = $module$kotlinx_html_js.kotlinx.html.dom.get_create_4wc2mh$;
  var emptyList = Kotlin.kotlin.collections.emptyList_287e2$;
  var defineInlineFunction = Kotlin.defineInlineFunction;
  var wrapFunction = Kotlin.wrapFunction;
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
  AvatarQueryBuilder.prototype = Object.create(GraphQLQueryBuilder.prototype);
  AvatarQueryBuilder.prototype.constructor = AvatarQueryBuilder;
  ConnectionQueryBuilder.prototype = Object.create(GraphQLQueryBuilder.prototype);
  ConnectionQueryBuilder.prototype.constructor = ConnectionQueryBuilder;
  CategoryConnectionQueryBuilder.prototype = Object.create(ConnectionQueryBuilder.prototype);
  CategoryConnectionQueryBuilder.prototype.constructor = CategoryConnectionQueryBuilder;
  EdgeQueryBuilder.prototype = Object.create(GraphQLQueryBuilder.prototype);
  EdgeQueryBuilder.prototype.constructor = EdgeQueryBuilder;
  CategoryEdgeQueryBuilder.prototype = Object.create(EdgeQueryBuilder.prototype);
  CategoryEdgeQueryBuilder.prototype.constructor = CategoryEdgeQueryBuilder;
  CategoryQueryBuilder.prototype = Object.create(GraphQLQueryBuilder.prototype);
  CategoryQueryBuilder.prototype.constructor = CategoryQueryBuilder;
  CommentConnectionQueryBuilder.prototype = Object.create(ConnectionQueryBuilder.prototype);
  CommentConnectionQueryBuilder.prototype.constructor = CommentConnectionQueryBuilder;
  CommentEdgeQueryBuilder.prototype = Object.create(EdgeQueryBuilder.prototype);
  CommentEdgeQueryBuilder.prototype.constructor = CommentEdgeQueryBuilder;
  CommentQueryBuilder.prototype = Object.create(GraphQLQueryBuilder.prototype);
  CommentQueryBuilder.prototype.constructor = CommentQueryBuilder;
  MenuConnectionQueryBuilder.prototype = Object.create(ConnectionQueryBuilder.prototype);
  MenuConnectionQueryBuilder.prototype.constructor = MenuConnectionQueryBuilder;
  MenuEdgeQueryBuilder.prototype = Object.create(EdgeQueryBuilder.prototype);
  MenuEdgeQueryBuilder.prototype.constructor = MenuEdgeQueryBuilder;
  MenuItemConnectionQueryBuilder.prototype = Object.create(ConnectionQueryBuilder.prototype);
  MenuItemConnectionQueryBuilder.prototype.constructor = MenuItemConnectionQueryBuilder;
  MenuItemEdgeQueryBuilder.prototype = Object.create(EdgeQueryBuilder.prototype);
  MenuItemEdgeQueryBuilder.prototype.constructor = MenuItemEdgeQueryBuilder;
  MenuItemQueryBuilder.prototype = Object.create(GraphQLQueryBuilder.prototype);
  MenuItemQueryBuilder.prototype.constructor = MenuItemQueryBuilder;
  MenuQueryBuilder.prototype = Object.create(GraphQLQueryBuilder.prototype);
  MenuQueryBuilder.prototype.constructor = MenuQueryBuilder;
  PageConnectionQueryBuilder.prototype = Object.create(ConnectionQueryBuilder.prototype);
  PageConnectionQueryBuilder.prototype.constructor = PageConnectionQueryBuilder;
  PageEdgeQueryBuilder.prototype = Object.create(EdgeQueryBuilder.prototype);
  PageEdgeQueryBuilder.prototype.constructor = PageEdgeQueryBuilder;
  PageQueryBuilder.prototype = Object.create(GraphQLQueryBuilder.prototype);
  PageQueryBuilder.prototype.constructor = PageQueryBuilder;
  PostConnectionQueryBuilder.prototype = Object.create(ConnectionQueryBuilder.prototype);
  PostConnectionQueryBuilder.prototype.constructor = PostConnectionQueryBuilder;
  PostEdgeQueryBuilder.prototype = Object.create(EdgeQueryBuilder.prototype);
  PostEdgeQueryBuilder.prototype.constructor = PostEdgeQueryBuilder;
  PostQueryBuilder.prototype = Object.create(GraphQLQueryBuilder.prototype);
  PostQueryBuilder.prototype.constructor = PostQueryBuilder;
  RevisionConnectionQueryBuilder.prototype = Object.create(ConnectionQueryBuilder.prototype);
  RevisionConnectionQueryBuilder.prototype.constructor = RevisionConnectionQueryBuilder;
  RevisionEdgeQueryBuilder.prototype = Object.create(EdgeQueryBuilder.prototype);
  RevisionEdgeQueryBuilder.prototype.constructor = RevisionEdgeQueryBuilder;
  RevisionQueryBuilder.prototype = Object.create(GraphQLQueryBuilder.prototype);
  RevisionQueryBuilder.prototype.constructor = RevisionQueryBuilder;
  RootQueryBuilder.prototype = Object.create(RootGraphQLQueryBuilder.prototype);
  RootQueryBuilder.prototype.constructor = RootQueryBuilder;
  TagConnectionQueryBuilder.prototype = Object.create(ConnectionQueryBuilder.prototype);
  TagConnectionQueryBuilder.prototype.constructor = TagConnectionQueryBuilder;
  TagEdgeQueryBuilder.prototype = Object.create(EdgeQueryBuilder.prototype);
  TagEdgeQueryBuilder.prototype.constructor = TagEdgeQueryBuilder;
  TagQueryBuilder.prototype = Object.create(GraphQLQueryBuilder.prototype);
  TagQueryBuilder.prototype.constructor = TagQueryBuilder;
  UserConnectionQueryBuilder.prototype = Object.create(ConnectionQueryBuilder.prototype);
  UserConnectionQueryBuilder.prototype.constructor = UserConnectionQueryBuilder;
  UserEdgeQueryBuilder.prototype = Object.create(EdgeQueryBuilder.prototype);
  UserEdgeQueryBuilder.prototype.constructor = UserEdgeQueryBuilder;
  UserQueryBuilder.prototype = Object.create(GraphQLQueryBuilder.prototype);
  UserQueryBuilder.prototype.constructor = UserQueryBuilder;
  WPPageInfoQueryBuilder.prototype = Object.create(GraphQLQueryBuilder.prototype);
  WPPageInfoQueryBuilder.prototype.constructor = WPPageInfoQueryBuilder;
  function Application() {
  }
  Application.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'Application',
    interfaces: []
  };
  function main$lambda() {
    return new HomePage();
  }
  function main_0() {
    startAppOn(main$lambda);
  }
  function SiteApplication(startingPageRetriever) {
    if (startingPageRetriever === void 0)
      startingPageRetriever = SiteApplication_init$lambda;
    this.startingPageRetriever_0 = startingPageRetriever;
    this.module_utpevl$_0 = applicationModule;
    this.navigator_whzs0$_0 = new Locator_init(SiteApplication$navigator$lambda, this.module);
  }
  Object.defineProperty(SiteApplication.prototype, 'module', {
    get: function () {
      return this.module_utpevl$_0;
    }
  });
  var SiteApplication$navigator_metadata = new PropertyMetadata('navigator');
  Object.defineProperty(SiteApplication.prototype, 'navigator_0', {
    get: function () {
      return this.navigator_whzs0$_0.getValue_lrcp0p$(this, SiteApplication$navigator_metadata);
    }
  });
  SiteApplication.prototype.onStart = function () {
    var module_0 = this.module;
    var $receiver = locator.DependencyGraph.modules;
    var key = getKClass(WebModule);
    $receiver.put_xwzc9p$(key, module_0);
    var module_0_0 = this.module;
    var $receiver_0 = locator.DependencyGraph.modules;
    var key_0 = getKClass(RepositoryModule);
    $receiver_0.put_xwzc9p$(key_0, module_0_0);
    var module_0_1 = this.module;
    var $receiver_1 = locator.DependencyGraph.modules;
    var key_1 = getKClass(NavigatorModule);
    $receiver_1.put_xwzc9p$(key_1, module_0_1);
    var $this = locator.DependencyGraph;
    var module_0_2 = this.module;
    var $receiver_0_0 = $this.modules;
    var key_2 = getKClass(ApplicationModule);
    $receiver_0_0.put_xwzc9p$(key_2, module_0_2);
    this.navigator_0.goTo_inkody$(this.startingPageRetriever_0());
  };
  function SiteApplication_init$lambda() {
    return new HomePage();
  }
  function SiteApplication$navigator$lambda($receiver) {
    return $receiver.navigator;
  }
  SiteApplication.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'SiteApplication',
    interfaces: [LocatesWith, Application]
  };
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
  function ApplicationModule() {
  }
  ApplicationModule.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'ApplicationModule',
    interfaces: [NavigatorModule, RepositoryModule, WebModule, Module]
  };
  function HomePageModule() {
  }
  HomePageModule.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'HomePageModule',
    interfaces: [Module]
  };
  var webModule;
  var repositoryModule;
  var navigatorModule;
  var applicationModule;
  function homePageModule(page) {
    return new HomePageModuleSource(page);
  }
  function NavigatorModule() {
  }
  NavigatorModule.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'NavigatorModule',
    interfaces: [Module]
  };
  function RepositoryModule() {
  }
  RepositoryModule.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'RepositoryModule',
    interfaces: [Module]
  };
  function WebModule() {
  }
  WebModule.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'WebModule',
    interfaces: [Module]
  };
  function ApplicationModuleSource(webModule, repositoryModule, navigatorModule) {
    this.$delegate_o1fvkb$_0 = webModule;
    this.$delegate_o1fvkb$_1 = repositoryModule;
    this.$delegate_o1fvkb$_2 = navigatorModule;
  }
  Object.defineProperty(ApplicationModuleSource.prototype, 'httpClient', {
    get: function () {
      return this.$delegate_o1fvkb$_0.httpClient;
    }
  });
  Object.defineProperty(ApplicationModuleSource.prototype, 'postRepository', {
    get: function () {
      return this.$delegate_o1fvkb$_1.postRepository;
    }
  });
  Object.defineProperty(ApplicationModuleSource.prototype, 'navigator', {
    get: function () {
      return this.$delegate_o1fvkb$_2.navigator;
    }
  });
  ApplicationModuleSource.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ApplicationModuleSource',
    interfaces: [ApplicationModule, NavigatorModule, RepositoryModule, WebModule]
  };
  function HomePageModuleSource(page) {
    var tmp$, tmp$_0, tmp$_1;
    tmp$ = locator.DependencyGraph.modules.get_11rb$(getKClass(RepositoryModule));
    if (tmp$ == null) {
      throw new ModuleNotInitializedException_init('Module not found for KClass = ' + getKClass(RepositoryModule));
    }
    var module_0 = tmp$;
    tmp$_1 = Kotlin.isType(tmp$_0 = module_0, RepositoryModule) ? tmp$_0 : null;
    if (tmp$_1 == null) {
      throw new ModuleClassCastException_init(getKClass(RepositoryModule));
    }
    this.$delegate_kbhe4p$_0 = tmp$_1;
    this.view_u8bfsu$_0 = page;
    this.binder_8wk4iv$_0 = page;
    this.presenter_u9xtpl$_0 = lazy(HomePageModuleSource$presenter$lambda(this));
  }
  Object.defineProperty(HomePageModuleSource.prototype, 'view', {
    get: function () {
      return this.view_u8bfsu$_0;
    }
  });
  Object.defineProperty(HomePageModuleSource.prototype, 'binder', {
    get: function () {
      return this.binder_8wk4iv$_0;
    }
  });
  Object.defineProperty(HomePageModuleSource.prototype, 'presenter', {
    get: function () {
      return this.presenter_u9xtpl$_0.value;
    }
  });
  Object.defineProperty(HomePageModuleSource.prototype, 'postRepository', {
    get: function () {
      return this.$delegate_kbhe4p$_0.postRepository;
    }
  });
  function HomePageModuleSource$presenter$lambda(this$HomePageModuleSource) {
    return function () {
      return new HomePresenter(this$HomePageModuleSource.view, this$HomePageModuleSource.binder, new PostViewModelRepositorySource(), this$HomePageModuleSource.postRepository, new MainNavigationItemRepositorySource(), new FooterItemRepositorySource());
    };
  }
  HomePageModuleSource.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'HomePageModuleSource',
    interfaces: [RepositoryModule, HomePageModule]
  };
  function NavigatorModuleSource() {
    this.navigator_pztenp$_0 = new NavigatorSource();
  }
  Object.defineProperty(NavigatorModuleSource.prototype, 'navigator', {
    get: function () {
      return this.navigator_pztenp$_0;
    }
  });
  NavigatorModuleSource.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'NavigatorModuleSource',
    interfaces: [NavigatorModule]
  };
  function RepositoryModuleSource(webModule) {
    this.$delegate_glff8z$_0 = webModule;
    this.postRepository_bd9iff$_0 = lazy(RepositoryModuleSource$postRepository$lambda(this));
  }
  Object.defineProperty(RepositoryModuleSource.prototype, 'postRepository', {
    get: function () {
      return this.postRepository_bd9iff$_0.value;
    }
  });
  Object.defineProperty(RepositoryModuleSource.prototype, 'httpClient', {
    get: function () {
      return this.$delegate_glff8z$_0.httpClient;
    }
  });
  function RepositoryModuleSource$postRepository$lambda(this$RepositoryModuleSource) {
    return function () {
      return new PostRepositorySource(this$RepositoryModuleSource.httpClient);
    };
  }
  RepositoryModuleSource.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'RepositoryModuleSource',
    interfaces: [WebModule, RepositoryModule]
  };
  function WebModuleSource() {
    this.httpClient_6m1vsi$_0 = lazy(WebModuleSource$httpClient$lambda);
  }
  Object.defineProperty(WebModuleSource.prototype, 'httpClient', {
    get: function () {
      return this.httpClient_6m1vsi$_0.value;
    }
  });
  function WebModuleSource$httpClient$lambda$lambda$lambda($receiver) {
    $receiver.logger = get_DEFAULT(Logger.Companion);
    $receiver.level = LogLevel.ALL;
    return Unit;
  }
  function WebModuleSource$httpClient$lambda$lambda($receiver) {
    $receiver.install_xlxg29$(JsonFeature.Feature);
    $receiver.install_xlxg29$(Logging.Companion, WebModuleSource$httpClient$lambda$lambda$lambda);
    return Unit;
  }
  function WebModuleSource$httpClient$lambda() {
    return HttpClient(js.Js, WebModuleSource$httpClient$lambda$lambda);
  }
  WebModuleSource.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'WebModuleSource',
    interfaces: [WebModule]
  };
  function Mapper() {
  }
  Mapper.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'Mapper',
    interfaces: []
  };
  function Navigator() {
  }
  Navigator.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'Navigator',
    interfaces: []
  };
  function NavigatorSource(containerId) {
    if (containerId === void 0)
      containerId = 'container-id';
    this.containerId_0 = containerId;
    this.stack_0 = ArrayList_init();
    this.currentPage_0 = null;
  }
  Object.defineProperty(NavigatorSource.prototype, 'containerElement_0', {
    get: function () {
      return document.body;
    }
  });
  NavigatorSource.prototype.goTo_inkody$ = function (page) {
    var tmp$, tmp$_0, tmp$_1, tmp$_2, tmp$_3;
    (tmp$ = this.currentPage_0) != null ? (tmp$.onDestroyLayout(), Unit) : null;
    (tmp$_0 = this.containerElement_0) != null ? (clear(tmp$_0), Unit) : null;
    (tmp$_1 = this.currentPage_0) != null ? (tmp$_1.onLayoutDestroyed(), Unit) : null;
    if ((tmp$_2 = this.currentPage_0) != null) {
      this.stack_0.add_11rb$(tmp$_2);
    }
    this.currentPage_0 = page;
    (tmp$_3 = this.containerElement_0) != null ? (appendPage(tmp$_3, page), Unit) : null;
    page.onLayoutCreated();
  };
  NavigatorSource.prototype.goBack = function () {
    var tmp$, tmp$_0, tmp$_1, tmp$_2, tmp$_3;
    (tmp$ = this.currentPage_0) != null ? (tmp$.onDestroyLayout(), Unit) : null;
    (tmp$_0 = this.containerElement_0) != null ? (clear(tmp$_0), Unit) : null;
    (tmp$_1 = this.currentPage_0) != null ? (tmp$_1.onLayoutDestroyed(), Unit) : null;
    this.currentPage_0 = !this.stack_0.isEmpty() ? this.stack_0.removeAt_za3lpa$(this.stack_0.size - 1 | 0) : null;
    if ((tmp$_2 = this.currentPage_0) != null) {
      var tmp$_4;
      (tmp$_4 = this.containerElement_0) != null && (appendPage(tmp$_4, tmp$_2), Unit);
    }
    (tmp$_3 = this.currentPage_0) != null ? (tmp$_3.onLayoutCreated(), Unit) : null;
  };
  NavigatorSource.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'NavigatorSource',
    interfaces: [Navigator]
  };
  function NavigatorURIs() {
    NavigatorURIs_instance = this;
  }
  NavigatorURIs.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'NavigatorURIs',
    interfaces: []
  };
  var NavigatorURIs_instance = null;
  function NavigatorURIs_getInstance() {
    if (NavigatorURIs_instance === null) {
      new NavigatorURIs();
    }
    return NavigatorURIs_instance;
  }
  function startAppOn$lambda(closure$application) {
    return function (it) {
      closure$application.onStart();
      return Unit;
    };
  }
  function startAppOn(pageRetriever) {
    var application = new SiteApplication(pageRetriever);
    window.onload = startAppOn$lambda(application);
  }
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
    this.module_u18zsb$_0 = lazy(HomePage$module$lambda(this));
    this.presenter_k0myc5$_0 = new Locator_init(HomePage$presenter$lambda, this.module);
    this.postTemplate_xm09kp$_0 = lazy(HomePage$postTemplate$lambda);
    this.postContainer_4ck84y$_0 = lazy(HomePage$postContainer$lambda);
    this.progressBar_cmlr1p$_0 = lazy(HomePage$progressBar$lambda);
  }
  Object.defineProperty(HomePage.prototype, 'module', {
    get: function () {
      return this.module_u18zsb$_0.value;
    }
  });
  var HomePage$presenter_metadata = new PropertyMetadata('presenter');
  Object.defineProperty(HomePage.prototype, 'presenter', {
    get: function () {
      return this.presenter_k0myc5$_0.getValue_lrcp0p$(this, HomePage$presenter_metadata);
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
    var $this = locator.DependencyGraph;
    var module_0 = this.module;
    var $receiver_0 = $this.modules;
    var key = getKClass(HomePageModule);
    $receiver_0.put_xwzc9p$(key, module_0);
    this.presenter.loadHeader();
    this.presenter.loadFooter();
    this.presenter.loadPosts();
  };
  HomePage.prototype.onLayoutDestroyed = function () {
    HeaderFooterPage.prototype.onLayoutDestroyed.call(this);
    locator.DependencyGraph.modules.remove_11rb$(getKClass(HomePageModule));
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
  function HomePage$module$lambda(this$HomePage) {
    return function () {
      return homePageModule(this$HomePage);
    };
  }
  function HomePage$presenter$lambda($receiver) {
    return $receiver.presenter;
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
    interfaces: [LocatesWith, HomeBinder, HomeView, HeaderFooterPage]
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
  Page.prototype.onDestroyLayout = function () {
  };
  Page.prototype.onLayoutDestroyed = function () {
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
  function HomePresenter(view, binder, postViewModelRepository, postRepository, mainNavigationItemRepository, footerItemRepository) {
    HeaderFooterPresenter.call(this, view, binder, mainNavigationItemRepository, footerItemRepository);
    this.view_0 = view;
    this.binder_0 = binder;
    this.postViewModelRepository_0 = postViewModelRepository;
    this.postRepository_0 = postRepository;
  }
  function Coroutine$HomePresenter$loadPosts$lambda(this$HomePresenter_0, $receiver_0, controller, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.$controller = controller;
    this.exceptionState_0 = 1;
    this.local$this$HomePresenter = this$HomePresenter_0;
    this.local$postViewModelItems = void 0;
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
            println('HomePresenter: loadPosts: launch');
            this.local$this$HomePresenter.view_0.showProgressBar();
            this.state_0 = 2;
            this.result_0 = this.local$this$HomePresenter.postViewModelRepository_0.getMostRecentPosts(this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            this.local$postViewModelItems = this.result_0;
            this.state_0 = 3;
            this.result_0 = this.local$this$HomePresenter.postRepository_0.getPostListItemsAfter_19mbxw$(10, 'After Cursor', this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 3:
            var postItems = this.result_0;
            println('HomePresenter: loadPosts: launch: after getPostListItemsAfter() call');
            this.local$this$HomePresenter.binder_0.bindPosts_da2kou$(this.local$postViewModelItems);
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
  function AvatarQueryBuilder() {
    GraphQLQueryBuilder.call(this);
    this.default_9lxpjx$_0 = new BaseGraphQLQueryBuilder$gqlScalar(this, 'default');
    this.extraAttr_18yp4t$_0 = new BaseGraphQLQueryBuilder$gqlScalar(this, 'extraAttr');
    this.forceDefault_ppycrk$_0 = new BaseGraphQLQueryBuilder$gqlScalar(this, 'forceDefault');
    this.foundAvatar_veupnh$_0 = new BaseGraphQLQueryBuilder$gqlScalar(this, 'foundAvatar');
    this.height_e93sb5$_0 = new BaseGraphQLQueryBuilder$gqlScalar(this, 'height');
    this.width_71okzs$_0 = new BaseGraphQLQueryBuilder$gqlScalar(this, 'width');
    this.rating_b9geyv$_0 = new BaseGraphQLQueryBuilder$gqlScalar(this, 'rating');
    this.url_tpyy8h$_0 = new BaseGraphQLQueryBuilder$gqlScalar(this, 'url');
    this.size_2047rp$_0 = new BaseGraphQLQueryBuilder$gqlScalar(this, 'size');
  }
  var AvatarQueryBuilder$default_metadata = new PropertyMetadata('default');
  Object.defineProperty(AvatarQueryBuilder.prototype, 'default', {
    get: function () {
      return this.default_9lxpjx$_0.getValue_lrcp0p$(this, AvatarQueryBuilder$default_metadata);
    }
  });
  var AvatarQueryBuilder$extraAttr_metadata = new PropertyMetadata('extraAttr');
  Object.defineProperty(AvatarQueryBuilder.prototype, 'extraAttr', {
    get: function () {
      return this.extraAttr_18yp4t$_0.getValue_lrcp0p$(this, AvatarQueryBuilder$extraAttr_metadata);
    }
  });
  var AvatarQueryBuilder$forceDefault_metadata = new PropertyMetadata('forceDefault');
  Object.defineProperty(AvatarQueryBuilder.prototype, 'forceDefault', {
    get: function () {
      return this.forceDefault_ppycrk$_0.getValue_lrcp0p$(this, AvatarQueryBuilder$forceDefault_metadata);
    }
  });
  var AvatarQueryBuilder$foundAvatar_metadata = new PropertyMetadata('foundAvatar');
  Object.defineProperty(AvatarQueryBuilder.prototype, 'foundAvatar', {
    get: function () {
      return this.foundAvatar_veupnh$_0.getValue_lrcp0p$(this, AvatarQueryBuilder$foundAvatar_metadata);
    }
  });
  var AvatarQueryBuilder$height_metadata = new PropertyMetadata('height');
  Object.defineProperty(AvatarQueryBuilder.prototype, 'height', {
    get: function () {
      return this.height_e93sb5$_0.getValue_lrcp0p$(this, AvatarQueryBuilder$height_metadata);
    }
  });
  var AvatarQueryBuilder$width_metadata = new PropertyMetadata('width');
  Object.defineProperty(AvatarQueryBuilder.prototype, 'width', {
    get: function () {
      return this.width_71okzs$_0.getValue_lrcp0p$(this, AvatarQueryBuilder$width_metadata);
    }
  });
  var AvatarQueryBuilder$rating_metadata = new PropertyMetadata('rating');
  Object.defineProperty(AvatarQueryBuilder.prototype, 'rating', {
    get: function () {
      return this.rating_b9geyv$_0.getValue_lrcp0p$(this, AvatarQueryBuilder$rating_metadata);
    }
  });
  var AvatarQueryBuilder$url_metadata = new PropertyMetadata('url');
  Object.defineProperty(AvatarQueryBuilder.prototype, 'url', {
    get: function () {
      return this.url_tpyy8h$_0.getValue_lrcp0p$(this, AvatarQueryBuilder$url_metadata);
    }
  });
  var AvatarQueryBuilder$size_metadata = new PropertyMetadata('size');
  Object.defineProperty(AvatarQueryBuilder.prototype, 'size', {
    get: function () {
      return this.size_2047rp$_0.getValue_lrcp0p$(this, AvatarQueryBuilder$size_metadata);
    }
  });
  AvatarQueryBuilder.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'AvatarQueryBuilder',
    interfaces: [GraphQLQueryBuilder]
  };
  function CategoryConnectionQueryBuilder() {
    ConnectionQueryBuilder.call(this);
  }
  CategoryConnectionQueryBuilder.prototype.edges_gtjodg$ = function (builder) {
    this.gqlObject_tmotd3$('edges', void 0, new CategoryEdgeQueryBuilder(), builder);
  };
  CategoryConnectionQueryBuilder.prototype.nodes_ubor27$ = function (builder) {
    this.gqlObject_tmotd3$('nodes', void 0, new CategoryQueryBuilder(), builder);
  };
  CategoryConnectionQueryBuilder.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'CategoryConnectionQueryBuilder',
    interfaces: [ConnectionQueryBuilder]
  };
  function CategoryEdgeQueryBuilder() {
    EdgeQueryBuilder.call(this);
  }
  CategoryEdgeQueryBuilder.prototype.node_ubor27$ = function (builder) {
    this.gqlObject_tmotd3$('node', void 0, new CategoryQueryBuilder(), builder);
  };
  CategoryEdgeQueryBuilder.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'CategoryEdgeQueryBuilder',
    interfaces: [EdgeQueryBuilder]
  };
  function CategoryQueryBuilder() {
    GraphQLQueryBuilder.call(this);
    this.id_yfhx0g$_0 = new BaseGraphQLQueryBuilder$gqlScalar(this, 'id');
    this.categoryId_p2ruf6$_0 = new BaseGraphQLQueryBuilder$gqlScalar(this, 'categoryId');
    this.count_z4hak6$_0 = new BaseGraphQLQueryBuilder$gqlScalar(this, 'count');
    this.description_s9dk1p$_0 = new BaseGraphQLQueryBuilder$gqlScalar(this, 'description');
    this.link_cqz1i9$_0 = new BaseGraphQLQueryBuilder$gqlScalar(this, 'link');
    this.name_crxhww$_0 = new BaseGraphQLQueryBuilder$gqlScalar(this, 'name');
    this.slug_cuvnps$_0 = new BaseGraphQLQueryBuilder$gqlScalar(this, 'slug');
    this.termGroupId_8ldfd7$_0 = new BaseGraphQLQueryBuilder$gqlScalar(this, 'termGroupId');
  }
  var CategoryQueryBuilder$id_metadata = new PropertyMetadata('id');
  Object.defineProperty(CategoryQueryBuilder.prototype, 'id', {
    get: function () {
      return this.id_yfhx0g$_0.getValue_lrcp0p$(this, CategoryQueryBuilder$id_metadata);
    }
  });
  var CategoryQueryBuilder$categoryId_metadata = new PropertyMetadata('categoryId');
  Object.defineProperty(CategoryQueryBuilder.prototype, 'categoryId', {
    get: function () {
      return this.categoryId_p2ruf6$_0.getValue_lrcp0p$(this, CategoryQueryBuilder$categoryId_metadata);
    }
  });
  var CategoryQueryBuilder$count_metadata = new PropertyMetadata('count');
  Object.defineProperty(CategoryQueryBuilder.prototype, 'count', {
    get: function () {
      return this.count_z4hak6$_0.getValue_lrcp0p$(this, CategoryQueryBuilder$count_metadata);
    }
  });
  var CategoryQueryBuilder$description_metadata = new PropertyMetadata('description');
  Object.defineProperty(CategoryQueryBuilder.prototype, 'description', {
    get: function () {
      return this.description_s9dk1p$_0.getValue_lrcp0p$(this, CategoryQueryBuilder$description_metadata);
    }
  });
  var CategoryQueryBuilder$link_metadata = new PropertyMetadata('link');
  Object.defineProperty(CategoryQueryBuilder.prototype, 'link', {
    get: function () {
      return this.link_cqz1i9$_0.getValue_lrcp0p$(this, CategoryQueryBuilder$link_metadata);
    }
  });
  var CategoryQueryBuilder$name_metadata = new PropertyMetadata('name');
  Object.defineProperty(CategoryQueryBuilder.prototype, 'name', {
    get: function () {
      return this.name_crxhww$_0.getValue_lrcp0p$(this, CategoryQueryBuilder$name_metadata);
    }
  });
  var CategoryQueryBuilder$slug_metadata = new PropertyMetadata('slug');
  Object.defineProperty(CategoryQueryBuilder.prototype, 'slug', {
    get: function () {
      return this.slug_cuvnps$_0.getValue_lrcp0p$(this, CategoryQueryBuilder$slug_metadata);
    }
  });
  var CategoryQueryBuilder$termGroupId_metadata = new PropertyMetadata('termGroupId');
  Object.defineProperty(CategoryQueryBuilder.prototype, 'termGroupId', {
    get: function () {
      return this.termGroupId_8ldfd7$_0.getValue_lrcp0p$(this, CategoryQueryBuilder$termGroupId_metadata);
    }
  });
  CategoryQueryBuilder.prototype.children_mjfr2k$ = function (first, last, after, before, builder) {
    if (first === void 0)
      first = null;
    if (last === void 0)
      last = null;
    if (after === void 0)
      after = null;
    if (before === void 0)
      before = null;
    this.gqlObject_tmotd3$('children', listOf([this.gqlParam_fmz8iu$('first', void 0, first), this.gqlParam_fmz8iu$('last', void 0, last), this.gqlParam_fmz8iu$('after', void 0, after), this.gqlParam_fmz8iu$('before', void 0, before)]), new CategoryConnectionQueryBuilder(), builder);
  };
  CategoryQueryBuilder.prototype.posts_y1ny3a$ = function (first, last, after, before, builder) {
    if (first === void 0)
      first = null;
    if (last === void 0)
      last = null;
    if (after === void 0)
      after = null;
    if (before === void 0)
      before = null;
    this.gqlObject_tmotd3$('posts', listOf([this.gqlParam_fmz8iu$('first', void 0, first), this.gqlParam_fmz8iu$('last', void 0, last), this.gqlParam_fmz8iu$('after', void 0, after), this.gqlParam_fmz8iu$('before', void 0, before)]), new PostConnectionQueryBuilder(), builder);
  };
  CategoryQueryBuilder.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'CategoryQueryBuilder',
    interfaces: [GraphQLQueryBuilder]
  };
  function CommentConnectionQueryBuilder() {
    ConnectionQueryBuilder.call(this);
  }
  CommentConnectionQueryBuilder.prototype.edges_gtjodg$ = function (builder) {
    this.gqlObject_tmotd3$('edges', void 0, new CommentEdgeQueryBuilder(), builder);
  };
  CommentConnectionQueryBuilder.prototype.nodes_ubor27$ = function (builder) {
    this.gqlObject_tmotd3$('nodes', void 0, new CommentQueryBuilder(), builder);
  };
  CommentConnectionQueryBuilder.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'CommentConnectionQueryBuilder',
    interfaces: [ConnectionQueryBuilder]
  };
  function CommentEdgeQueryBuilder() {
    EdgeQueryBuilder.call(this);
  }
  CommentEdgeQueryBuilder.prototype.node_ubor27$ = function (builder) {
    this.gqlObject_tmotd3$('node', void 0, new CommentQueryBuilder(), builder);
  };
  CommentEdgeQueryBuilder.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'CommentEdgeQueryBuilder',
    interfaces: [EdgeQueryBuilder]
  };
  function CommentQueryBuilder() {
    GraphQLQueryBuilder.call(this);
    this.id_yfyls5$_0 = new BaseGraphQLQueryBuilder$gqlScalar(this, 'id');
    this.agent_dtdj5d$_0 = new BaseGraphQLQueryBuilder$gqlScalar(this, 'agent');
    this.approved_s9jqqx$_0 = new BaseGraphQLQueryBuilder$gqlScalar(this, 'approved');
    this.authorIp_d9dqni$_0 = new BaseGraphQLQueryBuilder$gqlScalar(this, 'authorIp');
    this.commentId_olj7h6$_0 = new BaseGraphQLQueryBuilder$gqlScalar(this, 'commentId');
    this.date_ehqsu$_0 = new BaseGraphQLQueryBuilder$gqlScalar(this, 'date');
    this.restricted_8d74hn$_0 = new BaseGraphQLQueryBuilder$gqlScalar(this, 'restricted');
    this.karma_95zt4s$_0 = new BaseGraphQLQueryBuilder$gqlScalar(this, 'karma');
    this.type_59sl6$_0 = new BaseGraphQLQueryBuilder$gqlScalar(this, 'type');
  }
  var CommentQueryBuilder$id_metadata = new PropertyMetadata('id');
  Object.defineProperty(CommentQueryBuilder.prototype, 'id', {
    get: function () {
      return this.id_yfyls5$_0.getValue_lrcp0p$(this, CommentQueryBuilder$id_metadata);
    }
  });
  var CommentQueryBuilder$agent_metadata = new PropertyMetadata('agent');
  Object.defineProperty(CommentQueryBuilder.prototype, 'agent', {
    get: function () {
      return this.agent_dtdj5d$_0.getValue_lrcp0p$(this, CommentQueryBuilder$agent_metadata);
    }
  });
  var CommentQueryBuilder$approved_metadata = new PropertyMetadata('approved');
  Object.defineProperty(CommentQueryBuilder.prototype, 'approved', {
    get: function () {
      return this.approved_s9jqqx$_0.getValue_lrcp0p$(this, CommentQueryBuilder$approved_metadata);
    }
  });
  var CommentQueryBuilder$authorIp_metadata = new PropertyMetadata('authorIp');
  Object.defineProperty(CommentQueryBuilder.prototype, 'authorIp', {
    get: function () {
      return this.authorIp_d9dqni$_0.getValue_lrcp0p$(this, CommentQueryBuilder$authorIp_metadata);
    }
  });
  var CommentQueryBuilder$commentId_metadata = new PropertyMetadata('commentId');
  Object.defineProperty(CommentQueryBuilder.prototype, 'commentId', {
    get: function () {
      return this.commentId_olj7h6$_0.getValue_lrcp0p$(this, CommentQueryBuilder$commentId_metadata);
    }
  });
  var CommentQueryBuilder$date_metadata = new PropertyMetadata('date');
  Object.defineProperty(CommentQueryBuilder.prototype, 'date', {
    get: function () {
      return this.date_ehqsu$_0.getValue_lrcp0p$(this, CommentQueryBuilder$date_metadata);
    }
  });
  var CommentQueryBuilder$restricted_metadata = new PropertyMetadata('restricted');
  Object.defineProperty(CommentQueryBuilder.prototype, 'restricted', {
    get: function () {
      return this.restricted_8d74hn$_0.getValue_lrcp0p$(this, CommentQueryBuilder$restricted_metadata);
    }
  });
  var CommentQueryBuilder$karma_metadata = new PropertyMetadata('karma');
  Object.defineProperty(CommentQueryBuilder.prototype, 'karma', {
    get: function () {
      return this.karma_95zt4s$_0.getValue_lrcp0p$(this, CommentQueryBuilder$karma_metadata);
    }
  });
  var CommentQueryBuilder$type_metadata = new PropertyMetadata('type');
  Object.defineProperty(CommentQueryBuilder.prototype, 'type', {
    get: function () {
      return this.type_59sl6$_0.getValue_lrcp0p$(this, CommentQueryBuilder$type_metadata);
    }
  });
  CommentQueryBuilder.prototype.children_tni6wt$ = function (first, last, after, before, builder) {
    if (first === void 0)
      first = null;
    if (last === void 0)
      last = null;
    if (after === void 0)
      after = null;
    if (before === void 0)
      before = null;
    this.gqlObject_tmotd3$('children', listOf([this.gqlParam_fmz8iu$('first', void 0, first), this.gqlParam_fmz8iu$('last', void 0, last), this.gqlParam_fmz8iu$('after', void 0, after), this.gqlParam_fmz8iu$('before', void 0, before)]), new CommentConnectionQueryBuilder(), builder);
  };
  CommentQueryBuilder.prototype.parent_ysvfwj$ = function (builder) {
    this.gqlObject_tmotd3$('parent', void 0, new CommentQueryBuilder(), builder);
  };
  CommentQueryBuilder.prototype.content_jom9h$ = function (format) {
    if (format === void 0)
      format = PostObjectFieldFormat.RAW;
    this.gqlScalarWithParams_avw15n$('content', listOf_0(this.gqlParam_fmz8iu$('format', void 0, format)));
  };
  CommentQueryBuilder.prototype.author_6ovptx$ = function (builder) {
    this.gqlObject_tmotd3$('author', void 0, new UserQueryBuilder(), builder);
  };
  CommentQueryBuilder.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'CommentQueryBuilder',
    interfaces: [GraphQLQueryBuilder]
  };
  function ConnectionQueryBuilder() {
    GraphQLQueryBuilder.call(this);
  }
  ConnectionQueryBuilder.prototype.pageInfo_r8166o$ = function (builder) {
    this.gqlObject_tmotd3$('pageInfo', void 0, new WPPageInfoQueryBuilder(), builder);
  };
  ConnectionQueryBuilder.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ConnectionQueryBuilder',
    interfaces: [GraphQLQueryBuilder]
  };
  function EdgeQueryBuilder() {
    GraphQLQueryBuilder.call(this);
    this.cursor_s39p50$_0 = new BaseGraphQLQueryBuilder$gqlScalar(this, 'scalar');
  }
  var EdgeQueryBuilder$cursor_metadata = new PropertyMetadata('cursor');
  Object.defineProperty(EdgeQueryBuilder.prototype, 'cursor', {
    get: function () {
      return this.cursor_s39p50$_0.getValue_lrcp0p$(this, EdgeQueryBuilder$cursor_metadata);
    }
  });
  EdgeQueryBuilder.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'EdgeQueryBuilder',
    interfaces: [GraphQLQueryBuilder]
  };
  function MenuConnectionQueryBuilder() {
    ConnectionQueryBuilder.call(this);
  }
  MenuConnectionQueryBuilder.prototype.edges_gtjodg$ = function (builder) {
    this.gqlObject_tmotd3$('edges', void 0, new MenuEdgeQueryBuilder(), builder);
  };
  MenuConnectionQueryBuilder.prototype.nodes_ubor27$ = function (builder) {
    this.gqlObject_tmotd3$('nodes', void 0, new MenuQueryBuilder(), builder);
  };
  MenuConnectionQueryBuilder.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'MenuConnectionQueryBuilder',
    interfaces: [ConnectionQueryBuilder]
  };
  function MenuEdgeQueryBuilder() {
    EdgeQueryBuilder.call(this);
  }
  MenuEdgeQueryBuilder.prototype.node_ubor27$ = function (builder) {
    this.gqlObject_tmotd3$('node', void 0, new MenuQueryBuilder(), builder);
  };
  MenuEdgeQueryBuilder.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'MenuEdgeQueryBuilder',
    interfaces: [EdgeQueryBuilder]
  };
  function MenuItemConnectionQueryBuilder() {
    ConnectionQueryBuilder.call(this);
  }
  MenuItemConnectionQueryBuilder.prototype.edges_gtjodg$ = function (builder) {
    this.gqlObject_tmotd3$('edges', void 0, new MenuItemEdgeQueryBuilder(), builder);
  };
  MenuItemConnectionQueryBuilder.prototype.nodes_ubor27$ = function (builder) {
    this.gqlObject_tmotd3$('nodes', void 0, new MenuItemQueryBuilder(), builder);
  };
  MenuItemConnectionQueryBuilder.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'MenuItemConnectionQueryBuilder',
    interfaces: [ConnectionQueryBuilder]
  };
  function MenuItemEdgeQueryBuilder() {
    EdgeQueryBuilder.call(this);
  }
  MenuItemEdgeQueryBuilder.prototype.node_ubor27$ = function (builder) {
    this.gqlObject_tmotd3$('node', void 0, new MenuItemQueryBuilder(), builder);
  };
  MenuItemEdgeQueryBuilder.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'MenuItemEdgeQueryBuilder',
    interfaces: [EdgeQueryBuilder]
  };
  function MenuItemQueryBuilder() {
    GraphQLQueryBuilder.call(this);
    this.id_imvm44$_0 = new BaseGraphQLQueryBuilder$gqlScalar(this, 'id');
    this.cssClasses_60yyms$_0 = new BaseGraphQLQueryBuilder$gqlScalar(this, 'cssClasses');
    this.description_a1qaqf$_0 = new BaseGraphQLQueryBuilder$gqlScalar(this, 'description');
    this.label_5uekjz$_0 = new BaseGraphQLQueryBuilder$gqlScalar(this, 'label');
    this.linkRelationship_p7l0f7$_0 = new BaseGraphQLQueryBuilder$gqlScalar(this, 'linkRelationship');
    this.menuItemId_oezzcu$_0 = new BaseGraphQLQueryBuilder$gqlScalar(this, 'menuItemId');
    this.target_7iki9q$_0 = new BaseGraphQLQueryBuilder$gqlScalar(this, 'target');
    this.title_1xblv7$_0 = new BaseGraphQLQueryBuilder$gqlScalar(this, 'title');
    this.url_9gjl7a$_0 = new BaseGraphQLQueryBuilder$gqlScalar(this, 'url');
  }
  var MenuItemQueryBuilder$id_metadata = new PropertyMetadata('id');
  Object.defineProperty(MenuItemQueryBuilder.prototype, 'id', {
    get: function () {
      return this.id_imvm44$_0.getValue_lrcp0p$(this, MenuItemQueryBuilder$id_metadata);
    }
  });
  var MenuItemQueryBuilder$cssClasses_metadata = new PropertyMetadata('cssClasses');
  Object.defineProperty(MenuItemQueryBuilder.prototype, 'cssClasses', {
    get: function () {
      return this.cssClasses_60yyms$_0.getValue_lrcp0p$(this, MenuItemQueryBuilder$cssClasses_metadata);
    }
  });
  var MenuItemQueryBuilder$description_metadata = new PropertyMetadata('description');
  Object.defineProperty(MenuItemQueryBuilder.prototype, 'description', {
    get: function () {
      return this.description_a1qaqf$_0.getValue_lrcp0p$(this, MenuItemQueryBuilder$description_metadata);
    }
  });
  var MenuItemQueryBuilder$label_metadata = new PropertyMetadata('label');
  Object.defineProperty(MenuItemQueryBuilder.prototype, 'label', {
    get: function () {
      return this.label_5uekjz$_0.getValue_lrcp0p$(this, MenuItemQueryBuilder$label_metadata);
    }
  });
  var MenuItemQueryBuilder$linkRelationship_metadata = new PropertyMetadata('linkRelationship');
  Object.defineProperty(MenuItemQueryBuilder.prototype, 'linkRelationship', {
    get: function () {
      return this.linkRelationship_p7l0f7$_0.getValue_lrcp0p$(this, MenuItemQueryBuilder$linkRelationship_metadata);
    }
  });
  var MenuItemQueryBuilder$menuItemId_metadata = new PropertyMetadata('menuItemId');
  Object.defineProperty(MenuItemQueryBuilder.prototype, 'menuItemId', {
    get: function () {
      return this.menuItemId_oezzcu$_0.getValue_lrcp0p$(this, MenuItemQueryBuilder$menuItemId_metadata);
    }
  });
  var MenuItemQueryBuilder$target_metadata = new PropertyMetadata('target');
  Object.defineProperty(MenuItemQueryBuilder.prototype, 'target', {
    get: function () {
      return this.target_7iki9q$_0.getValue_lrcp0p$(this, MenuItemQueryBuilder$target_metadata);
    }
  });
  var MenuItemQueryBuilder$title_metadata = new PropertyMetadata('title');
  Object.defineProperty(MenuItemQueryBuilder.prototype, 'title', {
    get: function () {
      return this.title_1xblv7$_0.getValue_lrcp0p$(this, MenuItemQueryBuilder$title_metadata);
    }
  });
  var MenuItemQueryBuilder$url_metadata = new PropertyMetadata('url');
  Object.defineProperty(MenuItemQueryBuilder.prototype, 'url', {
    get: function () {
      return this.url_9gjl7a$_0.getValue_lrcp0p$(this, MenuItemQueryBuilder$url_metadata);
    }
  });
  MenuItemQueryBuilder.prototype.childItems_oq2v60$ = function (first, last, after, before, builder) {
    if (first === void 0)
      first = null;
    if (last === void 0)
      last = null;
    if (after === void 0)
      after = null;
    if (before === void 0)
      before = null;
    this.gqlObject_tmotd3$('childItems', listOf([this.gqlParam_fmz8iu$('first', void 0, first), this.gqlParam_fmz8iu$('last', void 0, last), this.gqlParam_fmz8iu$('after', void 0, after), this.gqlParam_fmz8iu$('before', void 0, before)]), new MenuItemConnectionQueryBuilder(), builder);
  };
  MenuItemQueryBuilder.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'MenuItemQueryBuilder',
    interfaces: [GraphQLQueryBuilder]
  };
  function MenuQueryBuilder() {
    GraphQLQueryBuilder.call(this);
    this.id_z1iyo1$_0 = new BaseGraphQLQueryBuilder$gqlScalar(this, 'id');
    this.count_4jvvbd$_0 = new BaseGraphQLQueryBuilder$gqlScalar(this, 'count');
    this.menuId_128kwu$_0 = new BaseGraphQLQueryBuilder$gqlScalar(this, 'menuId');
    this.menu_762dvh$_0 = new BaseGraphQLQueryBuilder$gqlScalar(this, 'menu');
    this.slug_79hr75$_0 = new BaseGraphQLQueryBuilder$gqlScalar(this, 'slug');
  }
  var MenuQueryBuilder$id_metadata = new PropertyMetadata('id');
  Object.defineProperty(MenuQueryBuilder.prototype, 'id', {
    get: function () {
      return this.id_z1iyo1$_0.getValue_lrcp0p$(this, MenuQueryBuilder$id_metadata);
    }
  });
  var MenuQueryBuilder$count_metadata = new PropertyMetadata('count');
  Object.defineProperty(MenuQueryBuilder.prototype, 'count', {
    get: function () {
      return this.count_4jvvbd$_0.getValue_lrcp0p$(this, MenuQueryBuilder$count_metadata);
    }
  });
  var MenuQueryBuilder$menuId_metadata = new PropertyMetadata('menuId');
  Object.defineProperty(MenuQueryBuilder.prototype, 'menuId', {
    get: function () {
      return this.menuId_128kwu$_0.getValue_lrcp0p$(this, MenuQueryBuilder$menuId_metadata);
    }
  });
  var MenuQueryBuilder$menu_metadata = new PropertyMetadata('menu');
  Object.defineProperty(MenuQueryBuilder.prototype, 'menu', {
    get: function () {
      return this.menu_762dvh$_0.getValue_lrcp0p$(this, MenuQueryBuilder$menu_metadata);
    }
  });
  var MenuQueryBuilder$slug_metadata = new PropertyMetadata('slug');
  Object.defineProperty(MenuQueryBuilder.prototype, 'slug', {
    get: function () {
      return this.slug_79hr75$_0.getValue_lrcp0p$(this, MenuQueryBuilder$slug_metadata);
    }
  });
  MenuQueryBuilder.prototype.menuItems_oq2v60$ = function (first, last, after, before, builder) {
    if (first === void 0)
      first = null;
    if (last === void 0)
      last = null;
    if (after === void 0)
      after = null;
    if (before === void 0)
      before = null;
    this.gqlObject_tmotd3$('menuItems', listOf([this.gqlParam_fmz8iu$('first', void 0, first), this.gqlParam_fmz8iu$('last', void 0, last), this.gqlParam_fmz8iu$('after', void 0, after), this.gqlParam_fmz8iu$('before', void 0, before)]), new MenuItemConnectionQueryBuilder(), builder);
  };
  MenuQueryBuilder.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'MenuQueryBuilder',
    interfaces: [GraphQLQueryBuilder]
  };
  function PageConnectionQueryBuilder() {
    ConnectionQueryBuilder.call(this);
  }
  PageConnectionQueryBuilder.prototype.edges_gtjodg$ = function (builder) {
    this.gqlObject_tmotd3$('edges', void 0, new PageEdgeQueryBuilder(), builder);
  };
  PageConnectionQueryBuilder.prototype.nodes_ubor27$ = function (builder) {
    this.gqlObject_tmotd3$('nodes', void 0, new PageQueryBuilder(), builder);
  };
  PageConnectionQueryBuilder.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'PageConnectionQueryBuilder',
    interfaces: [ConnectionQueryBuilder]
  };
  function PageEdgeQueryBuilder() {
    EdgeQueryBuilder.call(this);
  }
  PageEdgeQueryBuilder.prototype.node_ubor27$ = function (builder) {
    this.gqlObject_tmotd3$('node', void 0, new PageQueryBuilder(), builder);
  };
  PageEdgeQueryBuilder.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'PageEdgeQueryBuilder',
    interfaces: [EdgeQueryBuilder]
  };
  function PageQueryBuilder() {
    GraphQLQueryBuilder.call(this);
    this.id_tzjkjz$_0 = new BaseGraphQLQueryBuilder$gqlScalar(this, 'id');
    this.commentCount_6duags$_0 = new BaseGraphQLQueryBuilder$gqlScalar(this, 'commentCount');
    this.commentStatus_8n3cc7$_0 = new BaseGraphQLQueryBuilder$gqlScalar(this, 'commentStatus');
    this.date_kniyda$_0 = new BaseGraphQLQueryBuilder$gqlScalar(this, 'date');
    this.desiredSlug_ks7xfn$_0 = new BaseGraphQLQueryBuilder$gqlScalar(this, 'desiredSlug');
    this.enclosure_lki80m$_0 = new BaseGraphQLQueryBuilder$gqlScalar(this, 'enclosure');
    this.guid_kpivpf$_0 = new BaseGraphQLQueryBuilder$gqlScalar(this, 'guid');
    this.link_ks2ape$_0 = new BaseGraphQLQueryBuilder$gqlScalar(this, 'link');
    this.modified_1qnn7h$_0 = new BaseGraphQLQueryBuilder$gqlScalar(this, 'modified');
    this.pageId_6r5k2m$_0 = new BaseGraphQLQueryBuilder$gqlScalar(this, 'pageId');
    this.slug_kvywwx$_0 = new BaseGraphQLQueryBuilder$gqlScalar(this, 'slug');
    this.uri_67604k$_0 = new BaseGraphQLQueryBuilder$gqlScalar(this, 'uri');
  }
  var PageQueryBuilder$id_metadata = new PropertyMetadata('id');
  Object.defineProperty(PageQueryBuilder.prototype, 'id', {
    get: function () {
      return this.id_tzjkjz$_0.getValue_lrcp0p$(this, PageQueryBuilder$id_metadata);
    }
  });
  var PageQueryBuilder$commentCount_metadata = new PropertyMetadata('commentCount');
  Object.defineProperty(PageQueryBuilder.prototype, 'commentCount', {
    get: function () {
      return this.commentCount_6duags$_0.getValue_lrcp0p$(this, PageQueryBuilder$commentCount_metadata);
    }
  });
  var PageQueryBuilder$commentStatus_metadata = new PropertyMetadata('commentStatus');
  Object.defineProperty(PageQueryBuilder.prototype, 'commentStatus', {
    get: function () {
      return this.commentStatus_8n3cc7$_0.getValue_lrcp0p$(this, PageQueryBuilder$commentStatus_metadata);
    }
  });
  var PageQueryBuilder$date_metadata = new PropertyMetadata('date');
  Object.defineProperty(PageQueryBuilder.prototype, 'date', {
    get: function () {
      return this.date_kniyda$_0.getValue_lrcp0p$(this, PageQueryBuilder$date_metadata);
    }
  });
  var PageQueryBuilder$desiredSlug_metadata = new PropertyMetadata('desiredSlug');
  Object.defineProperty(PageQueryBuilder.prototype, 'desiredSlug', {
    get: function () {
      return this.desiredSlug_ks7xfn$_0.getValue_lrcp0p$(this, PageQueryBuilder$desiredSlug_metadata);
    }
  });
  var PageQueryBuilder$enclosure_metadata = new PropertyMetadata('enclosure');
  Object.defineProperty(PageQueryBuilder.prototype, 'enclosure', {
    get: function () {
      return this.enclosure_lki80m$_0.getValue_lrcp0p$(this, PageQueryBuilder$enclosure_metadata);
    }
  });
  var PageQueryBuilder$guid_metadata = new PropertyMetadata('guid');
  Object.defineProperty(PageQueryBuilder.prototype, 'guid', {
    get: function () {
      return this.guid_kpivpf$_0.getValue_lrcp0p$(this, PageQueryBuilder$guid_metadata);
    }
  });
  var PageQueryBuilder$link_metadata = new PropertyMetadata('link');
  Object.defineProperty(PageQueryBuilder.prototype, 'link', {
    get: function () {
      return this.link_ks2ape$_0.getValue_lrcp0p$(this, PageQueryBuilder$link_metadata);
    }
  });
  var PageQueryBuilder$modified_metadata = new PropertyMetadata('modified');
  Object.defineProperty(PageQueryBuilder.prototype, 'modified', {
    get: function () {
      return this.modified_1qnn7h$_0.getValue_lrcp0p$(this, PageQueryBuilder$modified_metadata);
    }
  });
  var PageQueryBuilder$pageId_metadata = new PropertyMetadata('pageId');
  Object.defineProperty(PageQueryBuilder.prototype, 'pageId', {
    get: function () {
      return this.pageId_6r5k2m$_0.getValue_lrcp0p$(this, PageQueryBuilder$pageId_metadata);
    }
  });
  var PageQueryBuilder$slug_metadata = new PropertyMetadata('slug');
  Object.defineProperty(PageQueryBuilder.prototype, 'slug', {
    get: function () {
      return this.slug_kvywwx$_0.getValue_lrcp0p$(this, PageQueryBuilder$slug_metadata);
    }
  });
  var PageQueryBuilder$uri_metadata = new PropertyMetadata('uri');
  Object.defineProperty(PageQueryBuilder.prototype, 'uri', {
    get: function () {
      return this.uri_67604k$_0.getValue_lrcp0p$(this, PageQueryBuilder$uri_metadata);
    }
  });
  PageQueryBuilder.prototype.author_6ovptx$ = function (builder) {
    this.gqlObject_tmotd3$('author', void 0, new UserQueryBuilder(), builder);
  };
  PageQueryBuilder.prototype.editLast_6ovptx$ = function (builder) {
    this.gqlObject_tmotd3$('editLast', void 0, new UserQueryBuilder(), builder);
  };
  PageQueryBuilder.prototype.revisions_nce2z5$ = function (first, last, after, before, builder) {
    if (first === void 0)
      first = null;
    if (last === void 0)
      last = null;
    if (after === void 0)
      after = null;
    if (before === void 0)
      before = null;
    this.gqlObject_tmotd3$('revisions', listOf([this.gqlParam_fmz8iu$('first', void 0, first), this.gqlParam_fmz8iu$('last', void 0, last), this.gqlParam_fmz8iu$('after', void 0, after), this.gqlParam_fmz8iu$('before', void 0, before)]), new RevisionConnectionQueryBuilder(), builder);
  };
  PageQueryBuilder.prototype.comments_tni6wt$ = function (first, last, after, before, builder) {
    if (first === void 0)
      first = null;
    if (last === void 0)
      last = null;
    if (after === void 0)
      after = null;
    if (before === void 0)
      before = null;
    this.gqlObject_tmotd3$('users', listOf([this.gqlParam_fmz8iu$('first', void 0, first), this.gqlParam_fmz8iu$('last', void 0, last), this.gqlParam_fmz8iu$('after', void 0, after), this.gqlParam_fmz8iu$('before', void 0, before)]), new CommentConnectionQueryBuilder(), builder);
  };
  PageQueryBuilder.prototype.content_jom9h$ = function (format) {
    if (format === void 0)
      format = PostObjectFieldFormat.RAW;
    this.gqlScalarWithParams_avw15n$('content', listOf_0(this.gqlParam_fmz8iu$('format', void 0, format)));
  };
  PageQueryBuilder.prototype.excerpt_jom9h$ = function (format) {
    if (format === void 0)
      format = PostObjectFieldFormat.RAW;
    this.gqlScalarWithParams_avw15n$('excerpt', listOf_0(this.gqlParam_fmz8iu$('format', void 0, format)));
  };
  PageQueryBuilder.prototype.title_jom9h$ = function (format) {
    if (format === void 0)
      format = PostObjectFieldFormat.RAW;
    this.gqlScalarWithParams_avw15n$('title', listOf_0(this.gqlParam_fmz8iu$('format', void 0, format)));
  };
  PageQueryBuilder.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'PageQueryBuilder',
    interfaces: [GraphQLQueryBuilder]
  };
  function PostConnectionQueryBuilder() {
    ConnectionQueryBuilder.call(this);
  }
  PostConnectionQueryBuilder.prototype.edges_gtjodg$ = function (builder) {
    this.gqlObject_tmotd3$('edges', void 0, new PostEdgeQueryBuilder(), builder);
  };
  PostConnectionQueryBuilder.prototype.nodes_ubor27$ = function (builder) {
    this.gqlObject_tmotd3$('nodes', void 0, new PostQueryBuilder(), builder);
  };
  PostConnectionQueryBuilder.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'PostConnectionQueryBuilder',
    interfaces: [ConnectionQueryBuilder]
  };
  function PostEdgeQueryBuilder() {
    EdgeQueryBuilder.call(this);
  }
  PostEdgeQueryBuilder.prototype.node_ubor27$ = function (builder) {
    this.gqlObject_tmotd3$('node', void 0, new PostQueryBuilder(), builder);
  };
  PostEdgeQueryBuilder.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'PostEdgeQueryBuilder',
    interfaces: [EdgeQueryBuilder]
  };
  function PostQueryBuilder() {
    GraphQLQueryBuilder.call(this);
    this.id_gmzsn2$_0 = new BaseGraphQLQueryBuilder$gqlScalar(this, 'id');
    this.commentCount_appkj$_0 = new BaseGraphQLQueryBuilder$gqlScalar(this, 'commentCount');
    this.commentStatus_el7h52$_0 = new BaseGraphQLQueryBuilder$gqlScalar(this, 'commentStatus');
    this.date_7xytgx$_0 = new BaseGraphQLQueryBuilder$gqlScalar(this, 'date');
    this.desiredSlug_i9z0uq$_0 = new BaseGraphQLQueryBuilder$gqlScalar(this, 'desiredSlug');
    this.enclosure_q2q5et$_0 = new BaseGraphQLQueryBuilder$gqlScalar(this, 'enclosure');
    this.featuredImage_1y0cye$_0 = new BaseGraphQLQueryBuilder$gqlScalar(this, 'featuredImage');
    this.guid_7vyw4s$_0 = new BaseGraphQLQueryBuilder$gqlScalar(this, 'guid');
    this.link_7tfh4t$_0 = new BaseGraphQLQueryBuilder$gqlScalar(this, 'link');
    this.modified_pwfcb8$_0 = new BaseGraphQLQueryBuilder$gqlScalar(this, 'modified');
    this.postId_79hcsi$_0 = new BaseGraphQLQueryBuilder$gqlScalar(this, 'postId');
    this.slug_7piuxa$_0 = new BaseGraphQLQueryBuilder$gqlScalar(this, 'slug');
    this.status_hn348l$_0 = new BaseGraphQLQueryBuilder$gqlScalar(this, 'status');
    this.uri_iktamt$_0 = new BaseGraphQLQueryBuilder$gqlScalar(this, 'uri');
  }
  var PostQueryBuilder$id_metadata = new PropertyMetadata('id');
  Object.defineProperty(PostQueryBuilder.prototype, 'id', {
    get: function () {
      return this.id_gmzsn2$_0.getValue_lrcp0p$(this, PostQueryBuilder$id_metadata);
    }
  });
  var PostQueryBuilder$commentCount_metadata = new PropertyMetadata('commentCount');
  Object.defineProperty(PostQueryBuilder.prototype, 'commentCount', {
    get: function () {
      return this.commentCount_appkj$_0.getValue_lrcp0p$(this, PostQueryBuilder$commentCount_metadata);
    }
  });
  var PostQueryBuilder$commentStatus_metadata = new PropertyMetadata('commentStatus');
  Object.defineProperty(PostQueryBuilder.prototype, 'commentStatus', {
    get: function () {
      return this.commentStatus_el7h52$_0.getValue_lrcp0p$(this, PostQueryBuilder$commentStatus_metadata);
    }
  });
  var PostQueryBuilder$date_metadata = new PropertyMetadata('date');
  Object.defineProperty(PostQueryBuilder.prototype, 'date', {
    get: function () {
      return this.date_7xytgx$_0.getValue_lrcp0p$(this, PostQueryBuilder$date_metadata);
    }
  });
  var PostQueryBuilder$desiredSlug_metadata = new PropertyMetadata('desiredSlug');
  Object.defineProperty(PostQueryBuilder.prototype, 'desiredSlug', {
    get: function () {
      return this.desiredSlug_i9z0uq$_0.getValue_lrcp0p$(this, PostQueryBuilder$desiredSlug_metadata);
    }
  });
  var PostQueryBuilder$enclosure_metadata = new PropertyMetadata('enclosure');
  Object.defineProperty(PostQueryBuilder.prototype, 'enclosure', {
    get: function () {
      return this.enclosure_q2q5et$_0.getValue_lrcp0p$(this, PostQueryBuilder$enclosure_metadata);
    }
  });
  var PostQueryBuilder$featuredImage_metadata = new PropertyMetadata('featuredImage');
  Object.defineProperty(PostQueryBuilder.prototype, 'featuredImage', {
    get: function () {
      return this.featuredImage_1y0cye$_0.getValue_lrcp0p$(this, PostQueryBuilder$featuredImage_metadata);
    }
  });
  var PostQueryBuilder$guid_metadata = new PropertyMetadata('guid');
  Object.defineProperty(PostQueryBuilder.prototype, 'guid', {
    get: function () {
      return this.guid_7vyw4s$_0.getValue_lrcp0p$(this, PostQueryBuilder$guid_metadata);
    }
  });
  var PostQueryBuilder$link_metadata = new PropertyMetadata('link');
  Object.defineProperty(PostQueryBuilder.prototype, 'link', {
    get: function () {
      return this.link_7tfh4t$_0.getValue_lrcp0p$(this, PostQueryBuilder$link_metadata);
    }
  });
  var PostQueryBuilder$modified_metadata = new PropertyMetadata('modified');
  Object.defineProperty(PostQueryBuilder.prototype, 'modified', {
    get: function () {
      return this.modified_pwfcb8$_0.getValue_lrcp0p$(this, PostQueryBuilder$modified_metadata);
    }
  });
  var PostQueryBuilder$postId_metadata = new PropertyMetadata('postId');
  Object.defineProperty(PostQueryBuilder.prototype, 'postId', {
    get: function () {
      return this.postId_79hcsi$_0.getValue_lrcp0p$(this, PostQueryBuilder$postId_metadata);
    }
  });
  var PostQueryBuilder$slug_metadata = new PropertyMetadata('slug');
  Object.defineProperty(PostQueryBuilder.prototype, 'slug', {
    get: function () {
      return this.slug_7piuxa$_0.getValue_lrcp0p$(this, PostQueryBuilder$slug_metadata);
    }
  });
  var PostQueryBuilder$status_metadata = new PropertyMetadata('status');
  Object.defineProperty(PostQueryBuilder.prototype, 'status', {
    get: function () {
      return this.status_hn348l$_0.getValue_lrcp0p$(this, PostQueryBuilder$status_metadata);
    }
  });
  var PostQueryBuilder$uri_metadata = new PropertyMetadata('uri');
  Object.defineProperty(PostQueryBuilder.prototype, 'uri', {
    get: function () {
      return this.uri_iktamt$_0.getValue_lrcp0p$(this, PostQueryBuilder$uri_metadata);
    }
  });
  PostQueryBuilder.prototype.author_6ovptx$ = function (builder) {
    this.gqlObject_tmotd3$('author', void 0, new UserQueryBuilder(), builder);
  };
  PostQueryBuilder.prototype.editLast_6ovptx$ = function (builder) {
    this.gqlObject_tmotd3$('editLast', void 0, new UserQueryBuilder(), builder);
  };
  PostQueryBuilder.prototype.categories_mjfr2k$ = function (first, last, after, before, builder) {
    if (first === void 0)
      first = null;
    if (last === void 0)
      last = null;
    if (after === void 0)
      after = null;
    if (before === void 0)
      before = null;
    this.gqlObject_tmotd3$('categories', listOf([this.gqlParam_fmz8iu$('first', void 0, first), this.gqlParam_fmz8iu$('last', void 0, last), this.gqlParam_fmz8iu$('after', void 0, after), this.gqlParam_fmz8iu$('before', void 0, before)]), new CategoryConnectionQueryBuilder(), builder);
  };
  PostQueryBuilder.prototype.tags_p5kv2a$ = function (first, last, after, before, builder) {
    if (first === void 0)
      first = null;
    if (last === void 0)
      last = null;
    if (after === void 0)
      after = null;
    if (before === void 0)
      before = null;
    this.gqlObject_tmotd3$('tags', listOf([this.gqlParam_fmz8iu$('first', void 0, first), this.gqlParam_fmz8iu$('last', void 0, last), this.gqlParam_fmz8iu$('after', void 0, after), this.gqlParam_fmz8iu$('before', void 0, before)]), new TagConnectionQueryBuilder(), builder);
  };
  PostQueryBuilder.prototype.revisions_nce2z5$ = function (first, last, after, before, builder) {
    if (first === void 0)
      first = null;
    if (last === void 0)
      last = null;
    if (after === void 0)
      after = null;
    if (before === void 0)
      before = null;
    this.gqlObject_tmotd3$('revisions', listOf([this.gqlParam_fmz8iu$('first', void 0, first), this.gqlParam_fmz8iu$('last', void 0, last), this.gqlParam_fmz8iu$('after', void 0, after), this.gqlParam_fmz8iu$('before', void 0, before)]), new RevisionConnectionQueryBuilder(), builder);
  };
  PostQueryBuilder.prototype.comments_tni6wt$ = function (first, last, after, before, builder) {
    if (first === void 0)
      first = null;
    if (last === void 0)
      last = null;
    if (after === void 0)
      after = null;
    if (before === void 0)
      before = null;
    this.gqlObject_tmotd3$('comments', listOf([this.gqlParam_fmz8iu$('first', void 0, first), this.gqlParam_fmz8iu$('last', void 0, last), this.gqlParam_fmz8iu$('after', void 0, after), this.gqlParam_fmz8iu$('before', void 0, before)]), new CommentConnectionQueryBuilder(), builder);
  };
  PostQueryBuilder.prototype.content_jom9h$ = function (format) {
    if (format === void 0)
      format = PostObjectFieldFormat.RAW;
    this.gqlScalarWithParams_avw15n$('content', listOf_0(this.gqlParam_fmz8iu$('format', void 0, format)));
  };
  PostQueryBuilder.prototype.excerpt_jom9h$ = function (format) {
    if (format === void 0)
      format = PostObjectFieldFormat.RAW;
    this.gqlScalarWithParams_avw15n$('excerpt', listOf_0(this.gqlParam_fmz8iu$('format', void 0, format)));
  };
  PostQueryBuilder.prototype.title_jom9h$ = function (format) {
    if (format === void 0)
      format = PostObjectFieldFormat.RAW;
    this.gqlScalarWithParams_avw15n$('title', listOf_0(this.gqlParam_fmz8iu$('format', void 0, format)));
  };
  PostQueryBuilder.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'PostQueryBuilder',
    interfaces: [GraphQLQueryBuilder]
  };
  function query_0(builder) {
    return query(new RootQueryBuilder(), builder);
  }
  function RevisionConnectionQueryBuilder() {
    ConnectionQueryBuilder.call(this);
  }
  RevisionConnectionQueryBuilder.prototype.edges_gtjodg$ = function (builder) {
    this.gqlObject_tmotd3$('edges', void 0, new RevisionEdgeQueryBuilder(), builder);
  };
  RevisionConnectionQueryBuilder.prototype.nodes_ubor27$ = function (builder) {
    this.gqlObject_tmotd3$('nodes', void 0, new RevisionQueryBuilder(), builder);
  };
  RevisionConnectionQueryBuilder.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'RevisionConnectionQueryBuilder',
    interfaces: [ConnectionQueryBuilder]
  };
  function RevisionEdgeQueryBuilder() {
    EdgeQueryBuilder.call(this);
  }
  RevisionEdgeQueryBuilder.prototype.node_ubor27$ = function (builder) {
    this.gqlObject_tmotd3$('node', void 0, new RevisionQueryBuilder(), builder);
  };
  RevisionEdgeQueryBuilder.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'RevisionEdgeQueryBuilder',
    interfaces: [EdgeQueryBuilder]
  };
  function RevisionQueryBuilder() {
    GraphQLQueryBuilder.call(this);
    this.id_33x20z$_0 = new BaseGraphQLQueryBuilder$gqlScalar(this, 'id');
    this.commentStatus_di7aj$_0 = new BaseGraphQLQueryBuilder$gqlScalar(this, 'commentStatus');
    this.date_4dgfg6$_0 = new BaseGraphQLQueryBuilder$gqlScalar(this, 'date');
    this.desiredSlug_chw307$_0 = new BaseGraphQLQueryBuilder$gqlScalar(this, 'desiredSlug');
    this.enclosure_mg4jt6$_0 = new BaseGraphQLQueryBuilder$gqlScalar(this, 'enclosure');
    this.guid_4bgi41$_0 = new BaseGraphQLQueryBuilder$gqlScalar(this, 'guid');
    this.link_48x342$_0 = new BaseGraphQLQueryBuilder$gqlScalar(this, 'link');
    this.menuOrder_auuksz$_0 = new BaseGraphQLQueryBuilder$gqlScalar(this, 'menuOrder');
    this.modified_2vc6bz$_0 = new BaseGraphQLQueryBuilder$gqlScalar(this, 'modified');
    this.revisionId_mdyfmq$_0 = new BaseGraphQLQueryBuilder$gqlScalar(this, 'revisionId');
    this.slug_450gwj$_0 = new BaseGraphQLQueryBuilder$gqlScalar(this, 'slug');
    this.uri_pc4pgw$_0 = new BaseGraphQLQueryBuilder$gqlScalar(this, 'uri');
  }
  var RevisionQueryBuilder$id_metadata = new PropertyMetadata('id');
  Object.defineProperty(RevisionQueryBuilder.prototype, 'id', {
    get: function () {
      return this.id_33x20z$_0.getValue_lrcp0p$(this, RevisionQueryBuilder$id_metadata);
    }
  });
  var RevisionQueryBuilder$commentStatus_metadata = new PropertyMetadata('commentStatus');
  Object.defineProperty(RevisionQueryBuilder.prototype, 'commentStatus', {
    get: function () {
      return this.commentStatus_di7aj$_0.getValue_lrcp0p$(this, RevisionQueryBuilder$commentStatus_metadata);
    }
  });
  var RevisionQueryBuilder$date_metadata = new PropertyMetadata('date');
  Object.defineProperty(RevisionQueryBuilder.prototype, 'date', {
    get: function () {
      return this.date_4dgfg6$_0.getValue_lrcp0p$(this, RevisionQueryBuilder$date_metadata);
    }
  });
  var RevisionQueryBuilder$desiredSlug_metadata = new PropertyMetadata('desiredSlug');
  Object.defineProperty(RevisionQueryBuilder.prototype, 'desiredSlug', {
    get: function () {
      return this.desiredSlug_chw307$_0.getValue_lrcp0p$(this, RevisionQueryBuilder$desiredSlug_metadata);
    }
  });
  var RevisionQueryBuilder$enclosure_metadata = new PropertyMetadata('enclosure');
  Object.defineProperty(RevisionQueryBuilder.prototype, 'enclosure', {
    get: function () {
      return this.enclosure_mg4jt6$_0.getValue_lrcp0p$(this, RevisionQueryBuilder$enclosure_metadata);
    }
  });
  var RevisionQueryBuilder$guid_metadata = new PropertyMetadata('guid');
  Object.defineProperty(RevisionQueryBuilder.prototype, 'guid', {
    get: function () {
      return this.guid_4bgi41$_0.getValue_lrcp0p$(this, RevisionQueryBuilder$guid_metadata);
    }
  });
  var RevisionQueryBuilder$link_metadata = new PropertyMetadata('link');
  Object.defineProperty(RevisionQueryBuilder.prototype, 'link', {
    get: function () {
      return this.link_48x342$_0.getValue_lrcp0p$(this, RevisionQueryBuilder$link_metadata);
    }
  });
  var RevisionQueryBuilder$menuOrder_metadata = new PropertyMetadata('menuOrder');
  Object.defineProperty(RevisionQueryBuilder.prototype, 'menuOrder', {
    get: function () {
      return this.menuOrder_auuksz$_0.getValue_lrcp0p$(this, RevisionQueryBuilder$menuOrder_metadata);
    }
  });
  var RevisionQueryBuilder$modified_metadata = new PropertyMetadata('modified');
  Object.defineProperty(RevisionQueryBuilder.prototype, 'modified', {
    get: function () {
      return this.modified_2vc6bz$_0.getValue_lrcp0p$(this, RevisionQueryBuilder$modified_metadata);
    }
  });
  var RevisionQueryBuilder$revisionId_metadata = new PropertyMetadata('revisionId');
  Object.defineProperty(RevisionQueryBuilder.prototype, 'revisionId', {
    get: function () {
      return this.revisionId_mdyfmq$_0.getValue_lrcp0p$(this, RevisionQueryBuilder$revisionId_metadata);
    }
  });
  var RevisionQueryBuilder$slug_metadata = new PropertyMetadata('slug');
  Object.defineProperty(RevisionQueryBuilder.prototype, 'slug', {
    get: function () {
      return this.slug_450gwj$_0.getValue_lrcp0p$(this, RevisionQueryBuilder$slug_metadata);
    }
  });
  var RevisionQueryBuilder$uri_metadata = new PropertyMetadata('uri');
  Object.defineProperty(RevisionQueryBuilder.prototype, 'uri', {
    get: function () {
      return this.uri_pc4pgw$_0.getValue_lrcp0p$(this, RevisionQueryBuilder$uri_metadata);
    }
  });
  RevisionQueryBuilder.prototype.author_6ovptx$ = function (builder) {
    this.gqlObject_tmotd3$('author', void 0, new UserQueryBuilder(), builder);
  };
  RevisionQueryBuilder.prototype.editLast_6ovptx$ = function (builder) {
    this.gqlObject_tmotd3$('editLast', void 0, new UserQueryBuilder(), builder);
  };
  RevisionQueryBuilder.prototype.content_jom9h$ = function (format) {
    if (format === void 0)
      format = PostObjectFieldFormat.RAW;
    this.gqlScalarWithParams_avw15n$('content', listOf_0(this.gqlParam_fmz8iu$('format', void 0, format)));
  };
  RevisionQueryBuilder.prototype.excerpt_jom9h$ = function (format) {
    if (format === void 0)
      format = PostObjectFieldFormat.RAW;
    this.gqlScalarWithParams_avw15n$('excerpt', listOf_0(this.gqlParam_fmz8iu$('format', void 0, format)));
  };
  RevisionQueryBuilder.prototype.title_jom9h$ = function (format) {
    if (format === void 0)
      format = PostObjectFieldFormat.RAW;
    this.gqlScalarWithParams_avw15n$('title', listOf_0(this.gqlParam_fmz8iu$('format', void 0, format)));
  };
  RevisionQueryBuilder.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'RevisionQueryBuilder',
    interfaces: [GraphQLQueryBuilder]
  };
  function RootQueryBuilder() {
    RootGraphQLQueryBuilder.call(this);
  }
  RootQueryBuilder.prototype.category_pm4sii$ = function (id, builder) {
    this.gqlObject_tmotd3$('category', listOf_0(this.gqlParam_fmz8iu$('id', void 0, id)), new CategoryQueryBuilder(), builder);
  };
  RootQueryBuilder.prototype.categories_mjfr2k$ = function (first, last, after, before, builder) {
    if (first === void 0)
      first = null;
    if (last === void 0)
      last = null;
    if (after === void 0)
      after = null;
    if (before === void 0)
      before = null;
    this.gqlObject_tmotd3$('categories', listOf([this.gqlParam_fmz8iu$('first', void 0, first), this.gqlParam_fmz8iu$('last', void 0, last), this.gqlParam_fmz8iu$('after', void 0, after), this.gqlParam_fmz8iu$('before', void 0, before)]), new CategoryConnectionQueryBuilder(), builder);
  };
  RootQueryBuilder.prototype.comment_t5inv9$ = function (id, builder) {
    this.gqlObject_tmotd3$('comment', listOf_0(this.gqlParam_fmz8iu$('id', void 0, id)), new CommentQueryBuilder(), builder);
  };
  RootQueryBuilder.prototype.comments_tni6wt$ = function (first, last, after, before, builder) {
    if (first === void 0)
      first = null;
    if (last === void 0)
      last = null;
    if (after === void 0)
      after = null;
    if (before === void 0)
      before = null;
    this.gqlObject_tmotd3$('comments', listOf([this.gqlParam_fmz8iu$('first', void 0, first), this.gqlParam_fmz8iu$('last', void 0, last), this.gqlParam_fmz8iu$('after', void 0, after), this.gqlParam_fmz8iu$('before', void 0, before)]), new CommentConnectionQueryBuilder(), builder);
  };
  RootQueryBuilder.prototype.menu_cbvxdl$ = function (id, builder) {
    this.gqlObject_tmotd3$('menu', listOf_0(this.gqlParam_fmz8iu$('id', void 0, id)), new MenuQueryBuilder(), builder);
  };
  RootQueryBuilder.prototype.menus_ffse3v$ = function (first, last, after, before, builder) {
    if (first === void 0)
      first = null;
    if (last === void 0)
      last = null;
    if (after === void 0)
      after = null;
    if (before === void 0)
      before = null;
    this.gqlObject_tmotd3$('menus', listOf([this.gqlParam_fmz8iu$('first', void 0, first), this.gqlParam_fmz8iu$('last', void 0, last), this.gqlParam_fmz8iu$('after', void 0, after), this.gqlParam_fmz8iu$('before', void 0, before)]), new MenuConnectionQueryBuilder(), builder);
  };
  RootQueryBuilder.prototype.menuItem_5njd52$ = function (id, builder) {
    this.gqlObject_tmotd3$('menuItem', listOf_0(this.gqlParam_fmz8iu$('id', void 0, id)), new MenuItemQueryBuilder(), builder);
  };
  RootQueryBuilder.prototype.menuItems_oq2v60$ = function (first, last, after, before, builder) {
    if (first === void 0)
      first = null;
    if (last === void 0)
      last = null;
    if (after === void 0)
      after = null;
    if (before === void 0)
      before = null;
    this.gqlObject_tmotd3$('menuItems', listOf([this.gqlParam_fmz8iu$('first', void 0, first), this.gqlParam_fmz8iu$('last', void 0, last), this.gqlParam_fmz8iu$('after', void 0, after), this.gqlParam_fmz8iu$('before', void 0, before)]), new MenuItemConnectionQueryBuilder(), builder);
  };
  RootQueryBuilder.prototype.page_1jh8c7$ = function (id, builder) {
    this.gqlObject_tmotd3$('page', listOf_0(this.gqlParam_fmz8iu$('id', void 0, id)), new PageQueryBuilder(), builder);
  };
  RootQueryBuilder.prototype.pageBy_foznu5$ = function (id, pageId, uri, builder) {
    this.gqlObject_tmotd3$('pageBy', listOf([this.gqlParam_fmz8iu$('id', void 0, id), this.gqlParam_fmz8iu$('pageId', void 0, pageId), this.gqlParam_fmz8iu$('uri', void 0, uri)]), new PageQueryBuilder(), builder);
  };
  RootQueryBuilder.prototype.pages_g3vtx7$ = function (first, last, after, before, builder) {
    if (first === void 0)
      first = null;
    if (last === void 0)
      last = null;
    if (after === void 0)
      after = null;
    if (before === void 0)
      before = null;
    this.gqlObject_tmotd3$('pages', listOf([this.gqlParam_fmz8iu$('first', void 0, first), this.gqlParam_fmz8iu$('last', void 0, last), this.gqlParam_fmz8iu$('after', void 0, after), this.gqlParam_fmz8iu$('before', void 0, before)]), new PageConnectionQueryBuilder(), builder);
  };
  RootQueryBuilder.prototype.post_552rp4$ = function (id, builder) {
    this.gqlObject_tmotd3$('post', listOf_0(this.gqlParam_fmz8iu$('id', void 0, id)), new PostQueryBuilder(), builder);
  };
  RootQueryBuilder.prototype.postBy_mdjnvg$ = function (id, postId, uri, builder) {
    this.gqlObject_tmotd3$('postBy', listOf([this.gqlParam_fmz8iu$('id', void 0, id), this.gqlParam_fmz8iu$('postId', void 0, postId), this.gqlParam_fmz8iu$('uri', void 0, uri)]), new PostQueryBuilder(), builder);
  };
  RootQueryBuilder.prototype.posts_y1ny3a$ = function (first, last, after, before, builder) {
    if (first === void 0)
      first = null;
    if (last === void 0)
      last = null;
    if (after === void 0)
      after = null;
    if (before === void 0)
      before = null;
    this.gqlObject_tmotd3$('categories', listOf([this.gqlParam_fmz8iu$('first', void 0, first), this.gqlParam_fmz8iu$('last', void 0, last), this.gqlParam_fmz8iu$('after', void 0, after), this.gqlParam_fmz8iu$('before', void 0, before)]), new PostConnectionQueryBuilder(), builder);
  };
  RootQueryBuilder.prototype.revision_pb59ab$ = function (id, builder) {
    this.gqlObject_tmotd3$('revision', listOf_0(this.gqlParam_fmz8iu$('id', void 0, id)), new RevisionQueryBuilder(), builder);
  };
  RootQueryBuilder.prototype.revisionBy_5s46zj$ = function (id, revisionId, uri, builder) {
    this.gqlObject_tmotd3$('revisionBy', listOf([this.gqlParam_fmz8iu$('id', void 0, id), this.gqlParam_fmz8iu$('revisionId', void 0, revisionId), this.gqlParam_fmz8iu$('uri', void 0, uri)]), new RevisionQueryBuilder(), builder);
  };
  RootQueryBuilder.prototype.revisions_nce2z5$ = function (first, last, after, before, builder) {
    if (first === void 0)
      first = null;
    if (last === void 0)
      last = null;
    if (after === void 0)
      after = null;
    if (before === void 0)
      before = null;
    this.gqlObject_tmotd3$('revisions', listOf([this.gqlParam_fmz8iu$('first', void 0, first), this.gqlParam_fmz8iu$('last', void 0, last), this.gqlParam_fmz8iu$('after', void 0, after), this.gqlParam_fmz8iu$('before', void 0, before)]), new RevisionConnectionQueryBuilder(), builder);
  };
  RootQueryBuilder.prototype.tag_p1rp2o$ = function (id, builder) {
    this.gqlObject_tmotd3$('tag', listOf_0(this.gqlParam_fmz8iu$('id', void 0, id)), new TagQueryBuilder(), builder);
  };
  RootQueryBuilder.prototype.tags_p5kv2a$ = function (first, last, after, before, builder) {
    if (first === void 0)
      first = null;
    if (last === void 0)
      last = null;
    if (after === void 0)
      after = null;
    if (before === void 0)
      before = null;
    this.gqlObject_tmotd3$('tags', listOf([this.gqlParam_fmz8iu$('first', void 0, first), this.gqlParam_fmz8iu$('last', void 0, last), this.gqlParam_fmz8iu$('after', void 0, after), this.gqlParam_fmz8iu$('before', void 0, before)]), new TagConnectionQueryBuilder(), builder);
  };
  RootQueryBuilder.prototype.user_27mtl9$ = function (id, builder) {
    this.gqlObject_tmotd3$('user', listOf_0(this.gqlParam_fmz8iu$('id', void 0, id)), new UserQueryBuilder(), builder);
  };
  RootQueryBuilder.prototype.users_aysnpb$ = function (first, last, after, before, builder) {
    if (first === void 0)
      first = null;
    if (last === void 0)
      last = null;
    if (after === void 0)
      after = null;
    if (before === void 0)
      before = null;
    this.gqlObject_tmotd3$('users', listOf([this.gqlParam_fmz8iu$('first', void 0, first), this.gqlParam_fmz8iu$('last', void 0, last), this.gqlParam_fmz8iu$('after', void 0, after), this.gqlParam_fmz8iu$('before', void 0, before)]), new UserConnectionQueryBuilder(), builder);
  };
  RootQueryBuilder.prototype.viewer_6ovptx$ = function (builder) {
    this.gqlObject_tmotd3$('viewer', void 0, new UserQueryBuilder(), builder);
  };
  RootQueryBuilder.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'RootQueryBuilder',
    interfaces: [RootGraphQLQueryBuilder]
  };
  function TagConnectionQueryBuilder() {
    ConnectionQueryBuilder.call(this);
  }
  TagConnectionQueryBuilder.prototype.edges_gtjodg$ = function (builder) {
    this.gqlObject_tmotd3$('edges', void 0, new TagEdgeQueryBuilder(), builder);
  };
  TagConnectionQueryBuilder.prototype.nodes_ubor27$ = function (builder) {
    this.gqlObject_tmotd3$('nodes', void 0, new TagQueryBuilder(), builder);
  };
  TagConnectionQueryBuilder.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'TagConnectionQueryBuilder',
    interfaces: [ConnectionQueryBuilder]
  };
  function TagEdgeQueryBuilder() {
    EdgeQueryBuilder.call(this);
  }
  TagEdgeQueryBuilder.prototype.node_ubor27$ = function (builder) {
    this.gqlObject_tmotd3$('node', void 0, new TagQueryBuilder(), builder);
  };
  TagEdgeQueryBuilder.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'TagEdgeQueryBuilder',
    interfaces: [EdgeQueryBuilder]
  };
  function TagQueryBuilder() {
    GraphQLQueryBuilder.call(this);
    this.id_uir6yo$_0 = new BaseGraphQLQueryBuilder$gqlScalar(this, 'id');
    this.count_ionbiu$_0 = new BaseGraphQLQueryBuilder$gqlScalar(this, 'count');
    this.description_hpqgf7$_0 = new BaseGraphQLQueryBuilder$gqlScalar(this, 'description');
    this.link_51u2in$_0 = new BaseGraphQLQueryBuilder$gqlScalar(this, 'link');
    this.name_50vm40$_0 = new BaseGraphQLQueryBuilder$gqlScalar(this, 'name');
    this.slug_4xxgb4$_0 = new BaseGraphQLQueryBuilder$gqlScalar(this, 'slug');
    this.tagId_auukrg$_0 = new BaseGraphQLQueryBuilder$gqlScalar(this, 'tagId');
    this.termGroupId_xndgvf$_0 = new BaseGraphQLQueryBuilder$gqlScalar(this, 'termGroupId');
  }
  var TagQueryBuilder$id_metadata = new PropertyMetadata('id');
  Object.defineProperty(TagQueryBuilder.prototype, 'id', {
    get: function () {
      return this.id_uir6yo$_0.getValue_lrcp0p$(this, TagQueryBuilder$id_metadata);
    }
  });
  var TagQueryBuilder$count_metadata = new PropertyMetadata('count');
  Object.defineProperty(TagQueryBuilder.prototype, 'count', {
    get: function () {
      return this.count_ionbiu$_0.getValue_lrcp0p$(this, TagQueryBuilder$count_metadata);
    }
  });
  var TagQueryBuilder$description_metadata = new PropertyMetadata('description');
  Object.defineProperty(TagQueryBuilder.prototype, 'description', {
    get: function () {
      return this.description_hpqgf7$_0.getValue_lrcp0p$(this, TagQueryBuilder$description_metadata);
    }
  });
  var TagQueryBuilder$link_metadata = new PropertyMetadata('link');
  Object.defineProperty(TagQueryBuilder.prototype, 'link', {
    get: function () {
      return this.link_51u2in$_0.getValue_lrcp0p$(this, TagQueryBuilder$link_metadata);
    }
  });
  var TagQueryBuilder$name_metadata = new PropertyMetadata('name');
  Object.defineProperty(TagQueryBuilder.prototype, 'name', {
    get: function () {
      return this.name_50vm40$_0.getValue_lrcp0p$(this, TagQueryBuilder$name_metadata);
    }
  });
  var TagQueryBuilder$slug_metadata = new PropertyMetadata('slug');
  Object.defineProperty(TagQueryBuilder.prototype, 'slug', {
    get: function () {
      return this.slug_4xxgb4$_0.getValue_lrcp0p$(this, TagQueryBuilder$slug_metadata);
    }
  });
  var TagQueryBuilder$tagId_metadata = new PropertyMetadata('tagId');
  Object.defineProperty(TagQueryBuilder.prototype, 'tagId', {
    get: function () {
      return this.tagId_auukrg$_0.getValue_lrcp0p$(this, TagQueryBuilder$tagId_metadata);
    }
  });
  var TagQueryBuilder$termGroupId_metadata = new PropertyMetadata('termGroupId');
  Object.defineProperty(TagQueryBuilder.prototype, 'termGroupId', {
    get: function () {
      return this.termGroupId_xndgvf$_0.getValue_lrcp0p$(this, TagQueryBuilder$termGroupId_metadata);
    }
  });
  TagQueryBuilder.prototype.posts_y1ny3a$ = function (first, last, after, before, builder) {
    if (first === void 0)
      first = null;
    if (last === void 0)
      last = null;
    if (after === void 0)
      after = null;
    if (before === void 0)
      before = null;
    this.gqlObject_tmotd3$('posts', listOf([this.gqlParam_fmz8iu$('first', void 0, first), this.gqlParam_fmz8iu$('last', void 0, last), this.gqlParam_fmz8iu$('after', void 0, after), this.gqlParam_fmz8iu$('before', void 0, before)]), new PostConnectionQueryBuilder(), builder);
  };
  TagQueryBuilder.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'TagQueryBuilder',
    interfaces: [GraphQLQueryBuilder]
  };
  function UserConnectionQueryBuilder() {
    ConnectionQueryBuilder.call(this);
  }
  UserConnectionQueryBuilder.prototype.edges_gtjodg$ = function (builder) {
    this.gqlObject_tmotd3$('edges', void 0, new UserEdgeQueryBuilder(), builder);
  };
  UserConnectionQueryBuilder.prototype.nodes_ubor27$ = function (builder) {
    this.gqlObject_tmotd3$('nodes', void 0, new UserQueryBuilder(), builder);
  };
  UserConnectionQueryBuilder.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'UserConnectionQueryBuilder',
    interfaces: [ConnectionQueryBuilder]
  };
  function UserEdgeQueryBuilder() {
    EdgeQueryBuilder.call(this);
  }
  UserEdgeQueryBuilder.prototype.node_ubor27$ = function (builder) {
    this.gqlObject_tmotd3$('node', void 0, new UserQueryBuilder(), builder);
  };
  UserEdgeQueryBuilder.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'UserEdgeQueryBuilder',
    interfaces: [EdgeQueryBuilder]
  };
  function UserQueryBuilder() {
    GraphQLQueryBuilder.call(this);
    this.description_8a5bbk$_0 = new BaseGraphQLQueryBuilder$gqlScalar(this, 'description');
    this.email_ss73ww$_0 = new BaseGraphQLQueryBuilder$gqlScalar(this, 'email');
    this.firstName_4ns0vj$_0 = new BaseGraphQLQueryBuilder$gqlScalar(this, 'firstName');
    this.lastName_w5ifb$_0 = new BaseGraphQLQueryBuilder$gqlScalar(this, 'lastName');
    this.locale_7820vm$_0 = new BaseGraphQLQueryBuilder$gqlScalar(this, 'locale');
    this.name_va53st$_0 = new BaseGraphQLQueryBuilder$gqlScalar(this, 'name');
    this.nicename_19lutc$_0 = new BaseGraphQLQueryBuilder$gqlScalar(this, 'nicename');
    this.nickname_43vl6i$_0 = new BaseGraphQLQueryBuilder$gqlScalar(this, 'nickname');
    this.registeredDate_s3n17c$_0 = new BaseGraphQLQueryBuilder$gqlScalar(this, 'registeredDate');
    this.slug_vd39lp$_0 = new BaseGraphQLQueryBuilder$gqlScalar(this, 'slug');
    this.url_cqgpdv$_0 = new BaseGraphQLQueryBuilder$gqlScalar(this, 'url');
    this.userId_f95d9a$_0 = new BaseGraphQLQueryBuilder$gqlScalar(this, 'userId');
    this.username_qas0ha$_0 = new BaseGraphQLQueryBuilder$gqlScalar(this, 'username');
  }
  var UserQueryBuilder$description_metadata = new PropertyMetadata('description');
  Object.defineProperty(UserQueryBuilder.prototype, 'description', {
    get: function () {
      return this.description_8a5bbk$_0.getValue_lrcp0p$(this, UserQueryBuilder$description_metadata);
    }
  });
  var UserQueryBuilder$email_metadata = new PropertyMetadata('email');
  Object.defineProperty(UserQueryBuilder.prototype, 'email', {
    get: function () {
      return this.email_ss73ww$_0.getValue_lrcp0p$(this, UserQueryBuilder$email_metadata);
    }
  });
  var UserQueryBuilder$firstName_metadata = new PropertyMetadata('firstName');
  Object.defineProperty(UserQueryBuilder.prototype, 'firstName', {
    get: function () {
      return this.firstName_4ns0vj$_0.getValue_lrcp0p$(this, UserQueryBuilder$firstName_metadata);
    }
  });
  var UserQueryBuilder$lastName_metadata = new PropertyMetadata('lastName');
  Object.defineProperty(UserQueryBuilder.prototype, 'lastName', {
    get: function () {
      return this.lastName_w5ifb$_0.getValue_lrcp0p$(this, UserQueryBuilder$lastName_metadata);
    }
  });
  var UserQueryBuilder$locale_metadata = new PropertyMetadata('locale');
  Object.defineProperty(UserQueryBuilder.prototype, 'locale', {
    get: function () {
      return this.locale_7820vm$_0.getValue_lrcp0p$(this, UserQueryBuilder$locale_metadata);
    }
  });
  var UserQueryBuilder$name_metadata = new PropertyMetadata('name');
  Object.defineProperty(UserQueryBuilder.prototype, 'name', {
    get: function () {
      return this.name_va53st$_0.getValue_lrcp0p$(this, UserQueryBuilder$name_metadata);
    }
  });
  var UserQueryBuilder$nicename_metadata = new PropertyMetadata('nicename');
  Object.defineProperty(UserQueryBuilder.prototype, 'nicename', {
    get: function () {
      return this.nicename_19lutc$_0.getValue_lrcp0p$(this, UserQueryBuilder$nicename_metadata);
    }
  });
  var UserQueryBuilder$nickname_metadata = new PropertyMetadata('nickname');
  Object.defineProperty(UserQueryBuilder.prototype, 'nickname', {
    get: function () {
      return this.nickname_43vl6i$_0.getValue_lrcp0p$(this, UserQueryBuilder$nickname_metadata);
    }
  });
  var UserQueryBuilder$registeredDate_metadata = new PropertyMetadata('registeredDate');
  Object.defineProperty(UserQueryBuilder.prototype, 'registeredDate', {
    get: function () {
      return this.registeredDate_s3n17c$_0.getValue_lrcp0p$(this, UserQueryBuilder$registeredDate_metadata);
    }
  });
  var UserQueryBuilder$slug_metadata = new PropertyMetadata('slug');
  Object.defineProperty(UserQueryBuilder.prototype, 'slug', {
    get: function () {
      return this.slug_vd39lp$_0.getValue_lrcp0p$(this, UserQueryBuilder$slug_metadata);
    }
  });
  var UserQueryBuilder$url_metadata = new PropertyMetadata('url');
  Object.defineProperty(UserQueryBuilder.prototype, 'url', {
    get: function () {
      return this.url_cqgpdv$_0.getValue_lrcp0p$(this, UserQueryBuilder$url_metadata);
    }
  });
  var UserQueryBuilder$userId_metadata = new PropertyMetadata('userId');
  Object.defineProperty(UserQueryBuilder.prototype, 'userId', {
    get: function () {
      return this.userId_f95d9a$_0.getValue_lrcp0p$(this, UserQueryBuilder$userId_metadata);
    }
  });
  var UserQueryBuilder$username_metadata = new PropertyMetadata('username');
  Object.defineProperty(UserQueryBuilder.prototype, 'username', {
    get: function () {
      return this.username_qas0ha$_0.getValue_lrcp0p$(this, UserQueryBuilder$username_metadata);
    }
  });
  UserQueryBuilder.prototype.avatar_w825sj$ = function (builder) {
    this.gqlObject_tmotd3$('avatar', void 0, new AvatarQueryBuilder(), builder);
  };
  UserQueryBuilder.prototype.comments_tni6wt$ = function (first, last, after, before, builder) {
    if (first === void 0)
      first = null;
    if (last === void 0)
      last = null;
    if (after === void 0)
      after = null;
    if (before === void 0)
      before = null;
    this.gqlObject_tmotd3$('comments', listOf([this.gqlParam_fmz8iu$('first', void 0, first), this.gqlParam_fmz8iu$('last', void 0, last), this.gqlParam_fmz8iu$('after', void 0, after), this.gqlParam_fmz8iu$('before', void 0, before)]), new CommentConnectionQueryBuilder(), builder);
  };
  UserQueryBuilder.prototype.pages_g3vtx7$ = function (first, last, after, before, builder) {
    if (first === void 0)
      first = null;
    if (last === void 0)
      last = null;
    if (after === void 0)
      after = null;
    if (before === void 0)
      before = null;
    this.gqlObject_tmotd3$('pages', listOf([this.gqlParam_fmz8iu$('first', void 0, first), this.gqlParam_fmz8iu$('last', void 0, last), this.gqlParam_fmz8iu$('after', void 0, after), this.gqlParam_fmz8iu$('before', void 0, before)]), new PageConnectionQueryBuilder(), builder);
  };
  UserQueryBuilder.prototype.posts_y1ny3a$ = function (first, last, after, before, builder) {
    if (first === void 0)
      first = null;
    if (last === void 0)
      last = null;
    if (after === void 0)
      after = null;
    if (before === void 0)
      before = null;
    this.gqlObject_tmotd3$('posts', listOf([this.gqlParam_fmz8iu$('first', void 0, first), this.gqlParam_fmz8iu$('last', void 0, last), this.gqlParam_fmz8iu$('after', void 0, after), this.gqlParam_fmz8iu$('before', void 0, before)]), new PostConnectionQueryBuilder(), builder);
  };
  UserQueryBuilder.prototype.revisions_nce2z5$ = function (first, last, after, before, builder) {
    if (first === void 0)
      first = null;
    if (last === void 0)
      last = null;
    if (after === void 0)
      after = null;
    if (before === void 0)
      before = null;
    this.gqlObject_tmotd3$('revisions', listOf([this.gqlParam_fmz8iu$('first', void 0, first), this.gqlParam_fmz8iu$('last', void 0, last), this.gqlParam_fmz8iu$('after', void 0, after), this.gqlParam_fmz8iu$('before', void 0, before)]), new RevisionConnectionQueryBuilder(), builder);
  };
  UserQueryBuilder.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'UserQueryBuilder',
    interfaces: [GraphQLQueryBuilder]
  };
  function WPPageInfoQueryBuilder() {
    GraphQLQueryBuilder.call(this);
    this.endCursor_x7chf4$_0 = new BaseGraphQLQueryBuilder$gqlScalar(this, 'endCursor');
    this.hasNextPage_j0hr2z$_0 = new BaseGraphQLQueryBuilder$gqlScalar(this, 'hasNextPage');
    this.hasPreviousPage_jyxkm9$_0 = new BaseGraphQLQueryBuilder$gqlScalar(this, 'hasPreviousPage');
    this.startCursor_4j0w2f$_0 = new BaseGraphQLQueryBuilder$gqlScalar(this, 'startScalar');
  }
  var WPPageInfoQueryBuilder$endCursor_metadata = new PropertyMetadata('endCursor');
  Object.defineProperty(WPPageInfoQueryBuilder.prototype, 'endCursor', {
    get: function () {
      return this.endCursor_x7chf4$_0.getValue_lrcp0p$(this, WPPageInfoQueryBuilder$endCursor_metadata);
    }
  });
  var WPPageInfoQueryBuilder$hasNextPage_metadata = new PropertyMetadata('hasNextPage');
  Object.defineProperty(WPPageInfoQueryBuilder.prototype, 'hasNextPage', {
    get: function () {
      return this.hasNextPage_j0hr2z$_0.getValue_lrcp0p$(this, WPPageInfoQueryBuilder$hasNextPage_metadata);
    }
  });
  var WPPageInfoQueryBuilder$hasPreviousPage_metadata = new PropertyMetadata('hasPreviousPage');
  Object.defineProperty(WPPageInfoQueryBuilder.prototype, 'hasPreviousPage', {
    get: function () {
      return this.hasPreviousPage_jyxkm9$_0.getValue_lrcp0p$(this, WPPageInfoQueryBuilder$hasPreviousPage_metadata);
    }
  });
  var WPPageInfoQueryBuilder$startCursor_metadata = new PropertyMetadata('startCursor');
  Object.defineProperty(WPPageInfoQueryBuilder.prototype, 'startCursor', {
    get: function () {
      return this.startCursor_4j0w2f$_0.getValue_lrcp0p$(this, WPPageInfoQueryBuilder$startCursor_metadata);
    }
  });
  WPPageInfoQueryBuilder.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'WPPageInfoQueryBuilder',
    interfaces: [GraphQLQueryBuilder]
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
  function PostViewModelRepository() {
  }
  PostViewModelRepository.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'PostViewModelRepository',
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
    return new TopNavbarViewModel('chRyNaN Codes', 'chrynan.codes', new NavigationMenuViewModel('TopNavBar', listOf_0(new NavigationMenuItemViewModel('Test Link', 'chrynan.codes'))));
  };
  MainNavigationItemRepositorySource.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'MainNavigationItemRepositorySource',
    interfaces: [MainNavigationItemRepository]
  };
  function PostViewModelRepositorySource() {
  }
  PostViewModelRepositorySource.prototype.getMostRecentPosts = function (continuation) {
    return listOf([new PostItemViewModel('Test Title', 'Test Subtitle', 'This is the excerpt', null, 'Today', 'Me', '', 'chrynan.codes', 'Read More'), new PostItemViewModel('Another Test Title', 'Another Test Subtitle', 'This is another the excerpt', null, 'Yesterday', 'Someone', '', 'chrynan.codes', 'Read More')]);
  };
  PostViewModelRepositorySource.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'PostViewModelRepositorySource',
    interfaces: [PostViewModelRepository]
  };
  function categoryListItemFragment$lambda$lambda($receiver) {
    $receiver.id;
    $receiver.categoryId;
    $receiver.link;
    $receiver.name;
    $receiver.description;
    return Unit;
  }
  function categoryListItemFragment$lambda() {
    return fragment().on_a9kq36$(categoryListItemFragment$lambda$lambda);
  }
  var categoryListItemFragment;
  function get_categoryListItemFragment() {
    return categoryListItemFragment.value;
  }
  function revisionListItemFragment$lambda$lambda($receiver) {
    $receiver.id;
    $receiver.revisionId;
    $receiver.link;
    $receiver.uri;
    $receiver.date;
    $receiver.title_jom9h$();
    $receiver.excerpt_jom9h$();
    return Unit;
  }
  function revisionListItemFragment$lambda() {
    return fragment().on_a9kq36$(revisionListItemFragment$lambda$lambda);
  }
  var revisionListItemFragment;
  function get_revisionListItemFragment() {
    return revisionListItemFragment.value;
  }
  function tagListItemFragment$lambda$lambda($receiver) {
    $receiver.id;
    $receiver.tagId;
    $receiver.link;
    $receiver.name;
    $receiver.description;
    return Unit;
  }
  function tagListItemFragment$lambda() {
    return fragment().on_a9kq36$(tagListItemFragment$lambda$lambda);
  }
  var tagListItemFragment;
  function get_tagListItemFragment() {
    return tagListItemFragment.value;
  }
  function postListItemFragment$lambda$lambda$lambda$lambda($receiver) {
    rangeTo($receiver, get_tagListItemFragment());
    return Unit;
  }
  function postListItemFragment$lambda$lambda$lambda($receiver) {
    $receiver.nodes_ubor27$(postListItemFragment$lambda$lambda$lambda$lambda);
    return Unit;
  }
  function postListItemFragment$lambda$lambda$lambda$lambda_0($receiver) {
    rangeTo($receiver, get_revisionListItemFragment());
    return Unit;
  }
  function postListItemFragment$lambda$lambda$lambda_0($receiver) {
    $receiver.nodes_ubor27$(postListItemFragment$lambda$lambda$lambda$lambda_0);
    return Unit;
  }
  function postListItemFragment$lambda$lambda$lambda$lambda_1($receiver) {
    rangeTo($receiver, get_categoryListItemFragment());
    return Unit;
  }
  function postListItemFragment$lambda$lambda$lambda_1($receiver) {
    $receiver.nodes_ubor27$(postListItemFragment$lambda$lambda$lambda$lambda_1);
    return Unit;
  }
  function postListItemFragment$lambda$lambda($receiver) {
    $receiver.id;
    $receiver.commentCount;
    $receiver.date;
    $receiver.link;
    $receiver.uri;
    $receiver.title_jom9h$();
    $receiver.excerpt_jom9h$();
    $receiver.tags_p5kv2a$(void 0, void 0, void 0, void 0, postListItemFragment$lambda$lambda$lambda);
    $receiver.revisions_nce2z5$(void 0, void 0, void 0, void 0, postListItemFragment$lambda$lambda$lambda_0);
    $receiver.categories_mjfr2k$(void 0, void 0, void 0, void 0, postListItemFragment$lambda$lambda$lambda_1);
    return Unit;
  }
  function postListItemFragment$lambda() {
    return fragment().on_a9kq36$(postListItemFragment$lambda$lambda);
  }
  var postListItemFragment;
  function get_postListItemFragment() {
    return postListItemFragment.value;
  }
  function pageInfoFragment$lambda$lambda($receiver) {
    $receiver.endCursor;
    $receiver.startCursor;
    $receiver.hasNextPage;
    $receiver.hasPreviousPage;
    return Unit;
  }
  function pageInfoFragment$lambda() {
    return fragment().on_a9kq36$(pageInfoFragment$lambda$lambda);
  }
  var pageInfoFragment;
  function get_pageInfoFragment() {
    return pageInfoFragment.value;
  }
  function post$lambda($receiver) {
    return Unit;
  }
  function executeWith$lambda(this$executeWith) {
    return function ($receiver) {
      header_0($receiver, 'Content-Type', 'application/json');
      $receiver.body = new GraphQLQueryBody(this$executeWith.toEncodedString());
      return Unit;
    };
  }
  function PostRepositorySource(httpClient) {
    this.httpClient_0 = httpClient;
  }
  function PostRepositorySource$getPostListItemsAfter$lambda$lambda$lambda($receiver) {
    rangeTo($receiver, get_pageInfoFragment());
    return Unit;
  }
  function PostRepositorySource$getPostListItemsAfter$lambda$lambda$lambda$lambda($receiver) {
    rangeTo($receiver, get_postListItemFragment());
    return Unit;
  }
  function PostRepositorySource$getPostListItemsAfter$lambda$lambda$lambda_0($receiver) {
    $receiver.cursor;
    $receiver.node_ubor27$(PostRepositorySource$getPostListItemsAfter$lambda$lambda$lambda$lambda);
    return Unit;
  }
  function PostRepositorySource$getPostListItemsAfter$lambda$lambda$lambda_1($receiver) {
    rangeTo($receiver, get_postListItemFragment());
    return Unit;
  }
  function PostRepositorySource$getPostListItemsAfter$lambda$lambda($receiver) {
    $receiver.pageInfo_r8166o$(PostRepositorySource$getPostListItemsAfter$lambda$lambda$lambda);
    $receiver.edges_gtjodg$(PostRepositorySource$getPostListItemsAfter$lambda$lambda$lambda_0);
    $receiver.nodes_ubor27$(PostRepositorySource$getPostListItemsAfter$lambda$lambda$lambda_1);
    return Unit;
  }
  function PostRepositorySource$getPostListItemsAfter$lambda(closure$first, closure$after) {
    return function ($receiver) {
      $receiver.posts_y1ny3a$(closure$first, void 0, closure$after, void 0, PostRepositorySource$getPostListItemsAfter$lambda$lambda);
      return Unit;
    };
  }
  function Coroutine$getPostListItemsAfter_19mbxw$($this, first_0, after_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.$this = $this;
    this.local$first = first_0;
    this.local$after = after_0;
  }
  Coroutine$getPostListItemsAfter_19mbxw$.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$getPostListItemsAfter_19mbxw$.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$getPostListItemsAfter_19mbxw$.prototype.constructor = Coroutine$getPostListItemsAfter_19mbxw$;
  Coroutine$getPostListItemsAfter_19mbxw$.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            var tmp$;
            var query = query_0(PostRepositorySource$getPostListItemsAfter$lambda(this.local$first, this.local$after));
            console.log('executeWith = ' + query.toDecodedString());
            tmp$ = this.$this.httpClient_0;
            var baseUrl = 'https://chrynan.codes';
            var host_0;
            var body_0;
            host_0 = 'localhost';
            body_0 = utils.EmptyContent;
            var $receiver_1 = new HttpRequestBuilder_init();
            url($receiver_1, 'http', host_0, 0, '/');
            $receiver_1.method = HttpMethod.Companion.Post;
            $receiver_1.body = body_0;
            takeFrom($receiver_1.url, baseUrl);
            executeWith$lambda(query)($receiver_1);
            this.state_0 = 2;
            this.result_0 = call(tmp$, $receiver_1, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            var tmp$_0;
            this.state_0 = 3;
            this.result_0 = this.result_0.receive_jo9acv$(new TypeInfo_init(getKClass(PostListItemConnection), call_0.JsType), this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 3:
            this.result_0 = Kotlin.isType(tmp$_0 = this.result_0, PostListItemConnection) ? tmp$_0 : throwCCE();
            this.result_0;
            return this.result_0;
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
  PostRepositorySource.prototype.getPostListItemsAfter_19mbxw$ = function (first_0, after_0, continuation_0, suspended) {
    var instance = new Coroutine$getPostListItemsAfter_19mbxw$(this, first_0, after_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  };
  function PostRepositorySource$getPostListItemsBefore$lambda$lambda$lambda($receiver) {
    rangeTo($receiver, get_pageInfoFragment());
    return Unit;
  }
  function PostRepositorySource$getPostListItemsBefore$lambda$lambda$lambda$lambda($receiver) {
    rangeTo($receiver, get_postListItemFragment());
    return Unit;
  }
  function PostRepositorySource$getPostListItemsBefore$lambda$lambda$lambda_0($receiver) {
    $receiver.cursor;
    $receiver.node_ubor27$(PostRepositorySource$getPostListItemsBefore$lambda$lambda$lambda$lambda);
    return Unit;
  }
  function PostRepositorySource$getPostListItemsBefore$lambda$lambda$lambda_1($receiver) {
    rangeTo($receiver, get_postListItemFragment());
    return Unit;
  }
  function PostRepositorySource$getPostListItemsBefore$lambda$lambda($receiver) {
    $receiver.pageInfo_r8166o$(PostRepositorySource$getPostListItemsBefore$lambda$lambda$lambda);
    $receiver.edges_gtjodg$(PostRepositorySource$getPostListItemsBefore$lambda$lambda$lambda_0);
    $receiver.nodes_ubor27$(PostRepositorySource$getPostListItemsBefore$lambda$lambda$lambda_1);
    return Unit;
  }
  function PostRepositorySource$getPostListItemsBefore$lambda(closure$last, closure$before) {
    return function ($receiver) {
      $receiver.posts_y1ny3a$(void 0, closure$last, void 0, closure$before, PostRepositorySource$getPostListItemsBefore$lambda$lambda);
      return Unit;
    };
  }
  function Coroutine$getPostListItemsBefore_19mbxw$($this, last_0, before_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.$this = $this;
    this.local$last = last_0;
    this.local$before = before_0;
  }
  Coroutine$getPostListItemsBefore_19mbxw$.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$getPostListItemsBefore_19mbxw$.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$getPostListItemsBefore_19mbxw$.prototype.constructor = Coroutine$getPostListItemsBefore_19mbxw$;
  Coroutine$getPostListItemsBefore_19mbxw$.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            var tmp$;
            var query = query_0(PostRepositorySource$getPostListItemsBefore$lambda(this.local$last, this.local$before));
            tmp$ = this.$this.httpClient_0;
            var baseUrl = 'https://chrynan.codes';
            var host_0;
            var body_0;
            host_0 = 'localhost';
            body_0 = utils.EmptyContent;
            var $receiver_1 = new HttpRequestBuilder_init();
            url($receiver_1, 'http', host_0, 0, '/');
            $receiver_1.method = HttpMethod.Companion.Post;
            $receiver_1.body = body_0;
            takeFrom($receiver_1.url, baseUrl);
            executeWith$lambda(query)($receiver_1);
            this.state_0 = 2;
            this.result_0 = call(tmp$, $receiver_1, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            var tmp$_0;
            this.state_0 = 3;
            this.result_0 = this.result_0.receive_jo9acv$(new TypeInfo_init(getKClass(PostListItemConnection), call_0.JsType), this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 3:
            this.result_0 = Kotlin.isType(tmp$_0 = this.result_0, PostListItemConnection) ? tmp$_0 : throwCCE();
            this.result_0;
            return this.result_0;
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
  PostRepositorySource.prototype.getPostListItemsBefore_19mbxw$ = function (last_0, before_0, continuation_0, suspended) {
    var instance = new Coroutine$getPostListItemsBefore_19mbxw$(this, last_0, before_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
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
    return header_1($receiver, void 0, TopNavbarTemplate$layout$lambda(viewModel));
  };
  TopNavbarTemplate.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'TopNavbarTemplate',
    interfaces: [Template]
  };
  function appendPage($receiver, page) {
    var node = page.onCreateLayout_3mrk8e$(get_create(document));
    $receiver.appendChild(node);
  }
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
  function GraphQLQueryBody(query, operationName, variables) {
    if (operationName === void 0)
      operationName = null;
    if (variables === void 0)
      variables = null;
    this.query = query;
    this.operationName = operationName;
    this.variables = variables;
  }
  GraphQLQueryBody.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'GraphQLQueryBody',
    interfaces: []
  };
  function post$lambda_0($receiver) {
    return Unit;
  }
  function executeWith$lambda_0(this$executeWith) {
    return function ($receiver) {
      header_0($receiver, 'Content-Type', 'application/json');
      $receiver.body = new GraphQLQueryBody(this$executeWith.toEncodedString());
      return Unit;
    };
  }
  function Coroutine$executeWith(R_0_0, isR_0, $receiver_0, baseUrl_0, httpClient_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$R_0 = R_0_0;
    this.local$isR = isR_0;
    this.local$$receiver = $receiver_0;
    this.local$baseUrl = baseUrl_0;
    this.local$httpClient = httpClient_0;
  }
  Coroutine$executeWith.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$executeWith.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$executeWith.prototype.constructor = Coroutine$executeWith;
  Coroutine$executeWith.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            var host_0_0;
            var body_0_0;
            host_0_0 = 'localhost';
            body_0_0 = utils.EmptyContent;
            var $receiver_1_0 = new HttpRequestBuilder_init();
            url($receiver_1_0, 'http', host_0_0, 0, '/');
            $receiver_1_0.method = HttpMethod.Companion.Post;
            $receiver_1_0.body = body_0_0;
            takeFrom($receiver_1_0.url, this.local$baseUrl);
            executeWith$lambda_0(this.local$$receiver)($receiver_1_0);
            this.state_0 = 2;
            this.result_0 = call(this.local$httpClient, $receiver_1_0, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            var tmp$_0_0;
            this.state_0 = 3;
            this.result_0 = this.result_0.receive_jo9acv$(new TypeInfo_init(getKClass(this.local$R_0), call_0.JsType), this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 3:
            this.result_0 = this.local$isR(tmp$_0_0 = this.result_0) ? tmp$_0_0 : throwCCE();
            this.result_0;
            return this.result_0;
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
  function executeWith(R_0_0, isR_0, $receiver_0, baseUrl_0, httpClient_0, continuation_0, suspended) {
    var instance = new Coroutine$executeWith(R_0_0, isR_0, $receiver_0, baseUrl_0, httpClient_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  }
  defineInlineFunction('client.com.chrynan.sitetheme.web.executeWith_mil60l$', wrapFunction(function () {
    var header = _.$$importsForInline$$['ktor-client-core'].io.ktor.client.request.header_xadl6p$;
    var GraphQLQueryBody_init = _.com.chrynan.sitetheme.web.GraphQLQueryBody;
    var Unit = Kotlin.kotlin.Unit;
    var takeFrom = _.$$importsForInline$$['ktor-client-core'].$$importsForInline$$['ktor-http'].io.ktor.http.takeFrom_jl1sg7$;
    var utils = _.$$importsForInline$$['ktor-client-core'].io.ktor.client.utils;
    var url = _.$$importsForInline$$['ktor-client-core'].io.ktor.client.request.url_3rzbk2$;
    var HttpMethod = _.$$importsForInline$$['ktor-client-core'].$$importsForInline$$['ktor-http'].io.ktor.http.HttpMethod;
    var HttpRequestBuilder_init = _.$$importsForInline$$['ktor-client-core'].io.ktor.client.request.HttpRequestBuilder;
    var call = _.$$importsForInline$$['ktor-client-core'].io.ktor.client.call.call_30bfl5$;
    var throwCCE = Kotlin.throwCCE;
    var getKClass = Kotlin.getKClass;
    var call_0 = _.$$importsForInline$$['ktor-client-core'].io.ktor.client.call;
    var TypeInfo_init = _.$$importsForInline$$['ktor-client-core'].io.ktor.client.call.TypeInfo;
    function post$lambda($receiver) {
      return Unit;
    }
    function executeWith$lambda(this$executeWith) {
      return function ($receiver) {
        header($receiver, 'Content-Type', 'application/json');
        $receiver.body = new GraphQLQueryBody_init(this$executeWith.toEncodedString());
        return Unit;
      };
    }
    return function (R_0, isR, $receiver, baseUrl, httpClient, continuation) {
      var host_0_0;
      var body_0_0;
      host_0_0 = 'localhost';
      body_0_0 = utils.EmptyContent;
      var $receiver_1_0 = new HttpRequestBuilder_init();
      url($receiver_1_0, 'http', host_0_0, 0, '/');
      $receiver_1_0.method = HttpMethod.Companion.Post;
      $receiver_1_0.body = body_0_0;
      takeFrom($receiver_1_0.url, baseUrl);
      executeWith$lambda($receiver)($receiver_1_0);
      Kotlin.suspendCall(call(httpClient, $receiver_1_0, Kotlin.coroutineReceiver()));
      var tmp$_0_0;
      Kotlin.suspendCall(Kotlin.coroutineResult(Kotlin.coroutineReceiver()).receive_jo9acv$(new TypeInfo_init(getKClass(R_0), call_0.JsType), Kotlin.coroutineReceiver()));
      Kotlin.setCoroutineResult(isR(tmp$_0_0 = Kotlin.coroutineResult(Kotlin.coroutineReceiver())) ? tmp$_0_0 : throwCCE(), Kotlin.coroutineReceiver());
      Kotlin.coroutineResult(Kotlin.coroutineReceiver());
      return Kotlin.coroutineResult(Kotlin.coroutineReceiver());
    };
  }));
  var package$com = _.com || (_.com = {});
  var package$chrynan = package$com.chrynan || (package$com.chrynan = {});
  var package$sitetheme = package$chrynan.sitetheme || (package$chrynan.sitetheme = {});
  package$sitetheme.Application = Application;
  package$sitetheme.main = main_0;
  $$importsForInline$$.locator = $module$locator;
  package$sitetheme.SiteApplication = SiteApplication;
  var package$binder = package$sitetheme.binder || (package$sitetheme.binder = {});
  package$binder.HeaderFooterBinder = HeaderFooterBinder;
  package$binder.HomeBinder = HomeBinder;
  package$binder.NotFoundBinder = NotFoundBinder;
  var package$di = package$sitetheme.di || (package$sitetheme.di = {});
  var package$module = package$di.module || (package$di.module = {});
  package$module.ApplicationModule = ApplicationModule;
  package$module.HomePageModule = HomePageModule;
  Object.defineProperty(package$module, 'webModule', {
    get: function () {
      return webModule;
    }
  });
  Object.defineProperty(package$module, 'repositoryModule', {
    get: function () {
      return repositoryModule;
    }
  });
  Object.defineProperty(package$module, 'navigatorModule', {
    get: function () {
      return navigatorModule;
    }
  });
  Object.defineProperty(package$module, 'applicationModule', {
    get: function () {
      return applicationModule;
    }
  });
  package$module.homePageModule_2i7uyz$ = homePageModule;
  package$module.NavigatorModule = NavigatorModule;
  package$module.RepositoryModule = RepositoryModule;
  package$module.WebModule = WebModule;
  var package$source = package$module.source || (package$module.source = {});
  package$source.ApplicationModuleSource = ApplicationModuleSource;
  package$source.HomePageModuleSource = HomePageModuleSource;
  package$source.NavigatorModuleSource = NavigatorModuleSource;
  package$source.RepositoryModuleSource = RepositoryModuleSource;
  package$source.WebModuleSource = WebModuleSource;
  var package$mapper = package$sitetheme.mapper || (package$sitetheme.mapper = {});
  package$mapper.Mapper = Mapper;
  var package$navigator = package$sitetheme.navigator || (package$sitetheme.navigator = {});
  package$navigator.Navigator = Navigator;
  package$navigator.NavigatorSource = NavigatorSource;
  Object.defineProperty(package$navigator, 'NavigatorURIs', {
    get: NavigatorURIs_getInstance
  });
  package$navigator.startAppOn_q490zi$ = startAppOn;
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
  var package$query = package$sitetheme.query || (package$sitetheme.query = {});
  package$query.AvatarQueryBuilder = AvatarQueryBuilder;
  package$query.CategoryConnectionQueryBuilder = CategoryConnectionQueryBuilder;
  package$query.CategoryEdgeQueryBuilder = CategoryEdgeQueryBuilder;
  package$query.CategoryQueryBuilder = CategoryQueryBuilder;
  package$query.CommentConnectionQueryBuilder = CommentConnectionQueryBuilder;
  package$query.CommentEdgeQueryBuilder = CommentEdgeQueryBuilder;
  package$query.CommentQueryBuilder = CommentQueryBuilder;
  package$query.ConnectionQueryBuilder = ConnectionQueryBuilder;
  package$query.EdgeQueryBuilder = EdgeQueryBuilder;
  package$query.MenuConnectionQueryBuilder = MenuConnectionQueryBuilder;
  package$query.MenuEdgeQueryBuilder = MenuEdgeQueryBuilder;
  package$query.MenuItemConnectionQueryBuilder = MenuItemConnectionQueryBuilder;
  package$query.MenuItemEdgeQueryBuilder = MenuItemEdgeQueryBuilder;
  package$query.MenuItemQueryBuilder = MenuItemQueryBuilder;
  package$query.MenuQueryBuilder = MenuQueryBuilder;
  package$query.PageConnectionQueryBuilder = PageConnectionQueryBuilder;
  package$query.PageEdgeQueryBuilder = PageEdgeQueryBuilder;
  package$query.PageQueryBuilder = PageQueryBuilder;
  package$query.PostConnectionQueryBuilder = PostConnectionQueryBuilder;
  package$query.PostEdgeQueryBuilder = PostEdgeQueryBuilder;
  package$query.PostQueryBuilder = PostQueryBuilder;
  package$query.query_kzkesc$ = query_0;
  package$query.RevisionConnectionQueryBuilder = RevisionConnectionQueryBuilder;
  package$query.RevisionEdgeQueryBuilder = RevisionEdgeQueryBuilder;
  package$query.RevisionQueryBuilder = RevisionQueryBuilder;
  package$query.RootQueryBuilder = RootQueryBuilder;
  package$query.TagConnectionQueryBuilder = TagConnectionQueryBuilder;
  package$query.TagEdgeQueryBuilder = TagEdgeQueryBuilder;
  package$query.TagQueryBuilder = TagQueryBuilder;
  package$query.UserConnectionQueryBuilder = UserConnectionQueryBuilder;
  package$query.UserEdgeQueryBuilder = UserEdgeQueryBuilder;
  package$query.UserQueryBuilder = UserQueryBuilder;
  package$query.WPPageInfoQueryBuilder = WPPageInfoQueryBuilder;
  var package$repository = package$sitetheme.repository || (package$sitetheme.repository = {});
  package$repository.FooterItemRepository = FooterItemRepository;
  package$repository.MainNavigationItemRepository = MainNavigationItemRepository;
  package$repository.PostViewModelRepository = PostViewModelRepository;
  var package$source_0 = package$repository.source || (package$repository.source = {});
  package$source_0.FooterItemRepositorySource = FooterItemRepositorySource;
  package$source_0.MainNavigationItemRepositorySource = MainNavigationItemRepositorySource;
  package$source_0.PostViewModelRepositorySource = PostViewModelRepositorySource;
  var package$source_1 = package$sitetheme.source || (package$sitetheme.source = {});
  Object.defineProperty(package$source_1, 'categoryListItemFragment', {
    get: get_categoryListItemFragment
  });
  Object.defineProperty(package$source_1, 'revisionListItemFragment', {
    get: get_revisionListItemFragment
  });
  Object.defineProperty(package$source_1, 'tagListItemFragment', {
    get: get_tagListItemFragment
  });
  Object.defineProperty(package$source_1, 'postListItemFragment', {
    get: get_postListItemFragment
  });
  Object.defineProperty(package$source_1, 'pageInfoFragment', {
    get: get_pageInfoFragment
  });
  $$importsForInline$$.client = _;
  package$source_1.PostRepositorySource = PostRepositorySource;
  var package$templates = package$sitetheme.templates || (package$sitetheme.templates = {});
  package$templates.FooterTemplate = FooterTemplate;
  package$templates.HomeTemplate = HomeTemplate;
  package$templates.PostItemTemplate = PostItemTemplate;
  package$templates.Template = Template;
  package$templates.TopNavbarTemplate = TopNavbarTemplate;
  var package$utils = package$sitetheme.utils || (package$sitetheme.utils = {});
  package$utils.appendPage_adiukm$ = appendPage;
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
  var package$web = package$sitetheme.web || (package$sitetheme.web = {});
  package$web.GraphQLQueryBody = GraphQLQueryBody;
  $$importsForInline$$['ktor-client-core'] = $module$ktor_client_core;
  Object.defineProperty(HeaderFooterPresenter.prototype, 'coroutineContext', Object.getOwnPropertyDescriptor(Presenter.prototype, 'coroutineContext'));
  webModule = new WebModuleSource();
  repositoryModule = new RepositoryModuleSource(webModule);
  navigatorModule = new NavigatorModuleSource();
  applicationModule = new ApplicationModuleSource(webModule, repositoryModule, navigatorModule);
  categoryListItemFragment = lazy(categoryListItemFragment$lambda);
  revisionListItemFragment = lazy(revisionListItemFragment$lambda);
  tagListItemFragment = lazy(tagListItemFragment$lambda);
  postListItemFragment = lazy(postListItemFragment$lambda);
  pageInfoFragment = lazy(pageInfoFragment$lambda);
  main_0();
  Kotlin.defineModule('client', _);
  return _;
}(module.exports, require('kotlin'), require('locator'), require('ktor-client-core'), require('ktor-client-json'), require('ktor-client-logging'), require('kotlinx-html-js'), require('kotlinx-coroutines-core'), require('graphql-query'), require('common')));

//# sourceMappingURL=client.js.map
