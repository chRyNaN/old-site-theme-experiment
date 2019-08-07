if (typeof kotlin === 'undefined') {
  throw new Error("Error loading module 'common'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'common'.");
}
var common = function (_, Kotlin) {
  'use strict';
  var L1 = Kotlin.Long.ONE;
  var Kind_OBJECT = Kotlin.Kind.OBJECT;
  var Kind_CLASS = Kotlin.Kind.CLASS;
  var Kind_INTERFACE = Kotlin.Kind.INTERFACE;
  var emptyList = Kotlin.kotlin.collections.emptyList_287e2$;
  var Enum = Kotlin.kotlin.Enum;
  var throwISE = Kotlin.throwISE;
  PostObjectFieldFormat.prototype = Object.create(Enum.prototype);
  PostObjectFieldFormat.prototype.constructor = PostObjectFieldFormat;
  function ChrynanCodesTheme() {
    ChrynanCodesTheme$Companion_getInstance();
    this.name_elt123$_0 = ChrynanCodesTheme$Companion_getInstance().NAME;
    this.rootLocation_omboxb$_0 = ChrynanCodesTheme$Companion_getInstance().ROOT_LOCATION;
    this.location_y25u41$_0 = ChrynanCodesTheme$Companion_getInstance().LOCATION;
    this.versionCode_5kjqax$_0 = ChrynanCodesTheme$Companion_getInstance().VERSION_CODE;
    this.versionName_5qcpor$_0 = ChrynanCodesTheme$Companion_getInstance().VERSION_NAME;
  }
  function ChrynanCodesTheme$Companion() {
    ChrynanCodesTheme$Companion_instance = this;
    this.NAME = 'chRyNaN.codes';
    this.ROOT_LOCATION = 'Theme';
    this.LOCATION = '';
    this.VERSION_CODE = L1;
    this.VERSION_NAME = '1.0.0';
  }
  ChrynanCodesTheme$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var ChrynanCodesTheme$Companion_instance = null;
  function ChrynanCodesTheme$Companion_getInstance() {
    if (ChrynanCodesTheme$Companion_instance === null) {
      new ChrynanCodesTheme$Companion();
    }
    return ChrynanCodesTheme$Companion_instance;
  }
  Object.defineProperty(ChrynanCodesTheme.prototype, 'name', {
    get: function () {
      return this.name_elt123$_0;
    }
  });
  Object.defineProperty(ChrynanCodesTheme.prototype, 'rootLocation', {
    get: function () {
      return this.rootLocation_omboxb$_0;
    }
  });
  Object.defineProperty(ChrynanCodesTheme.prototype, 'location', {
    get: function () {
      return this.location_y25u41$_0;
    }
  });
  Object.defineProperty(ChrynanCodesTheme.prototype, 'versionCode', {
    get: function () {
      return this.versionCode_5kjqax$_0;
    }
  });
  Object.defineProperty(ChrynanCodesTheme.prototype, 'versionName', {
    get: function () {
      return this.versionName_5qcpor$_0;
    }
  });
  ChrynanCodesTheme.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ChrynanCodesTheme',
    interfaces: [SiteTheme]
  };
  function SiteTheme() {
  }
  SiteTheme.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'SiteTheme',
    interfaces: []
  };
  function AvatarListItem(default_0, forceDefault, foundAvatar, height, width, url, size) {
    if (default_0 === void 0)
      default_0 = null;
    if (forceDefault === void 0)
      forceDefault = null;
    if (foundAvatar === void 0)
      foundAvatar = null;
    if (height === void 0)
      height = null;
    if (width === void 0)
      width = null;
    if (url === void 0)
      url = null;
    if (size === void 0)
      size = null;
    this.default = default_0;
    this.forceDefault = forceDefault;
    this.foundAvatar = foundAvatar;
    this.height = height;
    this.width = width;
    this.url = url;
    this.size = size;
  }
  AvatarListItem.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'AvatarListItem',
    interfaces: []
  };
  function CategoryListItem(id, categoryId, link, name, description) {
    this.id_hzg0l9$_0 = id;
    this.categoryId = categoryId;
    this.link = link;
    this.name = name;
    this.description = description;
  }
  Object.defineProperty(CategoryListItem.prototype, 'id', {
    get: function () {
      return this.id_hzg0l9$_0;
    }
  });
  CategoryListItem.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'CategoryListItem',
    interfaces: [Node]
  };
  CategoryListItem.prototype.component1 = function () {
    return this.id;
  };
  CategoryListItem.prototype.component2 = function () {
    return this.categoryId;
  };
  CategoryListItem.prototype.component3 = function () {
    return this.link;
  };
  CategoryListItem.prototype.component4 = function () {
    return this.name;
  };
  CategoryListItem.prototype.component5 = function () {
    return this.description;
  };
  CategoryListItem.prototype.copy_x0a6t6$ = function (id, categoryId, link, name, description) {
    return new CategoryListItem(id === void 0 ? this.id : id, categoryId === void 0 ? this.categoryId : categoryId, link === void 0 ? this.link : link, name === void 0 ? this.name : name, description === void 0 ? this.description : description);
  };
  CategoryListItem.prototype.toString = function () {
    return 'CategoryListItem(id=' + Kotlin.toString(this.id) + (', categoryId=' + Kotlin.toString(this.categoryId)) + (', link=' + Kotlin.toString(this.link)) + (', name=' + Kotlin.toString(this.name)) + (', description=' + Kotlin.toString(this.description)) + ')';
  };
  CategoryListItem.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.id) | 0;
    result = result * 31 + Kotlin.hashCode(this.categoryId) | 0;
    result = result * 31 + Kotlin.hashCode(this.link) | 0;
    result = result * 31 + Kotlin.hashCode(this.name) | 0;
    result = result * 31 + Kotlin.hashCode(this.description) | 0;
    return result;
  };
  CategoryListItem.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.id, other.id) && Kotlin.equals(this.categoryId, other.categoryId) && Kotlin.equals(this.link, other.link) && Kotlin.equals(this.name, other.name) && Kotlin.equals(this.description, other.description)))));
  };
  function CategoryListItemConnection(pageInfo, nodes) {
    if (nodes === void 0)
      nodes = emptyList();
    this.pageInfo_y9ag07$_0 = pageInfo;
    this.nodes = nodes;
  }
  Object.defineProperty(CategoryListItemConnection.prototype, 'pageInfo', {
    get: function () {
      return this.pageInfo_y9ag07$_0;
    }
  });
  CategoryListItemConnection.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'CategoryListItemConnection',
    interfaces: [Connection]
  };
  CategoryListItemConnection.prototype.component1 = function () {
    return this.pageInfo;
  };
  CategoryListItemConnection.prototype.component2 = function () {
    return this.nodes;
  };
  CategoryListItemConnection.prototype.copy_fhwpnc$ = function (pageInfo, nodes) {
    return new CategoryListItemConnection(pageInfo === void 0 ? this.pageInfo : pageInfo, nodes === void 0 ? this.nodes : nodes);
  };
  CategoryListItemConnection.prototype.toString = function () {
    return 'CategoryListItemConnection(pageInfo=' + Kotlin.toString(this.pageInfo) + (', nodes=' + Kotlin.toString(this.nodes)) + ')';
  };
  CategoryListItemConnection.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.pageInfo) | 0;
    result = result * 31 + Kotlin.hashCode(this.nodes) | 0;
    return result;
  };
  CategoryListItemConnection.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.pageInfo, other.pageInfo) && Kotlin.equals(this.nodes, other.nodes)))));
  };
  function Connection() {
  }
  Connection.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'Connection',
    interfaces: []
  };
  function Edge() {
  }
  Edge.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'Edge',
    interfaces: []
  };
  function Node() {
  }
  Node.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'Node',
    interfaces: []
  };
  function PostListItem(id, commentCount, date, link, uri, title, excerpt, tags, revisions, categories) {
    this.id_auzppd$_0 = id;
    this.commentCount = commentCount;
    this.date = date;
    this.link = link;
    this.uri = uri;
    this.title = title;
    this.excerpt = excerpt;
    this.tags = tags;
    this.revisions = revisions;
    this.categories = categories;
  }
  Object.defineProperty(PostListItem.prototype, 'id', {
    get: function () {
      return this.id_auzppd$_0;
    }
  });
  PostListItem.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'PostListItem',
    interfaces: [Node]
  };
  PostListItem.prototype.component1 = function () {
    return this.id;
  };
  PostListItem.prototype.component2 = function () {
    return this.commentCount;
  };
  PostListItem.prototype.component3 = function () {
    return this.date;
  };
  PostListItem.prototype.component4 = function () {
    return this.link;
  };
  PostListItem.prototype.component5 = function () {
    return this.uri;
  };
  PostListItem.prototype.component6 = function () {
    return this.title;
  };
  PostListItem.prototype.component7 = function () {
    return this.excerpt;
  };
  PostListItem.prototype.component8 = function () {
    return this.tags;
  };
  PostListItem.prototype.component9 = function () {
    return this.revisions;
  };
  PostListItem.prototype.component10 = function () {
    return this.categories;
  };
  PostListItem.prototype.copy_ta2llf$ = function (id, commentCount, date, link, uri, title, excerpt, tags, revisions, categories) {
    return new PostListItem(id === void 0 ? this.id : id, commentCount === void 0 ? this.commentCount : commentCount, date === void 0 ? this.date : date, link === void 0 ? this.link : link, uri === void 0 ? this.uri : uri, title === void 0 ? this.title : title, excerpt === void 0 ? this.excerpt : excerpt, tags === void 0 ? this.tags : tags, revisions === void 0 ? this.revisions : revisions, categories === void 0 ? this.categories : categories);
  };
  PostListItem.prototype.toString = function () {
    return 'PostListItem(id=' + Kotlin.toString(this.id) + (', commentCount=' + Kotlin.toString(this.commentCount)) + (', date=' + Kotlin.toString(this.date)) + (', link=' + Kotlin.toString(this.link)) + (', uri=' + Kotlin.toString(this.uri)) + (', title=' + Kotlin.toString(this.title)) + (', excerpt=' + Kotlin.toString(this.excerpt)) + (', tags=' + Kotlin.toString(this.tags)) + (', revisions=' + Kotlin.toString(this.revisions)) + (', categories=' + Kotlin.toString(this.categories)) + ')';
  };
  PostListItem.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.id) | 0;
    result = result * 31 + Kotlin.hashCode(this.commentCount) | 0;
    result = result * 31 + Kotlin.hashCode(this.date) | 0;
    result = result * 31 + Kotlin.hashCode(this.link) | 0;
    result = result * 31 + Kotlin.hashCode(this.uri) | 0;
    result = result * 31 + Kotlin.hashCode(this.title) | 0;
    result = result * 31 + Kotlin.hashCode(this.excerpt) | 0;
    result = result * 31 + Kotlin.hashCode(this.tags) | 0;
    result = result * 31 + Kotlin.hashCode(this.revisions) | 0;
    result = result * 31 + Kotlin.hashCode(this.categories) | 0;
    return result;
  };
  PostListItem.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.id, other.id) && Kotlin.equals(this.commentCount, other.commentCount) && Kotlin.equals(this.date, other.date) && Kotlin.equals(this.link, other.link) && Kotlin.equals(this.uri, other.uri) && Kotlin.equals(this.title, other.title) && Kotlin.equals(this.excerpt, other.excerpt) && Kotlin.equals(this.tags, other.tags) && Kotlin.equals(this.revisions, other.revisions) && Kotlin.equals(this.categories, other.categories)))));
  };
  function PostListItemConnection(pageInfo, edges, nodes) {
    if (edges === void 0)
      edges = emptyList();
    if (nodes === void 0)
      nodes = emptyList();
    this.pageInfo_buvkv9$_0 = pageInfo;
    this.edges = edges;
    this.nodes = nodes;
  }
  Object.defineProperty(PostListItemConnection.prototype, 'pageInfo', {
    get: function () {
      return this.pageInfo_buvkv9$_0;
    }
  });
  PostListItemConnection.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'PostListItemConnection',
    interfaces: [Connection]
  };
  PostListItemConnection.prototype.component1 = function () {
    return this.pageInfo;
  };
  PostListItemConnection.prototype.component2 = function () {
    return this.edges;
  };
  PostListItemConnection.prototype.component3 = function () {
    return this.nodes;
  };
  PostListItemConnection.prototype.copy_lwi64w$ = function (pageInfo, edges, nodes) {
    return new PostListItemConnection(pageInfo === void 0 ? this.pageInfo : pageInfo, edges === void 0 ? this.edges : edges, nodes === void 0 ? this.nodes : nodes);
  };
  PostListItemConnection.prototype.toString = function () {
    return 'PostListItemConnection(pageInfo=' + Kotlin.toString(this.pageInfo) + (', edges=' + Kotlin.toString(this.edges)) + (', nodes=' + Kotlin.toString(this.nodes)) + ')';
  };
  PostListItemConnection.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.pageInfo) | 0;
    result = result * 31 + Kotlin.hashCode(this.edges) | 0;
    result = result * 31 + Kotlin.hashCode(this.nodes) | 0;
    return result;
  };
  PostListItemConnection.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.pageInfo, other.pageInfo) && Kotlin.equals(this.edges, other.edges) && Kotlin.equals(this.nodes, other.nodes)))));
  };
  function PostListItemEdge(cursor, node) {
    this.cursor_crcfdr$_0 = cursor;
    this.node_n4q28b$_0 = node;
  }
  Object.defineProperty(PostListItemEdge.prototype, 'cursor', {
    get: function () {
      return this.cursor_crcfdr$_0;
    }
  });
  Object.defineProperty(PostListItemEdge.prototype, 'node', {
    get: function () {
      return this.node_n4q28b$_0;
    }
  });
  PostListItemEdge.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'PostListItemEdge',
    interfaces: [Edge]
  };
  function PostObjectFieldFormat(name, ordinal) {
    Enum.call(this);
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function PostObjectFieldFormat_initFields() {
    PostObjectFieldFormat_initFields = function () {
    };
    PostObjectFieldFormat$RAW_instance = new PostObjectFieldFormat('RAW', 0);
    PostObjectFieldFormat$RENDERED_instance = new PostObjectFieldFormat('RENDERED', 1);
  }
  var PostObjectFieldFormat$RAW_instance;
  function PostObjectFieldFormat$RAW_getInstance() {
    PostObjectFieldFormat_initFields();
    return PostObjectFieldFormat$RAW_instance;
  }
  var PostObjectFieldFormat$RENDERED_instance;
  function PostObjectFieldFormat$RENDERED_getInstance() {
    PostObjectFieldFormat_initFields();
    return PostObjectFieldFormat$RENDERED_instance;
  }
  PostObjectFieldFormat.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'PostObjectFieldFormat',
    interfaces: [Enum]
  };
  function PostObjectFieldFormat$values() {
    return [PostObjectFieldFormat$RAW_getInstance(), PostObjectFieldFormat$RENDERED_getInstance()];
  }
  PostObjectFieldFormat.values = PostObjectFieldFormat$values;
  function PostObjectFieldFormat$valueOf(name) {
    switch (name) {
      case 'RAW':
        return PostObjectFieldFormat$RAW_getInstance();
      case 'RENDERED':
        return PostObjectFieldFormat$RENDERED_getInstance();
      default:throwISE('No enum constant com.chrynan.sitetheme.model.PostObjectFieldFormat.' + name);
    }
  }
  PostObjectFieldFormat.valueOf_61zpoe$ = PostObjectFieldFormat$valueOf;
  function RevisionListItem(id, revisionId, link, uri, date, title, excerpt) {
    this.id_sx1owq$_0 = id;
    this.revisionId = revisionId;
    this.link = link;
    this.uri = uri;
    this.date = date;
    this.title = title;
    this.excerpt = excerpt;
  }
  Object.defineProperty(RevisionListItem.prototype, 'id', {
    get: function () {
      return this.id_sx1owq$_0;
    }
  });
  RevisionListItem.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'RevisionListItem',
    interfaces: [Node]
  };
  RevisionListItem.prototype.component1 = function () {
    return this.id;
  };
  RevisionListItem.prototype.component2 = function () {
    return this.revisionId;
  };
  RevisionListItem.prototype.component3 = function () {
    return this.link;
  };
  RevisionListItem.prototype.component4 = function () {
    return this.uri;
  };
  RevisionListItem.prototype.component5 = function () {
    return this.date;
  };
  RevisionListItem.prototype.component6 = function () {
    return this.title;
  };
  RevisionListItem.prototype.component7 = function () {
    return this.excerpt;
  };
  RevisionListItem.prototype.copy_blz5pm$ = function (id, revisionId, link, uri, date, title, excerpt) {
    return new RevisionListItem(id === void 0 ? this.id : id, revisionId === void 0 ? this.revisionId : revisionId, link === void 0 ? this.link : link, uri === void 0 ? this.uri : uri, date === void 0 ? this.date : date, title === void 0 ? this.title : title, excerpt === void 0 ? this.excerpt : excerpt);
  };
  RevisionListItem.prototype.toString = function () {
    return 'RevisionListItem(id=' + Kotlin.toString(this.id) + (', revisionId=' + Kotlin.toString(this.revisionId)) + (', link=' + Kotlin.toString(this.link)) + (', uri=' + Kotlin.toString(this.uri)) + (', date=' + Kotlin.toString(this.date)) + (', title=' + Kotlin.toString(this.title)) + (', excerpt=' + Kotlin.toString(this.excerpt)) + ')';
  };
  RevisionListItem.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.id) | 0;
    result = result * 31 + Kotlin.hashCode(this.revisionId) | 0;
    result = result * 31 + Kotlin.hashCode(this.link) | 0;
    result = result * 31 + Kotlin.hashCode(this.uri) | 0;
    result = result * 31 + Kotlin.hashCode(this.date) | 0;
    result = result * 31 + Kotlin.hashCode(this.title) | 0;
    result = result * 31 + Kotlin.hashCode(this.excerpt) | 0;
    return result;
  };
  RevisionListItem.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.id, other.id) && Kotlin.equals(this.revisionId, other.revisionId) && Kotlin.equals(this.link, other.link) && Kotlin.equals(this.uri, other.uri) && Kotlin.equals(this.date, other.date) && Kotlin.equals(this.title, other.title) && Kotlin.equals(this.excerpt, other.excerpt)))));
  };
  function RevisionListItemConnection(pageInfo, nodes) {
    if (nodes === void 0)
      nodes = emptyList();
    this.pageInfo_yuhuxi$_0 = pageInfo;
    this.nodes = nodes;
  }
  Object.defineProperty(RevisionListItemConnection.prototype, 'pageInfo', {
    get: function () {
      return this.pageInfo_yuhuxi$_0;
    }
  });
  RevisionListItemConnection.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'RevisionListItemConnection',
    interfaces: [Connection]
  };
  RevisionListItemConnection.prototype.component1 = function () {
    return this.pageInfo;
  };
  RevisionListItemConnection.prototype.component2 = function () {
    return this.nodes;
  };
  RevisionListItemConnection.prototype.copy_wkrb17$ = function (pageInfo, nodes) {
    return new RevisionListItemConnection(pageInfo === void 0 ? this.pageInfo : pageInfo, nodes === void 0 ? this.nodes : nodes);
  };
  RevisionListItemConnection.prototype.toString = function () {
    return 'RevisionListItemConnection(pageInfo=' + Kotlin.toString(this.pageInfo) + (', nodes=' + Kotlin.toString(this.nodes)) + ')';
  };
  RevisionListItemConnection.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.pageInfo) | 0;
    result = result * 31 + Kotlin.hashCode(this.nodes) | 0;
    return result;
  };
  RevisionListItemConnection.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.pageInfo, other.pageInfo) && Kotlin.equals(this.nodes, other.nodes)))));
  };
  function TagListItem(id, tagId, link, name, description) {
    this.id_8jmrnj$_0 = id;
    this.tagId = tagId;
    this.link = link;
    this.name = name;
    this.description = description;
  }
  Object.defineProperty(TagListItem.prototype, 'id', {
    get: function () {
      return this.id_8jmrnj$_0;
    }
  });
  TagListItem.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'TagListItem',
    interfaces: [Node]
  };
  TagListItem.prototype.component1 = function () {
    return this.id;
  };
  TagListItem.prototype.component2 = function () {
    return this.tagId;
  };
  TagListItem.prototype.component3 = function () {
    return this.link;
  };
  TagListItem.prototype.component4 = function () {
    return this.name;
  };
  TagListItem.prototype.component5 = function () {
    return this.description;
  };
  TagListItem.prototype.copy_x0a6t6$ = function (id, tagId, link, name, description) {
    return new TagListItem(id === void 0 ? this.id : id, tagId === void 0 ? this.tagId : tagId, link === void 0 ? this.link : link, name === void 0 ? this.name : name, description === void 0 ? this.description : description);
  };
  TagListItem.prototype.toString = function () {
    return 'TagListItem(id=' + Kotlin.toString(this.id) + (', tagId=' + Kotlin.toString(this.tagId)) + (', link=' + Kotlin.toString(this.link)) + (', name=' + Kotlin.toString(this.name)) + (', description=' + Kotlin.toString(this.description)) + ')';
  };
  TagListItem.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.id) | 0;
    result = result * 31 + Kotlin.hashCode(this.tagId) | 0;
    result = result * 31 + Kotlin.hashCode(this.link) | 0;
    result = result * 31 + Kotlin.hashCode(this.name) | 0;
    result = result * 31 + Kotlin.hashCode(this.description) | 0;
    return result;
  };
  TagListItem.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.id, other.id) && Kotlin.equals(this.tagId, other.tagId) && Kotlin.equals(this.link, other.link) && Kotlin.equals(this.name, other.name) && Kotlin.equals(this.description, other.description)))));
  };
  function TagListItemConnection(pageInfo, nodes) {
    if (nodes === void 0)
      nodes = emptyList();
    this.pageInfo_23m0aj$_0 = pageInfo;
    this.nodes = nodes;
  }
  Object.defineProperty(TagListItemConnection.prototype, 'pageInfo', {
    get: function () {
      return this.pageInfo_23m0aj$_0;
    }
  });
  TagListItemConnection.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'TagListItemConnection',
    interfaces: [Connection]
  };
  TagListItemConnection.prototype.component1 = function () {
    return this.pageInfo;
  };
  TagListItemConnection.prototype.component2 = function () {
    return this.nodes;
  };
  TagListItemConnection.prototype.copy_kt4gty$ = function (pageInfo, nodes) {
    return new TagListItemConnection(pageInfo === void 0 ? this.pageInfo : pageInfo, nodes === void 0 ? this.nodes : nodes);
  };
  TagListItemConnection.prototype.toString = function () {
    return 'TagListItemConnection(pageInfo=' + Kotlin.toString(this.pageInfo) + (', nodes=' + Kotlin.toString(this.nodes)) + ')';
  };
  TagListItemConnection.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.pageInfo) | 0;
    result = result * 31 + Kotlin.hashCode(this.nodes) | 0;
    return result;
  };
  TagListItemConnection.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.pageInfo, other.pageInfo) && Kotlin.equals(this.nodes, other.nodes)))));
  };
  function WPPageInfo(endCursor, hasNextPage, hasPreviousPage, startCursor) {
    if (endCursor === void 0)
      endCursor = null;
    if (startCursor === void 0)
      startCursor = null;
    this.endCursor = endCursor;
    this.hasNextPage = hasNextPage;
    this.hasPreviousPage = hasPreviousPage;
    this.startCursor = startCursor;
  }
  WPPageInfo.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'WPPageInfo',
    interfaces: []
  };
  WPPageInfo.prototype.component1 = function () {
    return this.endCursor;
  };
  WPPageInfo.prototype.component2 = function () {
    return this.hasNextPage;
  };
  WPPageInfo.prototype.component3 = function () {
    return this.hasPreviousPage;
  };
  WPPageInfo.prototype.component4 = function () {
    return this.startCursor;
  };
  WPPageInfo.prototype.copy_xll67g$ = function (endCursor, hasNextPage, hasPreviousPage, startCursor) {
    return new WPPageInfo(endCursor === void 0 ? this.endCursor : endCursor, hasNextPage === void 0 ? this.hasNextPage : hasNextPage, hasPreviousPage === void 0 ? this.hasPreviousPage : hasPreviousPage, startCursor === void 0 ? this.startCursor : startCursor);
  };
  WPPageInfo.prototype.toString = function () {
    return 'WPPageInfo(endCursor=' + Kotlin.toString(this.endCursor) + (', hasNextPage=' + Kotlin.toString(this.hasNextPage)) + (', hasPreviousPage=' + Kotlin.toString(this.hasPreviousPage)) + (', startCursor=' + Kotlin.toString(this.startCursor)) + ')';
  };
  WPPageInfo.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.endCursor) | 0;
    result = result * 31 + Kotlin.hashCode(this.hasNextPage) | 0;
    result = result * 31 + Kotlin.hashCode(this.hasPreviousPage) | 0;
    result = result * 31 + Kotlin.hashCode(this.startCursor) | 0;
    return result;
  };
  WPPageInfo.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.endCursor, other.endCursor) && Kotlin.equals(this.hasNextPage, other.hasNextPage) && Kotlin.equals(this.hasPreviousPage, other.hasPreviousPage) && Kotlin.equals(this.startCursor, other.startCursor)))));
  };
  function PostRepository() {
  }
  PostRepository.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'PostRepository',
    interfaces: []
  };
  Object.defineProperty(ChrynanCodesTheme, 'Companion', {
    get: ChrynanCodesTheme$Companion_getInstance
  });
  var package$com = _.com || (_.com = {});
  var package$chrynan = package$com.chrynan || (package$com.chrynan = {});
  var package$sitetheme = package$chrynan.sitetheme || (package$chrynan.sitetheme = {});
  package$sitetheme.ChrynanCodesTheme = ChrynanCodesTheme;
  package$sitetheme.SiteTheme = SiteTheme;
  var package$model = package$sitetheme.model || (package$sitetheme.model = {});
  package$model.AvatarListItem = AvatarListItem;
  package$model.CategoryListItem = CategoryListItem;
  package$model.CategoryListItemConnection = CategoryListItemConnection;
  package$model.Connection = Connection;
  package$model.Edge = Edge;
  package$model.Node = Node;
  package$model.PostListItem = PostListItem;
  package$model.PostListItemConnection = PostListItemConnection;
  package$model.PostListItemEdge = PostListItemEdge;
  Object.defineProperty(PostObjectFieldFormat, 'RAW', {
    get: PostObjectFieldFormat$RAW_getInstance
  });
  Object.defineProperty(PostObjectFieldFormat, 'RENDERED', {
    get: PostObjectFieldFormat$RENDERED_getInstance
  });
  package$model.PostObjectFieldFormat = PostObjectFieldFormat;
  package$model.RevisionListItem = RevisionListItem;
  package$model.RevisionListItemConnection = RevisionListItemConnection;
  package$model.TagListItem = TagListItem;
  package$model.TagListItemConnection = TagListItemConnection;
  package$model.WPPageInfo = WPPageInfo;
  var package$repository = package$sitetheme.repository || (package$sitetheme.repository = {});
  package$repository.PostRepository = PostRepository;
  Kotlin.defineModule('common', _);
  return _;
}(typeof common === 'undefined' ? {} : common, kotlin);
