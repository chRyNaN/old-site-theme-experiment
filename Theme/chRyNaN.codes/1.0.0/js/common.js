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
  function Category(id, categoryId, count, description, link, name, slug, termGroupId) {
    if (categoryId === void 0)
      categoryId = null;
    if (count === void 0)
      count = null;
    if (description === void 0)
      description = null;
    if (link === void 0)
      link = null;
    if (name === void 0)
      name = null;
    if (slug === void 0)
      slug = null;
    if (termGroupId === void 0)
      termGroupId = null;
    this.id_kkf52s$_0 = id;
    this.categoryId = categoryId;
    this.count = count;
    this.description = description;
    this.link = link;
    this.name = name;
    this.slug = slug;
    this.termGroupId = termGroupId;
  }
  Object.defineProperty(Category.prototype, 'id', {
    get: function () {
      return this.id_kkf52s$_0;
    }
  });
  Category.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Category',
    interfaces: [Node]
  };
  Category.prototype.component1 = function () {
    return this.id;
  };
  Category.prototype.component2 = function () {
    return this.categoryId;
  };
  Category.prototype.component3 = function () {
    return this.count;
  };
  Category.prototype.component4 = function () {
    return this.description;
  };
  Category.prototype.component5 = function () {
    return this.link;
  };
  Category.prototype.component6 = function () {
    return this.name;
  };
  Category.prototype.component7 = function () {
    return this.slug;
  };
  Category.prototype.component8 = function () {
    return this.termGroupId;
  };
  Category.prototype.copy_rcow9d$ = function (id, categoryId, count, description, link, name, slug, termGroupId) {
    return new Category(id === void 0 ? this.id : id, categoryId === void 0 ? this.categoryId : categoryId, count === void 0 ? this.count : count, description === void 0 ? this.description : description, link === void 0 ? this.link : link, name === void 0 ? this.name : name, slug === void 0 ? this.slug : slug, termGroupId === void 0 ? this.termGroupId : termGroupId);
  };
  Category.prototype.toString = function () {
    return 'Category(id=' + Kotlin.toString(this.id) + (', categoryId=' + Kotlin.toString(this.categoryId)) + (', count=' + Kotlin.toString(this.count)) + (', description=' + Kotlin.toString(this.description)) + (', link=' + Kotlin.toString(this.link)) + (', name=' + Kotlin.toString(this.name)) + (', slug=' + Kotlin.toString(this.slug)) + (', termGroupId=' + Kotlin.toString(this.termGroupId)) + ')';
  };
  Category.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.id) | 0;
    result = result * 31 + Kotlin.hashCode(this.categoryId) | 0;
    result = result * 31 + Kotlin.hashCode(this.count) | 0;
    result = result * 31 + Kotlin.hashCode(this.description) | 0;
    result = result * 31 + Kotlin.hashCode(this.link) | 0;
    result = result * 31 + Kotlin.hashCode(this.name) | 0;
    result = result * 31 + Kotlin.hashCode(this.slug) | 0;
    result = result * 31 + Kotlin.hashCode(this.termGroupId) | 0;
    return result;
  };
  Category.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.id, other.id) && Kotlin.equals(this.categoryId, other.categoryId) && Kotlin.equals(this.count, other.count) && Kotlin.equals(this.description, other.description) && Kotlin.equals(this.link, other.link) && Kotlin.equals(this.name, other.name) && Kotlin.equals(this.slug, other.slug) && Kotlin.equals(this.termGroupId, other.termGroupId)))));
  };
  function Comment(id, agent, approved, authorIp, commentId, date, restricted, karma, type) {
    if (agent === void 0)
      agent = null;
    if (approved === void 0)
      approved = null;
    if (authorIp === void 0)
      authorIp = null;
    if (commentId === void 0)
      commentId = null;
    if (date === void 0)
      date = null;
    if (restricted === void 0)
      restricted = null;
    if (karma === void 0)
      karma = null;
    if (type === void 0)
      type = null;
    this.id_9nldt9$_0 = id;
    this.agent = agent;
    this.approved = approved;
    this.authorIp = authorIp;
    this.commentId = commentId;
    this.date = date;
    this.restricted = restricted;
    this.karma = karma;
    this.type = type;
  }
  Object.defineProperty(Comment.prototype, 'id', {
    get: function () {
      return this.id_9nldt9$_0;
    }
  });
  Comment.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Comment',
    interfaces: [Node]
  };
  Comment.prototype.component1 = function () {
    return this.id;
  };
  Comment.prototype.component2 = function () {
    return this.agent;
  };
  Comment.prototype.component3 = function () {
    return this.approved;
  };
  Comment.prototype.component4 = function () {
    return this.authorIp;
  };
  Comment.prototype.component5 = function () {
    return this.commentId;
  };
  Comment.prototype.component6 = function () {
    return this.date;
  };
  Comment.prototype.component7 = function () {
    return this.restricted;
  };
  Comment.prototype.component8 = function () {
    return this.karma;
  };
  Comment.prototype.component9 = function () {
    return this.type;
  };
  Comment.prototype.copy_nxt7fy$ = function (id, agent, approved, authorIp, commentId, date, restricted, karma, type) {
    return new Comment(id === void 0 ? this.id : id, agent === void 0 ? this.agent : agent, approved === void 0 ? this.approved : approved, authorIp === void 0 ? this.authorIp : authorIp, commentId === void 0 ? this.commentId : commentId, date === void 0 ? this.date : date, restricted === void 0 ? this.restricted : restricted, karma === void 0 ? this.karma : karma, type === void 0 ? this.type : type);
  };
  Comment.prototype.toString = function () {
    return 'Comment(id=' + Kotlin.toString(this.id) + (', agent=' + Kotlin.toString(this.agent)) + (', approved=' + Kotlin.toString(this.approved)) + (', authorIp=' + Kotlin.toString(this.authorIp)) + (', commentId=' + Kotlin.toString(this.commentId)) + (', date=' + Kotlin.toString(this.date)) + (', restricted=' + Kotlin.toString(this.restricted)) + (', karma=' + Kotlin.toString(this.karma)) + (', type=' + Kotlin.toString(this.type)) + ')';
  };
  Comment.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.id) | 0;
    result = result * 31 + Kotlin.hashCode(this.agent) | 0;
    result = result * 31 + Kotlin.hashCode(this.approved) | 0;
    result = result * 31 + Kotlin.hashCode(this.authorIp) | 0;
    result = result * 31 + Kotlin.hashCode(this.commentId) | 0;
    result = result * 31 + Kotlin.hashCode(this.date) | 0;
    result = result * 31 + Kotlin.hashCode(this.restricted) | 0;
    result = result * 31 + Kotlin.hashCode(this.karma) | 0;
    result = result * 31 + Kotlin.hashCode(this.type) | 0;
    return result;
  };
  Comment.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.id, other.id) && Kotlin.equals(this.agent, other.agent) && Kotlin.equals(this.approved, other.approved) && Kotlin.equals(this.authorIp, other.authorIp) && Kotlin.equals(this.commentId, other.commentId) && Kotlin.equals(this.date, other.date) && Kotlin.equals(this.restricted, other.restricted) && Kotlin.equals(this.karma, other.karma) && Kotlin.equals(this.type, other.type)))));
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
  function Menu(id, count, menuId, name, slug) {
    if (count === void 0)
      count = null;
    if (menuId === void 0)
      menuId = null;
    if (name === void 0)
      name = null;
    if (slug === void 0)
      slug = null;
    this.id_4khwyb$_0 = id;
    this.count = count;
    this.menuId = menuId;
    this.name = name;
    this.slug = slug;
  }
  Object.defineProperty(Menu.prototype, 'id', {
    get: function () {
      return this.id_4khwyb$_0;
    }
  });
  Menu.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Menu',
    interfaces: [Node]
  };
  Menu.prototype.component1 = function () {
    return this.id;
  };
  Menu.prototype.component2 = function () {
    return this.count;
  };
  Menu.prototype.component3 = function () {
    return this.menuId;
  };
  Menu.prototype.component4 = function () {
    return this.name;
  };
  Menu.prototype.component5 = function () {
    return this.slug;
  };
  Menu.prototype.copy_lrbmo0$ = function (id, count, menuId, name, slug) {
    return new Menu(id === void 0 ? this.id : id, count === void 0 ? this.count : count, menuId === void 0 ? this.menuId : menuId, name === void 0 ? this.name : name, slug === void 0 ? this.slug : slug);
  };
  Menu.prototype.toString = function () {
    return 'Menu(id=' + Kotlin.toString(this.id) + (', count=' + Kotlin.toString(this.count)) + (', menuId=' + Kotlin.toString(this.menuId)) + (', name=' + Kotlin.toString(this.name)) + (', slug=' + Kotlin.toString(this.slug)) + ')';
  };
  Menu.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.id) | 0;
    result = result * 31 + Kotlin.hashCode(this.count) | 0;
    result = result * 31 + Kotlin.hashCode(this.menuId) | 0;
    result = result * 31 + Kotlin.hashCode(this.name) | 0;
    result = result * 31 + Kotlin.hashCode(this.slug) | 0;
    return result;
  };
  Menu.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.id, other.id) && Kotlin.equals(this.count, other.count) && Kotlin.equals(this.menuId, other.menuId) && Kotlin.equals(this.name, other.name) && Kotlin.equals(this.slug, other.slug)))));
  };
  function MenuItem(id, cssClasses, description, label, linkRelationship, menuItemId, target, title, url) {
    if (cssClasses === void 0)
      cssClasses = emptyList();
    if (description === void 0)
      description = null;
    if (label === void 0)
      label = null;
    if (linkRelationship === void 0)
      linkRelationship = null;
    if (menuItemId === void 0)
      menuItemId = null;
    if (target === void 0)
      target = null;
    if (title === void 0)
      title = null;
    if (url === void 0)
      url = null;
    this.id_owwrxc$_0 = id;
    this.cssClasses = cssClasses;
    this.description = description;
    this.label = label;
    this.linkRelationship = linkRelationship;
    this.menuItemId = menuItemId;
    this.target = target;
    this.title = title;
    this.url = url;
  }
  Object.defineProperty(MenuItem.prototype, 'id', {
    get: function () {
      return this.id_owwrxc$_0;
    }
  });
  MenuItem.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'MenuItem',
    interfaces: [Node]
  };
  MenuItem.prototype.component1 = function () {
    return this.id;
  };
  MenuItem.prototype.component2 = function () {
    return this.cssClasses;
  };
  MenuItem.prototype.component3 = function () {
    return this.description;
  };
  MenuItem.prototype.component4 = function () {
    return this.label;
  };
  MenuItem.prototype.component5 = function () {
    return this.linkRelationship;
  };
  MenuItem.prototype.component6 = function () {
    return this.menuItemId;
  };
  MenuItem.prototype.component7 = function () {
    return this.target;
  };
  MenuItem.prototype.component8 = function () {
    return this.title;
  };
  MenuItem.prototype.component9 = function () {
    return this.url;
  };
  MenuItem.prototype.copy_m80p0s$ = function (id, cssClasses, description, label, linkRelationship, menuItemId, target, title, url) {
    return new MenuItem(id === void 0 ? this.id : id, cssClasses === void 0 ? this.cssClasses : cssClasses, description === void 0 ? this.description : description, label === void 0 ? this.label : label, linkRelationship === void 0 ? this.linkRelationship : linkRelationship, menuItemId === void 0 ? this.menuItemId : menuItemId, target === void 0 ? this.target : target, title === void 0 ? this.title : title, url === void 0 ? this.url : url);
  };
  MenuItem.prototype.toString = function () {
    return 'MenuItem(id=' + Kotlin.toString(this.id) + (', cssClasses=' + Kotlin.toString(this.cssClasses)) + (', description=' + Kotlin.toString(this.description)) + (', label=' + Kotlin.toString(this.label)) + (', linkRelationship=' + Kotlin.toString(this.linkRelationship)) + (', menuItemId=' + Kotlin.toString(this.menuItemId)) + (', target=' + Kotlin.toString(this.target)) + (', title=' + Kotlin.toString(this.title)) + (', url=' + Kotlin.toString(this.url)) + ')';
  };
  MenuItem.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.id) | 0;
    result = result * 31 + Kotlin.hashCode(this.cssClasses) | 0;
    result = result * 31 + Kotlin.hashCode(this.description) | 0;
    result = result * 31 + Kotlin.hashCode(this.label) | 0;
    result = result * 31 + Kotlin.hashCode(this.linkRelationship) | 0;
    result = result * 31 + Kotlin.hashCode(this.menuItemId) | 0;
    result = result * 31 + Kotlin.hashCode(this.target) | 0;
    result = result * 31 + Kotlin.hashCode(this.title) | 0;
    result = result * 31 + Kotlin.hashCode(this.url) | 0;
    return result;
  };
  MenuItem.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.id, other.id) && Kotlin.equals(this.cssClasses, other.cssClasses) && Kotlin.equals(this.description, other.description) && Kotlin.equals(this.label, other.label) && Kotlin.equals(this.linkRelationship, other.linkRelationship) && Kotlin.equals(this.menuItemId, other.menuItemId) && Kotlin.equals(this.target, other.target) && Kotlin.equals(this.title, other.title) && Kotlin.equals(this.url, other.url)))));
  };
  function MenuToMenuItemConnection(edges, nodes, pageInfo) {
    if (edges === void 0)
      edges = emptyList();
    if (nodes === void 0)
      nodes = emptyList();
    if (pageInfo === void 0)
      pageInfo = null;
    this.edges_hwqhdh$_0 = edges;
    this.nodes_dhc29c$_0 = nodes;
    this.pageInfo_d7mudm$_0 = pageInfo;
  }
  Object.defineProperty(MenuToMenuItemConnection.prototype, 'edges', {
    get: function () {
      return this.edges_hwqhdh$_0;
    }
  });
  Object.defineProperty(MenuToMenuItemConnection.prototype, 'nodes', {
    get: function () {
      return this.nodes_dhc29c$_0;
    }
  });
  Object.defineProperty(MenuToMenuItemConnection.prototype, 'pageInfo', {
    get: function () {
      return this.pageInfo_d7mudm$_0;
    }
  });
  MenuToMenuItemConnection.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'MenuToMenuItemConnection',
    interfaces: [Connection]
  };
  MenuToMenuItemConnection.prototype.component1 = function () {
    return this.edges;
  };
  MenuToMenuItemConnection.prototype.component2 = function () {
    return this.nodes;
  };
  MenuToMenuItemConnection.prototype.component3 = function () {
    return this.pageInfo;
  };
  MenuToMenuItemConnection.prototype.copy_sy807z$ = function (edges, nodes, pageInfo) {
    return new MenuToMenuItemConnection(edges === void 0 ? this.edges : edges, nodes === void 0 ? this.nodes : nodes, pageInfo === void 0 ? this.pageInfo : pageInfo);
  };
  MenuToMenuItemConnection.prototype.toString = function () {
    return 'MenuToMenuItemConnection(edges=' + Kotlin.toString(this.edges) + (', nodes=' + Kotlin.toString(this.nodes)) + (', pageInfo=' + Kotlin.toString(this.pageInfo)) + ')';
  };
  MenuToMenuItemConnection.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.edges) | 0;
    result = result * 31 + Kotlin.hashCode(this.nodes) | 0;
    result = result * 31 + Kotlin.hashCode(this.pageInfo) | 0;
    return result;
  };
  MenuToMenuItemConnection.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.edges, other.edges) && Kotlin.equals(this.nodes, other.nodes) && Kotlin.equals(this.pageInfo, other.pageInfo)))));
  };
  function MenuToMenuItemConnectionEdge(cursor, node) {
    if (cursor === void 0)
      cursor = null;
    this.cursor_q3dngm$_0 = cursor;
    this.node_xozyha$_0 = node;
  }
  Object.defineProperty(MenuToMenuItemConnectionEdge.prototype, 'cursor', {
    get: function () {
      return this.cursor_q3dngm$_0;
    }
  });
  Object.defineProperty(MenuToMenuItemConnectionEdge.prototype, 'node', {
    get: function () {
      return this.node_xozyha$_0;
    }
  });
  MenuToMenuItemConnectionEdge.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'MenuToMenuItemConnectionEdge',
    interfaces: [Edge]
  };
  MenuToMenuItemConnectionEdge.prototype.component1 = function () {
    return this.cursor;
  };
  MenuToMenuItemConnectionEdge.prototype.component2 = function () {
    return this.node;
  };
  MenuToMenuItemConnectionEdge.prototype.copy_xac5y2$ = function (cursor, node) {
    return new MenuToMenuItemConnectionEdge(cursor === void 0 ? this.cursor : cursor, node === void 0 ? this.node : node);
  };
  MenuToMenuItemConnectionEdge.prototype.toString = function () {
    return 'MenuToMenuItemConnectionEdge(cursor=' + Kotlin.toString(this.cursor) + (', node=' + Kotlin.toString(this.node)) + ')';
  };
  MenuToMenuItemConnectionEdge.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.cursor) | 0;
    result = result * 31 + Kotlin.hashCode(this.node) | 0;
    return result;
  };
  MenuToMenuItemConnectionEdge.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.cursor, other.cursor) && Kotlin.equals(this.node, other.node)))));
  };
  function Node() {
  }
  Node.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'Node',
    interfaces: []
  };
  function Page(id, author, commentCount, commentStatus, date, desiredSlug, editLast, enclosure, guid, link, modified, pageId, slug, uri, content, excerpt, revisions, comments) {
    if (author === void 0)
      author = null;
    if (commentCount === void 0)
      commentCount = null;
    if (commentStatus === void 0)
      commentStatus = null;
    if (date === void 0)
      date = null;
    if (desiredSlug === void 0)
      desiredSlug = null;
    if (editLast === void 0)
      editLast = null;
    if (enclosure === void 0)
      enclosure = null;
    if (guid === void 0)
      guid = null;
    if (link === void 0)
      link = null;
    if (modified === void 0)
      modified = null;
    if (slug === void 0)
      slug = null;
    if (uri === void 0)
      uri = null;
    if (content === void 0)
      content = null;
    if (excerpt === void 0)
      excerpt = null;
    if (revisions === void 0)
      revisions = null;
    if (comments === void 0)
      comments = null;
    this.id_jmob31$_0 = id;
    this.author = author;
    this.commentCount = commentCount;
    this.commentStatus = commentStatus;
    this.date = date;
    this.desiredSlug = desiredSlug;
    this.editLast = editLast;
    this.enclosure = enclosure;
    this.guid = guid;
    this.link = link;
    this.modified = modified;
    this.pageId = pageId;
    this.slug = slug;
    this.uri = uri;
    this.content = content;
    this.excerpt = excerpt;
    this.revisions = revisions;
    this.comments = comments;
  }
  Object.defineProperty(Page.prototype, 'id', {
    get: function () {
      return this.id_jmob31$_0;
    }
  });
  Page.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Page',
    interfaces: [Node]
  };
  Page.prototype.component1 = function () {
    return this.id;
  };
  Page.prototype.component2 = function () {
    return this.author;
  };
  Page.prototype.component3 = function () {
    return this.commentCount;
  };
  Page.prototype.component4 = function () {
    return this.commentStatus;
  };
  Page.prototype.component5 = function () {
    return this.date;
  };
  Page.prototype.component6 = function () {
    return this.desiredSlug;
  };
  Page.prototype.component7 = function () {
    return this.editLast;
  };
  Page.prototype.component8 = function () {
    return this.enclosure;
  };
  Page.prototype.component9 = function () {
    return this.guid;
  };
  Page.prototype.component10 = function () {
    return this.link;
  };
  Page.prototype.component11 = function () {
    return this.modified;
  };
  Page.prototype.component12 = function () {
    return this.pageId;
  };
  Page.prototype.component13 = function () {
    return this.slug;
  };
  Page.prototype.component14 = function () {
    return this.uri;
  };
  Page.prototype.component15 = function () {
    return this.content;
  };
  Page.prototype.component16 = function () {
    return this.excerpt;
  };
  Page.prototype.component17 = function () {
    return this.revisions;
  };
  Page.prototype.component18 = function () {
    return this.comments;
  };
  Page.prototype.copy_q91dm4$ = function (id, author, commentCount, commentStatus, date, desiredSlug, editLast, enclosure, guid, link, modified, pageId, slug, uri, content, excerpt, revisions, comments) {
    return new Page(id === void 0 ? this.id : id, author === void 0 ? this.author : author, commentCount === void 0 ? this.commentCount : commentCount, commentStatus === void 0 ? this.commentStatus : commentStatus, date === void 0 ? this.date : date, desiredSlug === void 0 ? this.desiredSlug : desiredSlug, editLast === void 0 ? this.editLast : editLast, enclosure === void 0 ? this.enclosure : enclosure, guid === void 0 ? this.guid : guid, link === void 0 ? this.link : link, modified === void 0 ? this.modified : modified, pageId === void 0 ? this.pageId : pageId, slug === void 0 ? this.slug : slug, uri === void 0 ? this.uri : uri, content === void 0 ? this.content : content, excerpt === void 0 ? this.excerpt : excerpt, revisions === void 0 ? this.revisions : revisions, comments === void 0 ? this.comments : comments);
  };
  Page.prototype.toString = function () {
    return 'Page(id=' + Kotlin.toString(this.id) + (', author=' + Kotlin.toString(this.author)) + (', commentCount=' + Kotlin.toString(this.commentCount)) + (', commentStatus=' + Kotlin.toString(this.commentStatus)) + (', date=' + Kotlin.toString(this.date)) + (', desiredSlug=' + Kotlin.toString(this.desiredSlug)) + (', editLast=' + Kotlin.toString(this.editLast)) + (', enclosure=' + Kotlin.toString(this.enclosure)) + (', guid=' + Kotlin.toString(this.guid)) + (', link=' + Kotlin.toString(this.link)) + (', modified=' + Kotlin.toString(this.modified)) + (', pageId=' + Kotlin.toString(this.pageId)) + (', slug=' + Kotlin.toString(this.slug)) + (', uri=' + Kotlin.toString(this.uri)) + (', content=' + Kotlin.toString(this.content)) + (', excerpt=' + Kotlin.toString(this.excerpt)) + (', revisions=' + Kotlin.toString(this.revisions)) + (', comments=' + Kotlin.toString(this.comments)) + ')';
  };
  Page.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.id) | 0;
    result = result * 31 + Kotlin.hashCode(this.author) | 0;
    result = result * 31 + Kotlin.hashCode(this.commentCount) | 0;
    result = result * 31 + Kotlin.hashCode(this.commentStatus) | 0;
    result = result * 31 + Kotlin.hashCode(this.date) | 0;
    result = result * 31 + Kotlin.hashCode(this.desiredSlug) | 0;
    result = result * 31 + Kotlin.hashCode(this.editLast) | 0;
    result = result * 31 + Kotlin.hashCode(this.enclosure) | 0;
    result = result * 31 + Kotlin.hashCode(this.guid) | 0;
    result = result * 31 + Kotlin.hashCode(this.link) | 0;
    result = result * 31 + Kotlin.hashCode(this.modified) | 0;
    result = result * 31 + Kotlin.hashCode(this.pageId) | 0;
    result = result * 31 + Kotlin.hashCode(this.slug) | 0;
    result = result * 31 + Kotlin.hashCode(this.uri) | 0;
    result = result * 31 + Kotlin.hashCode(this.content) | 0;
    result = result * 31 + Kotlin.hashCode(this.excerpt) | 0;
    result = result * 31 + Kotlin.hashCode(this.revisions) | 0;
    result = result * 31 + Kotlin.hashCode(this.comments) | 0;
    return result;
  };
  Page.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.id, other.id) && Kotlin.equals(this.author, other.author) && Kotlin.equals(this.commentCount, other.commentCount) && Kotlin.equals(this.commentStatus, other.commentStatus) && Kotlin.equals(this.date, other.date) && Kotlin.equals(this.desiredSlug, other.desiredSlug) && Kotlin.equals(this.editLast, other.editLast) && Kotlin.equals(this.enclosure, other.enclosure) && Kotlin.equals(this.guid, other.guid) && Kotlin.equals(this.link, other.link) && Kotlin.equals(this.modified, other.modified) && Kotlin.equals(this.pageId, other.pageId) && Kotlin.equals(this.slug, other.slug) && Kotlin.equals(this.uri, other.uri) && Kotlin.equals(this.content, other.content) && Kotlin.equals(this.excerpt, other.excerpt) && Kotlin.equals(this.revisions, other.revisions) && Kotlin.equals(this.comments, other.comments)))));
  };
  function PageToCommentConnection(edges, nodes, pageInfo) {
    if (edges === void 0)
      edges = emptyList();
    if (nodes === void 0)
      nodes = emptyList();
    if (pageInfo === void 0)
      pageInfo = null;
    this.edges_cr4aqk$_0 = edges;
    this.nodes_h6ipup$_0 = nodes;
    this.pageInfo_ww91$_0 = pageInfo;
  }
  Object.defineProperty(PageToCommentConnection.prototype, 'edges', {
    get: function () {
      return this.edges_cr4aqk$_0;
    }
  });
  Object.defineProperty(PageToCommentConnection.prototype, 'nodes', {
    get: function () {
      return this.nodes_h6ipup$_0;
    }
  });
  Object.defineProperty(PageToCommentConnection.prototype, 'pageInfo', {
    get: function () {
      return this.pageInfo_ww91$_0;
    }
  });
  PageToCommentConnection.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'PageToCommentConnection',
    interfaces: [Connection]
  };
  PageToCommentConnection.prototype.component1 = function () {
    return this.edges;
  };
  PageToCommentConnection.prototype.component2 = function () {
    return this.nodes;
  };
  PageToCommentConnection.prototype.component3 = function () {
    return this.pageInfo;
  };
  PageToCommentConnection.prototype.copy_qj6jcx$ = function (edges, nodes, pageInfo) {
    return new PageToCommentConnection(edges === void 0 ? this.edges : edges, nodes === void 0 ? this.nodes : nodes, pageInfo === void 0 ? this.pageInfo : pageInfo);
  };
  PageToCommentConnection.prototype.toString = function () {
    return 'PageToCommentConnection(edges=' + Kotlin.toString(this.edges) + (', nodes=' + Kotlin.toString(this.nodes)) + (', pageInfo=' + Kotlin.toString(this.pageInfo)) + ')';
  };
  PageToCommentConnection.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.edges) | 0;
    result = result * 31 + Kotlin.hashCode(this.nodes) | 0;
    result = result * 31 + Kotlin.hashCode(this.pageInfo) | 0;
    return result;
  };
  PageToCommentConnection.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.edges, other.edges) && Kotlin.equals(this.nodes, other.nodes) && Kotlin.equals(this.pageInfo, other.pageInfo)))));
  };
  function PageToCommentConnectionEdge(cursor, node) {
    if (cursor === void 0)
      cursor = null;
    this.cursor_jflmpj$_0 = cursor;
    this.node_o3kcv7$_0 = node;
  }
  Object.defineProperty(PageToCommentConnectionEdge.prototype, 'cursor', {
    get: function () {
      return this.cursor_jflmpj$_0;
    }
  });
  Object.defineProperty(PageToCommentConnectionEdge.prototype, 'node', {
    get: function () {
      return this.node_o3kcv7$_0;
    }
  });
  PageToCommentConnectionEdge.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'PageToCommentConnectionEdge',
    interfaces: [Edge]
  };
  PageToCommentConnectionEdge.prototype.component1 = function () {
    return this.cursor;
  };
  PageToCommentConnectionEdge.prototype.component2 = function () {
    return this.node;
  };
  PageToCommentConnectionEdge.prototype.copy_spndex$ = function (cursor, node) {
    return new PageToCommentConnectionEdge(cursor === void 0 ? this.cursor : cursor, node === void 0 ? this.node : node);
  };
  PageToCommentConnectionEdge.prototype.toString = function () {
    return 'PageToCommentConnectionEdge(cursor=' + Kotlin.toString(this.cursor) + (', node=' + Kotlin.toString(this.node)) + ')';
  };
  PageToCommentConnectionEdge.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.cursor) | 0;
    result = result * 31 + Kotlin.hashCode(this.node) | 0;
    return result;
  };
  PageToCommentConnectionEdge.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.cursor, other.cursor) && Kotlin.equals(this.node, other.node)))));
  };
  function PageToRevisionConnection(edges, nodes, pageInfo) {
    if (edges === void 0)
      edges = emptyList();
    if (nodes === void 0)
      nodes = emptyList();
    if (pageInfo === void 0)
      pageInfo = null;
    this.edges_m5cvci$_0 = edges;
    this.nodes_qkragn$_0 = nodes;
    this.pageInfo_vc0csx$_0 = pageInfo;
  }
  Object.defineProperty(PageToRevisionConnection.prototype, 'edges', {
    get: function () {
      return this.edges_m5cvci$_0;
    }
  });
  Object.defineProperty(PageToRevisionConnection.prototype, 'nodes', {
    get: function () {
      return this.nodes_qkragn$_0;
    }
  });
  Object.defineProperty(PageToRevisionConnection.prototype, 'pageInfo', {
    get: function () {
      return this.pageInfo_vc0csx$_0;
    }
  });
  PageToRevisionConnection.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'PageToRevisionConnection',
    interfaces: [Connection]
  };
  PageToRevisionConnection.prototype.component1 = function () {
    return this.edges;
  };
  PageToRevisionConnection.prototype.component2 = function () {
    return this.nodes;
  };
  PageToRevisionConnection.prototype.component3 = function () {
    return this.pageInfo;
  };
  PageToRevisionConnection.prototype.copy_x03vch$ = function (edges, nodes, pageInfo) {
    return new PageToRevisionConnection(edges === void 0 ? this.edges : edges, nodes === void 0 ? this.nodes : nodes, pageInfo === void 0 ? this.pageInfo : pageInfo);
  };
  PageToRevisionConnection.prototype.toString = function () {
    return 'PageToRevisionConnection(edges=' + Kotlin.toString(this.edges) + (', nodes=' + Kotlin.toString(this.nodes)) + (', pageInfo=' + Kotlin.toString(this.pageInfo)) + ')';
  };
  PageToRevisionConnection.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.edges) | 0;
    result = result * 31 + Kotlin.hashCode(this.nodes) | 0;
    result = result * 31 + Kotlin.hashCode(this.pageInfo) | 0;
    return result;
  };
  PageToRevisionConnection.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.edges, other.edges) && Kotlin.equals(this.nodes, other.nodes) && Kotlin.equals(this.pageInfo, other.pageInfo)))));
  };
  function PageToRevisionConnectionEdge(cursor, node) {
    if (cursor === void 0)
      cursor = null;
    this.cursor_wpmzw3$_0 = cursor;
    this.node_fkmg1z$_0 = node;
  }
  Object.defineProperty(PageToRevisionConnectionEdge.prototype, 'cursor', {
    get: function () {
      return this.cursor_wpmzw3$_0;
    }
  });
  Object.defineProperty(PageToRevisionConnectionEdge.prototype, 'node', {
    get: function () {
      return this.node_fkmg1z$_0;
    }
  });
  PageToRevisionConnectionEdge.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'PageToRevisionConnectionEdge',
    interfaces: [Edge]
  };
  PageToRevisionConnectionEdge.prototype.component1 = function () {
    return this.cursor;
  };
  PageToRevisionConnectionEdge.prototype.component2 = function () {
    return this.node;
  };
  PageToRevisionConnectionEdge.prototype.copy_w2dl3x$ = function (cursor, node) {
    return new PageToRevisionConnectionEdge(cursor === void 0 ? this.cursor : cursor, node === void 0 ? this.node : node);
  };
  PageToRevisionConnectionEdge.prototype.toString = function () {
    return 'PageToRevisionConnectionEdge(cursor=' + Kotlin.toString(this.cursor) + (', node=' + Kotlin.toString(this.node)) + ')';
  };
  PageToRevisionConnectionEdge.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.cursor) | 0;
    result = result * 31 + Kotlin.hashCode(this.node) | 0;
    return result;
  };
  PageToRevisionConnectionEdge.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.cursor, other.cursor) && Kotlin.equals(this.node, other.node)))));
  };
  function Post(id, author, commentCount, commentStatus, date, desiredSlug, editLast, enclosure, featuredImage, guid, link, modified, postId, slug, status, uri, excerpt, content, categories, tags, revisions, comments) {
    if (author === void 0)
      author = null;
    if (commentCount === void 0)
      commentCount = null;
    if (commentStatus === void 0)
      commentStatus = null;
    if (date === void 0)
      date = null;
    if (desiredSlug === void 0)
      desiredSlug = null;
    if (editLast === void 0)
      editLast = null;
    if (enclosure === void 0)
      enclosure = null;
    if (featuredImage === void 0)
      featuredImage = null;
    if (guid === void 0)
      guid = null;
    if (link === void 0)
      link = null;
    if (modified === void 0)
      modified = null;
    if (slug === void 0)
      slug = null;
    if (status === void 0)
      status = null;
    if (uri === void 0)
      uri = null;
    if (excerpt === void 0)
      excerpt = null;
    if (content === void 0)
      content = null;
    if (categories === void 0)
      categories = null;
    if (tags === void 0)
      tags = null;
    if (revisions === void 0)
      revisions = null;
    if (comments === void 0)
      comments = null;
    this.id_hxohwu$_0 = id;
    this.author = author;
    this.commentCount = commentCount;
    this.commentStatus = commentStatus;
    this.date = date;
    this.desiredSlug = desiredSlug;
    this.editLast = editLast;
    this.enclosure = enclosure;
    this.featuredImage = featuredImage;
    this.guid = guid;
    this.link = link;
    this.modified = modified;
    this.postId = postId;
    this.slug = slug;
    this.status = status;
    this.uri = uri;
    this.excerpt = excerpt;
    this.content = content;
    this.categories = categories;
    this.tags = tags;
    this.revisions = revisions;
    this.comments = comments;
  }
  Object.defineProperty(Post.prototype, 'id', {
    get: function () {
      return this.id_hxohwu$_0;
    }
  });
  Post.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Post',
    interfaces: [Node]
  };
  Post.prototype.component1 = function () {
    return this.id;
  };
  Post.prototype.component2 = function () {
    return this.author;
  };
  Post.prototype.component3 = function () {
    return this.commentCount;
  };
  Post.prototype.component4 = function () {
    return this.commentStatus;
  };
  Post.prototype.component5 = function () {
    return this.date;
  };
  Post.prototype.component6 = function () {
    return this.desiredSlug;
  };
  Post.prototype.component7 = function () {
    return this.editLast;
  };
  Post.prototype.component8 = function () {
    return this.enclosure;
  };
  Post.prototype.component9 = function () {
    return this.featuredImage;
  };
  Post.prototype.component10 = function () {
    return this.guid;
  };
  Post.prototype.component11 = function () {
    return this.link;
  };
  Post.prototype.component12 = function () {
    return this.modified;
  };
  Post.prototype.component13 = function () {
    return this.postId;
  };
  Post.prototype.component14 = function () {
    return this.slug;
  };
  Post.prototype.component15 = function () {
    return this.status;
  };
  Post.prototype.component16 = function () {
    return this.uri;
  };
  Post.prototype.component17 = function () {
    return this.excerpt;
  };
  Post.prototype.component18 = function () {
    return this.content;
  };
  Post.prototype.component19 = function () {
    return this.categories;
  };
  Post.prototype.component20 = function () {
    return this.tags;
  };
  Post.prototype.component21 = function () {
    return this.revisions;
  };
  Post.prototype.component22 = function () {
    return this.comments;
  };
  Post.prototype.copy_otac6e$ = function (id, author, commentCount, commentStatus, date, desiredSlug, editLast, enclosure, featuredImage, guid, link, modified, postId, slug, status, uri, excerpt, content, categories, tags, revisions, comments) {
    return new Post(id === void 0 ? this.id : id, author === void 0 ? this.author : author, commentCount === void 0 ? this.commentCount : commentCount, commentStatus === void 0 ? this.commentStatus : commentStatus, date === void 0 ? this.date : date, desiredSlug === void 0 ? this.desiredSlug : desiredSlug, editLast === void 0 ? this.editLast : editLast, enclosure === void 0 ? this.enclosure : enclosure, featuredImage === void 0 ? this.featuredImage : featuredImage, guid === void 0 ? this.guid : guid, link === void 0 ? this.link : link, modified === void 0 ? this.modified : modified, postId === void 0 ? this.postId : postId, slug === void 0 ? this.slug : slug, status === void 0 ? this.status : status, uri === void 0 ? this.uri : uri, excerpt === void 0 ? this.excerpt : excerpt, content === void 0 ? this.content : content, categories === void 0 ? this.categories : categories, tags === void 0 ? this.tags : tags, revisions === void 0 ? this.revisions : revisions, comments === void 0 ? this.comments : comments);
  };
  Post.prototype.toString = function () {
    return 'Post(id=' + Kotlin.toString(this.id) + (', author=' + Kotlin.toString(this.author)) + (', commentCount=' + Kotlin.toString(this.commentCount)) + (', commentStatus=' + Kotlin.toString(this.commentStatus)) + (', date=' + Kotlin.toString(this.date)) + (', desiredSlug=' + Kotlin.toString(this.desiredSlug)) + (', editLast=' + Kotlin.toString(this.editLast)) + (', enclosure=' + Kotlin.toString(this.enclosure)) + (', featuredImage=' + Kotlin.toString(this.featuredImage)) + (', guid=' + Kotlin.toString(this.guid)) + (', link=' + Kotlin.toString(this.link)) + (', modified=' + Kotlin.toString(this.modified)) + (', postId=' + Kotlin.toString(this.postId)) + (', slug=' + Kotlin.toString(this.slug)) + (', status=' + Kotlin.toString(this.status)) + (', uri=' + Kotlin.toString(this.uri)) + (', excerpt=' + Kotlin.toString(this.excerpt)) + (', content=' + Kotlin.toString(this.content)) + (', categories=' + Kotlin.toString(this.categories)) + (', tags=' + Kotlin.toString(this.tags)) + (', revisions=' + Kotlin.toString(this.revisions)) + (', comments=' + Kotlin.toString(this.comments)) + ')';
  };
  Post.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.id) | 0;
    result = result * 31 + Kotlin.hashCode(this.author) | 0;
    result = result * 31 + Kotlin.hashCode(this.commentCount) | 0;
    result = result * 31 + Kotlin.hashCode(this.commentStatus) | 0;
    result = result * 31 + Kotlin.hashCode(this.date) | 0;
    result = result * 31 + Kotlin.hashCode(this.desiredSlug) | 0;
    result = result * 31 + Kotlin.hashCode(this.editLast) | 0;
    result = result * 31 + Kotlin.hashCode(this.enclosure) | 0;
    result = result * 31 + Kotlin.hashCode(this.featuredImage) | 0;
    result = result * 31 + Kotlin.hashCode(this.guid) | 0;
    result = result * 31 + Kotlin.hashCode(this.link) | 0;
    result = result * 31 + Kotlin.hashCode(this.modified) | 0;
    result = result * 31 + Kotlin.hashCode(this.postId) | 0;
    result = result * 31 + Kotlin.hashCode(this.slug) | 0;
    result = result * 31 + Kotlin.hashCode(this.status) | 0;
    result = result * 31 + Kotlin.hashCode(this.uri) | 0;
    result = result * 31 + Kotlin.hashCode(this.excerpt) | 0;
    result = result * 31 + Kotlin.hashCode(this.content) | 0;
    result = result * 31 + Kotlin.hashCode(this.categories) | 0;
    result = result * 31 + Kotlin.hashCode(this.tags) | 0;
    result = result * 31 + Kotlin.hashCode(this.revisions) | 0;
    result = result * 31 + Kotlin.hashCode(this.comments) | 0;
    return result;
  };
  Post.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.id, other.id) && Kotlin.equals(this.author, other.author) && Kotlin.equals(this.commentCount, other.commentCount) && Kotlin.equals(this.commentStatus, other.commentStatus) && Kotlin.equals(this.date, other.date) && Kotlin.equals(this.desiredSlug, other.desiredSlug) && Kotlin.equals(this.editLast, other.editLast) && Kotlin.equals(this.enclosure, other.enclosure) && Kotlin.equals(this.featuredImage, other.featuredImage) && Kotlin.equals(this.guid, other.guid) && Kotlin.equals(this.link, other.link) && Kotlin.equals(this.modified, other.modified) && Kotlin.equals(this.postId, other.postId) && Kotlin.equals(this.slug, other.slug) && Kotlin.equals(this.status, other.status) && Kotlin.equals(this.uri, other.uri) && Kotlin.equals(this.excerpt, other.excerpt) && Kotlin.equals(this.content, other.content) && Kotlin.equals(this.categories, other.categories) && Kotlin.equals(this.tags, other.tags) && Kotlin.equals(this.revisions, other.revisions) && Kotlin.equals(this.comments, other.comments)))));
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
  function PostToCategoryConnection(edges, nodes, pageInfo) {
    if (edges === void 0)
      edges = emptyList();
    if (nodes === void 0)
      nodes = emptyList();
    if (pageInfo === void 0)
      pageInfo = null;
    this.edges_jh0ypu$_0 = edges;
    this.nodes_f1mjlp$_0 = nodes;
    this.pageInfo_kb19f$_0 = pageInfo;
  }
  Object.defineProperty(PostToCategoryConnection.prototype, 'edges', {
    get: function () {
      return this.edges_jh0ypu$_0;
    }
  });
  Object.defineProperty(PostToCategoryConnection.prototype, 'nodes', {
    get: function () {
      return this.nodes_f1mjlp$_0;
    }
  });
  Object.defineProperty(PostToCategoryConnection.prototype, 'pageInfo', {
    get: function () {
      return this.pageInfo_kb19f$_0;
    }
  });
  PostToCategoryConnection.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'PostToCategoryConnection',
    interfaces: [Connection]
  };
  PostToCategoryConnection.prototype.component1 = function () {
    return this.edges;
  };
  PostToCategoryConnection.prototype.component2 = function () {
    return this.nodes;
  };
  PostToCategoryConnection.prototype.component3 = function () {
    return this.pageInfo;
  };
  PostToCategoryConnection.prototype.copy_pt7q72$ = function (edges, nodes, pageInfo) {
    return new PostToCategoryConnection(edges === void 0 ? this.edges : edges, nodes === void 0 ? this.nodes : nodes, pageInfo === void 0 ? this.pageInfo : pageInfo);
  };
  PostToCategoryConnection.prototype.toString = function () {
    return 'PostToCategoryConnection(edges=' + Kotlin.toString(this.edges) + (', nodes=' + Kotlin.toString(this.nodes)) + (', pageInfo=' + Kotlin.toString(this.pageInfo)) + ')';
  };
  PostToCategoryConnection.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.edges) | 0;
    result = result * 31 + Kotlin.hashCode(this.nodes) | 0;
    result = result * 31 + Kotlin.hashCode(this.pageInfo) | 0;
    return result;
  };
  PostToCategoryConnection.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.edges, other.edges) && Kotlin.equals(this.nodes, other.nodes) && Kotlin.equals(this.pageInfo, other.pageInfo)))));
  };
  function PostToCategoryConnectionEdge(cursor, node) {
    if (cursor === void 0)
      cursor = null;
    this.cursor_111quf$_0 = cursor;
    this.node_nk67ut$_0 = node;
  }
  Object.defineProperty(PostToCategoryConnectionEdge.prototype, 'cursor', {
    get: function () {
      return this.cursor_111quf$_0;
    }
  });
  Object.defineProperty(PostToCategoryConnectionEdge.prototype, 'node', {
    get: function () {
      return this.node_nk67ut$_0;
    }
  });
  PostToCategoryConnectionEdge.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'PostToCategoryConnectionEdge',
    interfaces: [Edge]
  };
  PostToCategoryConnectionEdge.prototype.component1 = function () {
    return this.cursor;
  };
  PostToCategoryConnectionEdge.prototype.component2 = function () {
    return this.node;
  };
  PostToCategoryConnectionEdge.prototype.copy_qx1eka$ = function (cursor, node) {
    return new PostToCategoryConnectionEdge(cursor === void 0 ? this.cursor : cursor, node === void 0 ? this.node : node);
  };
  PostToCategoryConnectionEdge.prototype.toString = function () {
    return 'PostToCategoryConnectionEdge(cursor=' + Kotlin.toString(this.cursor) + (', node=' + Kotlin.toString(this.node)) + ')';
  };
  PostToCategoryConnectionEdge.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.cursor) | 0;
    result = result * 31 + Kotlin.hashCode(this.node) | 0;
    return result;
  };
  PostToCategoryConnectionEdge.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.cursor, other.cursor) && Kotlin.equals(this.node, other.node)))));
  };
  function PostToCommentConnection(edges, nodes, pageInfo) {
    if (edges === void 0)
      edges = emptyList();
    if (nodes === void 0)
      nodes = emptyList();
    if (pageInfo === void 0)
      pageInfo = null;
    this.edges_62kap9$_0 = edges;
    this.nodes_ahypte$_0 = nodes;
    this.pageInfo_x88ono$_0 = pageInfo;
  }
  Object.defineProperty(PostToCommentConnection.prototype, 'edges', {
    get: function () {
      return this.edges_62kap9$_0;
    }
  });
  Object.defineProperty(PostToCommentConnection.prototype, 'nodes', {
    get: function () {
      return this.nodes_ahypte$_0;
    }
  });
  Object.defineProperty(PostToCommentConnection.prototype, 'pageInfo', {
    get: function () {
      return this.pageInfo_x88ono$_0;
    }
  });
  PostToCommentConnection.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'PostToCommentConnection',
    interfaces: [Connection]
  };
  PostToCommentConnection.prototype.component1 = function () {
    return this.edges;
  };
  PostToCommentConnection.prototype.component2 = function () {
    return this.nodes;
  };
  PostToCommentConnection.prototype.component3 = function () {
    return this.pageInfo;
  };
  PostToCommentConnection.prototype.copy_hkaywe$ = function (edges, nodes, pageInfo) {
    return new PostToCommentConnection(edges === void 0 ? this.edges : edges, nodes === void 0 ? this.nodes : nodes, pageInfo === void 0 ? this.pageInfo : pageInfo);
  };
  PostToCommentConnection.prototype.toString = function () {
    return 'PostToCommentConnection(edges=' + Kotlin.toString(this.edges) + (', nodes=' + Kotlin.toString(this.nodes)) + (', pageInfo=' + Kotlin.toString(this.pageInfo)) + ')';
  };
  PostToCommentConnection.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.edges) | 0;
    result = result * 31 + Kotlin.hashCode(this.nodes) | 0;
    result = result * 31 + Kotlin.hashCode(this.pageInfo) | 0;
    return result;
  };
  PostToCommentConnection.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.edges, other.edges) && Kotlin.equals(this.nodes, other.nodes) && Kotlin.equals(this.pageInfo, other.pageInfo)))));
  };
  function PostToCommentConnectionEdge(cursor, node) {
    if (cursor === void 0)
      cursor = null;
    this.cursor_3pgyug$_0 = cursor;
    this.node_93rfjg$_0 = node;
  }
  Object.defineProperty(PostToCommentConnectionEdge.prototype, 'cursor', {
    get: function () {
      return this.cursor_3pgyug$_0;
    }
  });
  Object.defineProperty(PostToCommentConnectionEdge.prototype, 'node', {
    get: function () {
      return this.node_93rfjg$_0;
    }
  });
  PostToCommentConnectionEdge.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'PostToCommentConnectionEdge',
    interfaces: [Edge]
  };
  PostToCommentConnectionEdge.prototype.component1 = function () {
    return this.cursor;
  };
  PostToCommentConnectionEdge.prototype.component2 = function () {
    return this.node;
  };
  PostToCommentConnectionEdge.prototype.copy_spndex$ = function (cursor, node) {
    return new PostToCommentConnectionEdge(cursor === void 0 ? this.cursor : cursor, node === void 0 ? this.node : node);
  };
  PostToCommentConnectionEdge.prototype.toString = function () {
    return 'PostToCommentConnectionEdge(cursor=' + Kotlin.toString(this.cursor) + (', node=' + Kotlin.toString(this.node)) + ')';
  };
  PostToCommentConnectionEdge.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.cursor) | 0;
    result = result * 31 + Kotlin.hashCode(this.node) | 0;
    return result;
  };
  PostToCommentConnectionEdge.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.cursor, other.cursor) && Kotlin.equals(this.node, other.node)))));
  };
  function PostToRevisionConnection(edges, nodes, pageInfo) {
    if (edges === void 0)
      edges = emptyList();
    if (nodes === void 0)
      nodes = emptyList();
    if (pageInfo === void 0)
      pageInfo = null;
    this.edges_s3h05d$_0 = edges;
    this.nodes_wivf9i$_0 = nodes;
    this.pageInfo_3jkc5c$_0 = pageInfo;
  }
  Object.defineProperty(PostToRevisionConnection.prototype, 'edges', {
    get: function () {
      return this.edges_s3h05d$_0;
    }
  });
  Object.defineProperty(PostToRevisionConnection.prototype, 'nodes', {
    get: function () {
      return this.nodes_wivf9i$_0;
    }
  });
  Object.defineProperty(PostToRevisionConnection.prototype, 'pageInfo', {
    get: function () {
      return this.pageInfo_3jkc5c$_0;
    }
  });
  PostToRevisionConnection.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'PostToRevisionConnection',
    interfaces: [Connection]
  };
  PostToRevisionConnection.prototype.component1 = function () {
    return this.edges;
  };
  PostToRevisionConnection.prototype.component2 = function () {
    return this.nodes;
  };
  PostToRevisionConnection.prototype.component3 = function () {
    return this.pageInfo;
  };
  PostToRevisionConnection.prototype.copy_9n3try$ = function (edges, nodes, pageInfo) {
    return new PostToRevisionConnection(edges === void 0 ? this.edges : edges, nodes === void 0 ? this.nodes : nodes, pageInfo === void 0 ? this.pageInfo : pageInfo);
  };
  PostToRevisionConnection.prototype.toString = function () {
    return 'PostToRevisionConnection(edges=' + Kotlin.toString(this.edges) + (', nodes=' + Kotlin.toString(this.nodes)) + (', pageInfo=' + Kotlin.toString(this.pageInfo)) + ')';
  };
  PostToRevisionConnection.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.edges) | 0;
    result = result * 31 + Kotlin.hashCode(this.nodes) | 0;
    result = result * 31 + Kotlin.hashCode(this.pageInfo) | 0;
    return result;
  };
  PostToRevisionConnection.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.edges, other.edges) && Kotlin.equals(this.nodes, other.nodes) && Kotlin.equals(this.pageInfo, other.pageInfo)))));
  };
  function PostToRevisionConnectionEdge(cursor, node) {
    if (cursor === void 0)
      cursor = null;
    this.cursor_mzv5tw$_0 = cursor;
    this.node_kkwwyw$_0 = node;
  }
  Object.defineProperty(PostToRevisionConnectionEdge.prototype, 'cursor', {
    get: function () {
      return this.cursor_mzv5tw$_0;
    }
  });
  Object.defineProperty(PostToRevisionConnectionEdge.prototype, 'node', {
    get: function () {
      return this.node_kkwwyw$_0;
    }
  });
  PostToRevisionConnectionEdge.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'PostToRevisionConnectionEdge',
    interfaces: [Edge]
  };
  PostToRevisionConnectionEdge.prototype.component1 = function () {
    return this.cursor;
  };
  PostToRevisionConnectionEdge.prototype.component2 = function () {
    return this.node;
  };
  PostToRevisionConnectionEdge.prototype.copy_w2dl3x$ = function (cursor, node) {
    return new PostToRevisionConnectionEdge(cursor === void 0 ? this.cursor : cursor, node === void 0 ? this.node : node);
  };
  PostToRevisionConnectionEdge.prototype.toString = function () {
    return 'PostToRevisionConnectionEdge(cursor=' + Kotlin.toString(this.cursor) + (', node=' + Kotlin.toString(this.node)) + ')';
  };
  PostToRevisionConnectionEdge.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.cursor) | 0;
    result = result * 31 + Kotlin.hashCode(this.node) | 0;
    return result;
  };
  PostToRevisionConnectionEdge.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.cursor, other.cursor) && Kotlin.equals(this.node, other.node)))));
  };
  function PostToTagConnection(edges, nodes, pageInfo) {
    if (edges === void 0)
      edges = emptyList();
    if (nodes === void 0)
      nodes = emptyList();
    if (pageInfo === void 0)
      pageInfo = null;
    this.edges_kg8a4y$_0 = edges;
    this.nodes_ovmp93$_0 = nodes;
    this.pageInfo_t0n05r$_0 = pageInfo;
  }
  Object.defineProperty(PostToTagConnection.prototype, 'edges', {
    get: function () {
      return this.edges_kg8a4y$_0;
    }
  });
  Object.defineProperty(PostToTagConnection.prototype, 'nodes', {
    get: function () {
      return this.nodes_ovmp93$_0;
    }
  });
  Object.defineProperty(PostToTagConnection.prototype, 'pageInfo', {
    get: function () {
      return this.pageInfo_t0n05r$_0;
    }
  });
  PostToTagConnection.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'PostToTagConnection',
    interfaces: [Connection]
  };
  PostToTagConnection.prototype.component1 = function () {
    return this.edges;
  };
  PostToTagConnection.prototype.component2 = function () {
    return this.nodes;
  };
  PostToTagConnection.prototype.component3 = function () {
    return this.pageInfo;
  };
  PostToTagConnection.prototype.copy_otdh5o$ = function (edges, nodes, pageInfo) {
    return new PostToTagConnection(edges === void 0 ? this.edges : edges, nodes === void 0 ? this.nodes : nodes, pageInfo === void 0 ? this.pageInfo : pageInfo);
  };
  PostToTagConnection.prototype.toString = function () {
    return 'PostToTagConnection(edges=' + Kotlin.toString(this.edges) + (', nodes=' + Kotlin.toString(this.nodes)) + (', pageInfo=' + Kotlin.toString(this.pageInfo)) + ')';
  };
  PostToTagConnection.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.edges) | 0;
    result = result * 31 + Kotlin.hashCode(this.nodes) | 0;
    result = result * 31 + Kotlin.hashCode(this.pageInfo) | 0;
    return result;
  };
  PostToTagConnection.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.edges, other.edges) && Kotlin.equals(this.nodes, other.nodes) && Kotlin.equals(this.pageInfo, other.pageInfo)))));
  };
  function PostToTagConnectionEdge(cursor, node) {
    if (cursor === void 0)
      cursor = null;
    this.cursor_1vssj1$_0 = cursor;
    this.node_4w5r1j$_0 = node;
  }
  Object.defineProperty(PostToTagConnectionEdge.prototype, 'cursor', {
    get: function () {
      return this.cursor_1vssj1$_0;
    }
  });
  Object.defineProperty(PostToTagConnectionEdge.prototype, 'node', {
    get: function () {
      return this.node_4w5r1j$_0;
    }
  });
  PostToTagConnectionEdge.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'PostToTagConnectionEdge',
    interfaces: [Edge]
  };
  PostToTagConnectionEdge.prototype.component1 = function () {
    return this.cursor;
  };
  PostToTagConnectionEdge.prototype.component2 = function () {
    return this.node;
  };
  PostToTagConnectionEdge.prototype.copy_ctqg0i$ = function (cursor, node) {
    return new PostToTagConnectionEdge(cursor === void 0 ? this.cursor : cursor, node === void 0 ? this.node : node);
  };
  PostToTagConnectionEdge.prototype.toString = function () {
    return 'PostToTagConnectionEdge(cursor=' + Kotlin.toString(this.cursor) + (', node=' + Kotlin.toString(this.node)) + ')';
  };
  PostToTagConnectionEdge.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.cursor) | 0;
    result = result * 31 + Kotlin.hashCode(this.node) | 0;
    return result;
  };
  PostToTagConnectionEdge.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.cursor, other.cursor) && Kotlin.equals(this.node, other.node)))));
  };
  function Revision(id, author, commentStatus, date, desiredSlug, editLast, enclosure, guid, link, menuOrder, modified, revisionId, slug, uri) {
    if (author === void 0)
      author = null;
    if (commentStatus === void 0)
      commentStatus = null;
    if (date === void 0)
      date = null;
    if (desiredSlug === void 0)
      desiredSlug = null;
    if (editLast === void 0)
      editLast = null;
    if (enclosure === void 0)
      enclosure = null;
    if (guid === void 0)
      guid = null;
    if (link === void 0)
      link = null;
    if (menuOrder === void 0)
      menuOrder = null;
    if (modified === void 0)
      modified = null;
    if (slug === void 0)
      slug = null;
    if (uri === void 0)
      uri = null;
    this.id_mqeynd$_0 = id;
    this.author = author;
    this.commentStatus = commentStatus;
    this.date = date;
    this.desiredSlug = desiredSlug;
    this.editLast = editLast;
    this.enclosure = enclosure;
    this.guid = guid;
    this.link = link;
    this.menuOrder = menuOrder;
    this.modified = modified;
    this.revisionId = revisionId;
    this.slug = slug;
    this.uri = uri;
  }
  Object.defineProperty(Revision.prototype, 'id', {
    get: function () {
      return this.id_mqeynd$_0;
    }
  });
  Revision.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Revision',
    interfaces: [Node]
  };
  Revision.prototype.component1 = function () {
    return this.id;
  };
  Revision.prototype.component2 = function () {
    return this.author;
  };
  Revision.prototype.component3 = function () {
    return this.commentStatus;
  };
  Revision.prototype.component4 = function () {
    return this.date;
  };
  Revision.prototype.component5 = function () {
    return this.desiredSlug;
  };
  Revision.prototype.component6 = function () {
    return this.editLast;
  };
  Revision.prototype.component7 = function () {
    return this.enclosure;
  };
  Revision.prototype.component8 = function () {
    return this.guid;
  };
  Revision.prototype.component9 = function () {
    return this.link;
  };
  Revision.prototype.component10 = function () {
    return this.menuOrder;
  };
  Revision.prototype.component11 = function () {
    return this.modified;
  };
  Revision.prototype.component12 = function () {
    return this.revisionId;
  };
  Revision.prototype.component13 = function () {
    return this.slug;
  };
  Revision.prototype.component14 = function () {
    return this.uri;
  };
  Revision.prototype.copy_vej6k0$ = function (id, author, commentStatus, date, desiredSlug, editLast, enclosure, guid, link, menuOrder, modified, revisionId, slug, uri) {
    return new Revision(id === void 0 ? this.id : id, author === void 0 ? this.author : author, commentStatus === void 0 ? this.commentStatus : commentStatus, date === void 0 ? this.date : date, desiredSlug === void 0 ? this.desiredSlug : desiredSlug, editLast === void 0 ? this.editLast : editLast, enclosure === void 0 ? this.enclosure : enclosure, guid === void 0 ? this.guid : guid, link === void 0 ? this.link : link, menuOrder === void 0 ? this.menuOrder : menuOrder, modified === void 0 ? this.modified : modified, revisionId === void 0 ? this.revisionId : revisionId, slug === void 0 ? this.slug : slug, uri === void 0 ? this.uri : uri);
  };
  Revision.prototype.toString = function () {
    return 'Revision(id=' + Kotlin.toString(this.id) + (', author=' + Kotlin.toString(this.author)) + (', commentStatus=' + Kotlin.toString(this.commentStatus)) + (', date=' + Kotlin.toString(this.date)) + (', desiredSlug=' + Kotlin.toString(this.desiredSlug)) + (', editLast=' + Kotlin.toString(this.editLast)) + (', enclosure=' + Kotlin.toString(this.enclosure)) + (', guid=' + Kotlin.toString(this.guid)) + (', link=' + Kotlin.toString(this.link)) + (', menuOrder=' + Kotlin.toString(this.menuOrder)) + (', modified=' + Kotlin.toString(this.modified)) + (', revisionId=' + Kotlin.toString(this.revisionId)) + (', slug=' + Kotlin.toString(this.slug)) + (', uri=' + Kotlin.toString(this.uri)) + ')';
  };
  Revision.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.id) | 0;
    result = result * 31 + Kotlin.hashCode(this.author) | 0;
    result = result * 31 + Kotlin.hashCode(this.commentStatus) | 0;
    result = result * 31 + Kotlin.hashCode(this.date) | 0;
    result = result * 31 + Kotlin.hashCode(this.desiredSlug) | 0;
    result = result * 31 + Kotlin.hashCode(this.editLast) | 0;
    result = result * 31 + Kotlin.hashCode(this.enclosure) | 0;
    result = result * 31 + Kotlin.hashCode(this.guid) | 0;
    result = result * 31 + Kotlin.hashCode(this.link) | 0;
    result = result * 31 + Kotlin.hashCode(this.menuOrder) | 0;
    result = result * 31 + Kotlin.hashCode(this.modified) | 0;
    result = result * 31 + Kotlin.hashCode(this.revisionId) | 0;
    result = result * 31 + Kotlin.hashCode(this.slug) | 0;
    result = result * 31 + Kotlin.hashCode(this.uri) | 0;
    return result;
  };
  Revision.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.id, other.id) && Kotlin.equals(this.author, other.author) && Kotlin.equals(this.commentStatus, other.commentStatus) && Kotlin.equals(this.date, other.date) && Kotlin.equals(this.desiredSlug, other.desiredSlug) && Kotlin.equals(this.editLast, other.editLast) && Kotlin.equals(this.enclosure, other.enclosure) && Kotlin.equals(this.guid, other.guid) && Kotlin.equals(this.link, other.link) && Kotlin.equals(this.menuOrder, other.menuOrder) && Kotlin.equals(this.modified, other.modified) && Kotlin.equals(this.revisionId, other.revisionId) && Kotlin.equals(this.slug, other.slug) && Kotlin.equals(this.uri, other.uri)))));
  };
  function RootQueryToMenuConnection(edges, nodes, pageInfo) {
    if (edges === void 0)
      edges = emptyList();
    if (nodes === void 0)
      nodes = emptyList();
    if (pageInfo === void 0)
      pageInfo = null;
    this.edges_t26vin$_0 = edges;
    this.nodes_omsgei$_0 = nodes;
    this.pageInfo_h4edf4$_0 = pageInfo;
  }
  Object.defineProperty(RootQueryToMenuConnection.prototype, 'edges', {
    get: function () {
      return this.edges_t26vin$_0;
    }
  });
  Object.defineProperty(RootQueryToMenuConnection.prototype, 'nodes', {
    get: function () {
      return this.nodes_omsgei$_0;
    }
  });
  Object.defineProperty(RootQueryToMenuConnection.prototype, 'pageInfo', {
    get: function () {
      return this.pageInfo_h4edf4$_0;
    }
  });
  RootQueryToMenuConnection.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'RootQueryToMenuConnection',
    interfaces: [Connection]
  };
  function RootQueryToMenuConnectionEdge(cursor, node) {
    if (cursor === void 0)
      cursor = null;
    this.cursor_j3a1t8$_0 = cursor;
    this.node_ts8ffs$_0 = node;
  }
  Object.defineProperty(RootQueryToMenuConnectionEdge.prototype, 'cursor', {
    get: function () {
      return this.cursor_j3a1t8$_0;
    }
  });
  Object.defineProperty(RootQueryToMenuConnectionEdge.prototype, 'node', {
    get: function () {
      return this.node_ts8ffs$_0;
    }
  });
  RootQueryToMenuConnectionEdge.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'RootQueryToMenuConnectionEdge',
    interfaces: [Edge]
  };
  RootQueryToMenuConnectionEdge.prototype.component1 = function () {
    return this.cursor;
  };
  RootQueryToMenuConnectionEdge.prototype.component2 = function () {
    return this.node;
  };
  RootQueryToMenuConnectionEdge.prototype.copy_sl0x3t$ = function (cursor, node) {
    return new RootQueryToMenuConnectionEdge(cursor === void 0 ? this.cursor : cursor, node === void 0 ? this.node : node);
  };
  RootQueryToMenuConnectionEdge.prototype.toString = function () {
    return 'RootQueryToMenuConnectionEdge(cursor=' + Kotlin.toString(this.cursor) + (', node=' + Kotlin.toString(this.node)) + ')';
  };
  RootQueryToMenuConnectionEdge.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.cursor) | 0;
    result = result * 31 + Kotlin.hashCode(this.node) | 0;
    return result;
  };
  RootQueryToMenuConnectionEdge.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.cursor, other.cursor) && Kotlin.equals(this.node, other.node)))));
  };
  function RootQueryToPageConnection(edges, nodes, pageInfo) {
    if (edges === void 0)
      edges = emptyList();
    if (nodes === void 0)
      nodes = emptyList();
    if (pageInfo === void 0)
      pageInfo = null;
    this.edges_eww5vl$_0 = edges;
    this.nodes_jcakzq$_0 = nodes;
    this.pageInfo_66x48w$_0 = pageInfo;
  }
  Object.defineProperty(RootQueryToPageConnection.prototype, 'edges', {
    get: function () {
      return this.edges_eww5vl$_0;
    }
  });
  Object.defineProperty(RootQueryToPageConnection.prototype, 'nodes', {
    get: function () {
      return this.nodes_jcakzq$_0;
    }
  });
  Object.defineProperty(RootQueryToPageConnection.prototype, 'pageInfo', {
    get: function () {
      return this.pageInfo_66x48w$_0;
    }
  });
  RootQueryToPageConnection.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'RootQueryToPageConnection',
    interfaces: [Connection]
  };
  RootQueryToPageConnection.prototype.component1 = function () {
    return this.edges;
  };
  RootQueryToPageConnection.prototype.component2 = function () {
    return this.nodes;
  };
  RootQueryToPageConnection.prototype.component3 = function () {
    return this.pageInfo;
  };
  RootQueryToPageConnection.prototype.copy_ohaf3s$ = function (edges, nodes, pageInfo) {
    return new RootQueryToPageConnection(edges === void 0 ? this.edges : edges, nodes === void 0 ? this.nodes : nodes, pageInfo === void 0 ? this.pageInfo : pageInfo);
  };
  RootQueryToPageConnection.prototype.toString = function () {
    return 'RootQueryToPageConnection(edges=' + Kotlin.toString(this.edges) + (', nodes=' + Kotlin.toString(this.nodes)) + (', pageInfo=' + Kotlin.toString(this.pageInfo)) + ')';
  };
  RootQueryToPageConnection.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.edges) | 0;
    result = result * 31 + Kotlin.hashCode(this.nodes) | 0;
    result = result * 31 + Kotlin.hashCode(this.pageInfo) | 0;
    return result;
  };
  RootQueryToPageConnection.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.edges, other.edges) && Kotlin.equals(this.nodes, other.nodes) && Kotlin.equals(this.pageInfo, other.pageInfo)))));
  };
  function RootQueryToPageConnectionEdge(cursor, node) {
    if (cursor === void 0)
      cursor = null;
    this.cursor_bbz9ms$_0 = cursor;
    this.node_hxk4vc$_0 = node;
  }
  Object.defineProperty(RootQueryToPageConnectionEdge.prototype, 'cursor', {
    get: function () {
      return this.cursor_bbz9ms$_0;
    }
  });
  Object.defineProperty(RootQueryToPageConnectionEdge.prototype, 'node', {
    get: function () {
      return this.node_hxk4vc$_0;
    }
  });
  RootQueryToPageConnectionEdge.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'RootQueryToPageConnectionEdge',
    interfaces: [Edge]
  };
  RootQueryToPageConnectionEdge.prototype.component1 = function () {
    return this.cursor;
  };
  RootQueryToPageConnectionEdge.prototype.component2 = function () {
    return this.node;
  };
  RootQueryToPageConnectionEdge.prototype.copy_skz3ah$ = function (cursor, node) {
    return new RootQueryToPageConnectionEdge(cursor === void 0 ? this.cursor : cursor, node === void 0 ? this.node : node);
  };
  RootQueryToPageConnectionEdge.prototype.toString = function () {
    return 'RootQueryToPageConnectionEdge(cursor=' + Kotlin.toString(this.cursor) + (', node=' + Kotlin.toString(this.node)) + ')';
  };
  RootQueryToPageConnectionEdge.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.cursor) | 0;
    result = result * 31 + Kotlin.hashCode(this.node) | 0;
    return result;
  };
  RootQueryToPageConnectionEdge.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.cursor, other.cursor) && Kotlin.equals(this.node, other.node)))));
  };
  function RootQueryToPostConnection(edges, nodes, pageInfo) {
    if (edges === void 0)
      edges = emptyList();
    if (nodes === void 0)
      nodes = emptyList();
    if (pageInfo === void 0)
      pageInfo = null;
    this.edges_2j8vdc$_0 = edges;
    this.nodes_6ynahh$_0 = nodes;
    this.pageInfo_de27o1$_0 = pageInfo;
  }
  Object.defineProperty(RootQueryToPostConnection.prototype, 'edges', {
    get: function () {
      return this.edges_2j8vdc$_0;
    }
  });
  Object.defineProperty(RootQueryToPostConnection.prototype, 'nodes', {
    get: function () {
      return this.nodes_6ynahh$_0;
    }
  });
  Object.defineProperty(RootQueryToPostConnection.prototype, 'pageInfo', {
    get: function () {
      return this.pageInfo_de27o1$_0;
    }
  });
  RootQueryToPostConnection.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'RootQueryToPostConnection',
    interfaces: [Connection]
  };
  RootQueryToPostConnection.prototype.component1 = function () {
    return this.edges;
  };
  RootQueryToPostConnection.prototype.component2 = function () {
    return this.nodes;
  };
  RootQueryToPostConnection.prototype.component3 = function () {
    return this.pageInfo;
  };
  RootQueryToPostConnection.prototype.copy_6jbv1k$ = function (edges, nodes, pageInfo) {
    return new RootQueryToPostConnection(edges === void 0 ? this.edges : edges, nodes === void 0 ? this.nodes : nodes, pageInfo === void 0 ? this.pageInfo : pageInfo);
  };
  RootQueryToPostConnection.prototype.toString = function () {
    return 'RootQueryToPostConnection(edges=' + Kotlin.toString(this.edges) + (', nodes=' + Kotlin.toString(this.nodes)) + (', pageInfo=' + Kotlin.toString(this.pageInfo)) + ')';
  };
  RootQueryToPostConnection.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.edges) | 0;
    result = result * 31 + Kotlin.hashCode(this.nodes) | 0;
    result = result * 31 + Kotlin.hashCode(this.pageInfo) | 0;
    return result;
  };
  RootQueryToPostConnection.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.edges, other.edges) && Kotlin.equals(this.nodes, other.nodes) && Kotlin.equals(this.pageInfo, other.pageInfo)))));
  };
  function RootQueryToPostConnectionEdge(cursor, node) {
    if (cursor === void 0)
      cursor = null;
    this.cursor_w21stn$_0 = cursor;
    this.node_aqf1g7$_0 = node;
  }
  Object.defineProperty(RootQueryToPostConnectionEdge.prototype, 'cursor', {
    get: function () {
      return this.cursor_w21stn$_0;
    }
  });
  Object.defineProperty(RootQueryToPostConnectionEdge.prototype, 'node', {
    get: function () {
      return this.node_aqf1g7$_0;
    }
  });
  RootQueryToPostConnectionEdge.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'RootQueryToPostConnectionEdge',
    interfaces: [Edge]
  };
  RootQueryToPostConnectionEdge.prototype.component1 = function () {
    return this.cursor;
  };
  RootQueryToPostConnectionEdge.prototype.component2 = function () {
    return this.node;
  };
  RootQueryToPostConnectionEdge.prototype.copy_skysm0$ = function (cursor, node) {
    return new RootQueryToPostConnectionEdge(cursor === void 0 ? this.cursor : cursor, node === void 0 ? this.node : node);
  };
  RootQueryToPostConnectionEdge.prototype.toString = function () {
    return 'RootQueryToPostConnectionEdge(cursor=' + Kotlin.toString(this.cursor) + (', node=' + Kotlin.toString(this.node)) + ')';
  };
  RootQueryToPostConnectionEdge.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.cursor) | 0;
    result = result * 31 + Kotlin.hashCode(this.node) | 0;
    return result;
  };
  RootQueryToPostConnectionEdge.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.cursor, other.cursor) && Kotlin.equals(this.node, other.node)))));
  };
  function RootQueryToUserConnection(edges, nodes, pageInfo) {
    if (edges === void 0)
      edges = emptyList();
    if (nodes === void 0)
      nodes = emptyList();
    if (pageInfo === void 0)
      pageInfo = null;
    this.edges_8dlgjp$_0 = edges;
    this.nodes_cszvnu$_0 = nodes;
    this.pageInfo_d5vytg$_0 = pageInfo;
  }
  Object.defineProperty(RootQueryToUserConnection.prototype, 'edges', {
    get: function () {
      return this.edges_8dlgjp$_0;
    }
  });
  Object.defineProperty(RootQueryToUserConnection.prototype, 'nodes', {
    get: function () {
      return this.nodes_cszvnu$_0;
    }
  });
  Object.defineProperty(RootQueryToUserConnection.prototype, 'pageInfo', {
    get: function () {
      return this.pageInfo_d5vytg$_0;
    }
  });
  RootQueryToUserConnection.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'RootQueryToUserConnection',
    interfaces: [Connection]
  };
  RootQueryToUserConnection.prototype.component1 = function () {
    return this.edges;
  };
  RootQueryToUserConnection.prototype.component2 = function () {
    return this.nodes;
  };
  RootQueryToUserConnection.prototype.component3 = function () {
    return this.pageInfo;
  };
  RootQueryToUserConnection.prototype.copy_jzaw7c$ = function (edges, nodes, pageInfo) {
    return new RootQueryToUserConnection(edges === void 0 ? this.edges : edges, nodes === void 0 ? this.nodes : nodes, pageInfo === void 0 ? this.pageInfo : pageInfo);
  };
  RootQueryToUserConnection.prototype.toString = function () {
    return 'RootQueryToUserConnection(edges=' + Kotlin.toString(this.edges) + (', nodes=' + Kotlin.toString(this.nodes)) + (', pageInfo=' + Kotlin.toString(this.pageInfo)) + ')';
  };
  RootQueryToUserConnection.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.edges) | 0;
    result = result * 31 + Kotlin.hashCode(this.nodes) | 0;
    result = result * 31 + Kotlin.hashCode(this.pageInfo) | 0;
    return result;
  };
  RootQueryToUserConnection.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.edges, other.edges) && Kotlin.equals(this.nodes, other.nodes) && Kotlin.equals(this.pageInfo, other.pageInfo)))));
  };
  function RootQueryToUserConnectionEdge(cursor, node) {
    if (cursor === void 0)
      cursor = null;
    this.cursor_kj2tvk$_0 = cursor;
    this.node_xqqu1g$_0 = node;
  }
  Object.defineProperty(RootQueryToUserConnectionEdge.prototype, 'cursor', {
    get: function () {
      return this.cursor_kj2tvk$_0;
    }
  });
  Object.defineProperty(RootQueryToUserConnectionEdge.prototype, 'node', {
    get: function () {
      return this.node_xqqu1g$_0;
    }
  });
  RootQueryToUserConnectionEdge.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'RootQueryToUserConnectionEdge',
    interfaces: [Edge]
  };
  RootQueryToUserConnectionEdge.prototype.component1 = function () {
    return this.cursor;
  };
  RootQueryToUserConnectionEdge.prototype.component2 = function () {
    return this.node;
  };
  RootQueryToUserConnectionEdge.prototype.copy_skvj1p$ = function (cursor, node) {
    return new RootQueryToUserConnectionEdge(cursor === void 0 ? this.cursor : cursor, node === void 0 ? this.node : node);
  };
  RootQueryToUserConnectionEdge.prototype.toString = function () {
    return 'RootQueryToUserConnectionEdge(cursor=' + Kotlin.toString(this.cursor) + (', node=' + Kotlin.toString(this.node)) + ')';
  };
  RootQueryToUserConnectionEdge.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.cursor) | 0;
    result = result * 31 + Kotlin.hashCode(this.node) | 0;
    return result;
  };
  RootQueryToUserConnectionEdge.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.cursor, other.cursor) && Kotlin.equals(this.node, other.node)))));
  };
  function Tag(id, count, description, link, name, slug, tagId, termGroupId) {
    if (count === void 0)
      count = null;
    if (description === void 0)
      description = null;
    if (link === void 0)
      link = null;
    if (name === void 0)
      name = null;
    if (slug === void 0)
      slug = null;
    if (tagId === void 0)
      tagId = null;
    if (termGroupId === void 0)
      termGroupId = null;
    this.id_wc24fm$_0 = id;
    this.count = count;
    this.description = description;
    this.link = link;
    this.name = name;
    this.slug = slug;
    this.tagId = tagId;
    this.termGroupId = termGroupId;
  }
  Object.defineProperty(Tag.prototype, 'id', {
    get: function () {
      return this.id_wc24fm$_0;
    }
  });
  Tag.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Tag',
    interfaces: [Node]
  };
  Tag.prototype.component1 = function () {
    return this.id;
  };
  Tag.prototype.component2 = function () {
    return this.count;
  };
  Tag.prototype.component3 = function () {
    return this.description;
  };
  Tag.prototype.component4 = function () {
    return this.link;
  };
  Tag.prototype.component5 = function () {
    return this.name;
  };
  Tag.prototype.component6 = function () {
    return this.slug;
  };
  Tag.prototype.component7 = function () {
    return this.tagId;
  };
  Tag.prototype.component8 = function () {
    return this.termGroupId;
  };
  Tag.prototype.copy_w321u9$ = function (id, count, description, link, name, slug, tagId, termGroupId) {
    return new Tag(id === void 0 ? this.id : id, count === void 0 ? this.count : count, description === void 0 ? this.description : description, link === void 0 ? this.link : link, name === void 0 ? this.name : name, slug === void 0 ? this.slug : slug, tagId === void 0 ? this.tagId : tagId, termGroupId === void 0 ? this.termGroupId : termGroupId);
  };
  Tag.prototype.toString = function () {
    return 'Tag(id=' + Kotlin.toString(this.id) + (', count=' + Kotlin.toString(this.count)) + (', description=' + Kotlin.toString(this.description)) + (', link=' + Kotlin.toString(this.link)) + (', name=' + Kotlin.toString(this.name)) + (', slug=' + Kotlin.toString(this.slug)) + (', tagId=' + Kotlin.toString(this.tagId)) + (', termGroupId=' + Kotlin.toString(this.termGroupId)) + ')';
  };
  Tag.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.id) | 0;
    result = result * 31 + Kotlin.hashCode(this.count) | 0;
    result = result * 31 + Kotlin.hashCode(this.description) | 0;
    result = result * 31 + Kotlin.hashCode(this.link) | 0;
    result = result * 31 + Kotlin.hashCode(this.name) | 0;
    result = result * 31 + Kotlin.hashCode(this.slug) | 0;
    result = result * 31 + Kotlin.hashCode(this.tagId) | 0;
    result = result * 31 + Kotlin.hashCode(this.termGroupId) | 0;
    return result;
  };
  Tag.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.id, other.id) && Kotlin.equals(this.count, other.count) && Kotlin.equals(this.description, other.description) && Kotlin.equals(this.link, other.link) && Kotlin.equals(this.name, other.name) && Kotlin.equals(this.slug, other.slug) && Kotlin.equals(this.tagId, other.tagId) && Kotlin.equals(this.termGroupId, other.termGroupId)))));
  };
  function User(id, description, email, firstName, lastName, locale, name, nicename, nickname, registeredDate, slug, url, userId, username) {
    if (description === void 0)
      description = null;
    if (email === void 0)
      email = null;
    if (firstName === void 0)
      firstName = null;
    if (lastName === void 0)
      lastName = null;
    if (locale === void 0)
      locale = null;
    if (name === void 0)
      name = null;
    if (nicename === void 0)
      nicename = null;
    if (nickname === void 0)
      nickname = null;
    if (registeredDate === void 0)
      registeredDate = null;
    if (slug === void 0)
      slug = null;
    if (url === void 0)
      url = null;
    if (userId === void 0)
      userId = null;
    if (username === void 0)
      username = null;
    this.id_10bjh5$_0 = id;
    this.description = description;
    this.email = email;
    this.firstName = firstName;
    this.lastName = lastName;
    this.locale = locale;
    this.name = name;
    this.nicename = nicename;
    this.nickname = nickname;
    this.registeredDate = registeredDate;
    this.slug = slug;
    this.url = url;
    this.userId = userId;
    this.username = username;
  }
  Object.defineProperty(User.prototype, 'id', {
    get: function () {
      return this.id_10bjh5$_0;
    }
  });
  User.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'User',
    interfaces: [Node]
  };
  User.prototype.component1 = function () {
    return this.id;
  };
  User.prototype.component2 = function () {
    return this.description;
  };
  User.prototype.component3 = function () {
    return this.email;
  };
  User.prototype.component4 = function () {
    return this.firstName;
  };
  User.prototype.component5 = function () {
    return this.lastName;
  };
  User.prototype.component6 = function () {
    return this.locale;
  };
  User.prototype.component7 = function () {
    return this.name;
  };
  User.prototype.component8 = function () {
    return this.nicename;
  };
  User.prototype.component9 = function () {
    return this.nickname;
  };
  User.prototype.component10 = function () {
    return this.registeredDate;
  };
  User.prototype.component11 = function () {
    return this.slug;
  };
  User.prototype.component12 = function () {
    return this.url;
  };
  User.prototype.component13 = function () {
    return this.userId;
  };
  User.prototype.component14 = function () {
    return this.username;
  };
  User.prototype.copy_b3uuc3$ = function (id, description, email, firstName, lastName, locale, name, nicename, nickname, registeredDate, slug, url, userId, username) {
    return new User(id === void 0 ? this.id : id, description === void 0 ? this.description : description, email === void 0 ? this.email : email, firstName === void 0 ? this.firstName : firstName, lastName === void 0 ? this.lastName : lastName, locale === void 0 ? this.locale : locale, name === void 0 ? this.name : name, nicename === void 0 ? this.nicename : nicename, nickname === void 0 ? this.nickname : nickname, registeredDate === void 0 ? this.registeredDate : registeredDate, slug === void 0 ? this.slug : slug, url === void 0 ? this.url : url, userId === void 0 ? this.userId : userId, username === void 0 ? this.username : username);
  };
  User.prototype.toString = function () {
    return 'User(id=' + Kotlin.toString(this.id) + (', description=' + Kotlin.toString(this.description)) + (', email=' + Kotlin.toString(this.email)) + (', firstName=' + Kotlin.toString(this.firstName)) + (', lastName=' + Kotlin.toString(this.lastName)) + (', locale=' + Kotlin.toString(this.locale)) + (', name=' + Kotlin.toString(this.name)) + (', nicename=' + Kotlin.toString(this.nicename)) + (', nickname=' + Kotlin.toString(this.nickname)) + (', registeredDate=' + Kotlin.toString(this.registeredDate)) + (', slug=' + Kotlin.toString(this.slug)) + (', url=' + Kotlin.toString(this.url)) + (', userId=' + Kotlin.toString(this.userId)) + (', username=' + Kotlin.toString(this.username)) + ')';
  };
  User.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.id) | 0;
    result = result * 31 + Kotlin.hashCode(this.description) | 0;
    result = result * 31 + Kotlin.hashCode(this.email) | 0;
    result = result * 31 + Kotlin.hashCode(this.firstName) | 0;
    result = result * 31 + Kotlin.hashCode(this.lastName) | 0;
    result = result * 31 + Kotlin.hashCode(this.locale) | 0;
    result = result * 31 + Kotlin.hashCode(this.name) | 0;
    result = result * 31 + Kotlin.hashCode(this.nicename) | 0;
    result = result * 31 + Kotlin.hashCode(this.nickname) | 0;
    result = result * 31 + Kotlin.hashCode(this.registeredDate) | 0;
    result = result * 31 + Kotlin.hashCode(this.slug) | 0;
    result = result * 31 + Kotlin.hashCode(this.url) | 0;
    result = result * 31 + Kotlin.hashCode(this.userId) | 0;
    result = result * 31 + Kotlin.hashCode(this.username) | 0;
    return result;
  };
  User.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.id, other.id) && Kotlin.equals(this.description, other.description) && Kotlin.equals(this.email, other.email) && Kotlin.equals(this.firstName, other.firstName) && Kotlin.equals(this.lastName, other.lastName) && Kotlin.equals(this.locale, other.locale) && Kotlin.equals(this.name, other.name) && Kotlin.equals(this.nicename, other.nicename) && Kotlin.equals(this.nickname, other.nickname) && Kotlin.equals(this.registeredDate, other.registeredDate) && Kotlin.equals(this.slug, other.slug) && Kotlin.equals(this.url, other.url) && Kotlin.equals(this.userId, other.userId) && Kotlin.equals(this.username, other.username)))));
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
  Object.defineProperty(ChrynanCodesTheme, 'Companion', {
    get: ChrynanCodesTheme$Companion_getInstance
  });
  var package$com = _.com || (_.com = {});
  var package$chrynan = package$com.chrynan || (package$com.chrynan = {});
  var package$sitetheme = package$chrynan.sitetheme || (package$chrynan.sitetheme = {});
  package$sitetheme.ChrynanCodesTheme = ChrynanCodesTheme;
  package$sitetheme.SiteTheme = SiteTheme;
  var package$model = package$sitetheme.model || (package$sitetheme.model = {});
  package$model.Category = Category;
  package$model.Comment = Comment;
  package$model.Connection = Connection;
  package$model.Edge = Edge;
  package$model.Menu = Menu;
  package$model.MenuItem = MenuItem;
  package$model.MenuToMenuItemConnection = MenuToMenuItemConnection;
  package$model.MenuToMenuItemConnectionEdge = MenuToMenuItemConnectionEdge;
  package$model.Node = Node;
  package$model.Page = Page;
  package$model.PageToCommentConnection = PageToCommentConnection;
  package$model.PageToCommentConnectionEdge = PageToCommentConnectionEdge;
  package$model.PageToRevisionConnection = PageToRevisionConnection;
  package$model.PageToRevisionConnectionEdge = PageToRevisionConnectionEdge;
  package$model.Post = Post;
  Object.defineProperty(PostObjectFieldFormat, 'RAW', {
    get: PostObjectFieldFormat$RAW_getInstance
  });
  Object.defineProperty(PostObjectFieldFormat, 'RENDERED', {
    get: PostObjectFieldFormat$RENDERED_getInstance
  });
  package$model.PostObjectFieldFormat = PostObjectFieldFormat;
  package$model.PostToCategoryConnection = PostToCategoryConnection;
  package$model.PostToCategoryConnectionEdge = PostToCategoryConnectionEdge;
  package$model.PostToCommentConnection = PostToCommentConnection;
  package$model.PostToCommentConnectionEdge = PostToCommentConnectionEdge;
  package$model.PostToRevisionConnection = PostToRevisionConnection;
  package$model.PostToRevisionConnectionEdge = PostToRevisionConnectionEdge;
  package$model.PostToTagConnection = PostToTagConnection;
  package$model.PostToTagConnectionEdge = PostToTagConnectionEdge;
  package$model.Revision = Revision;
  package$model.RootQueryToMenuConnection = RootQueryToMenuConnection;
  package$model.RootQueryToMenuConnectionEdge = RootQueryToMenuConnectionEdge;
  package$model.RootQueryToPageConnection = RootQueryToPageConnection;
  package$model.RootQueryToPageConnectionEdge = RootQueryToPageConnectionEdge;
  package$model.RootQueryToPostConnection = RootQueryToPostConnection;
  package$model.RootQueryToPostConnectionEdge = RootQueryToPostConnectionEdge;
  package$model.RootQueryToUserConnection = RootQueryToUserConnection;
  package$model.RootQueryToUserConnectionEdge = RootQueryToUserConnectionEdge;
  package$model.Tag = Tag;
  package$model.User = User;
  package$model.WPPageInfo = WPPageInfo;
  Kotlin.defineModule('common', _);
  return _;
}(typeof common === 'undefined' ? {} : common, kotlin);
