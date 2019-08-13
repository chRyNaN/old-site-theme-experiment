if (typeof kotlin === 'undefined') {
  throw new Error("Error loading module 'graphql-query'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'graphql-query'.");
}
this['graphql-query'] = function (_, Kotlin) {
  'use strict';
  var emptyList = Kotlin.kotlin.collections.emptyList_287e2$;
  var Unit = Kotlin.kotlin.Unit;
  var Kind_CLASS = Kotlin.Kind.CLASS;
  var ReadOnlyProperty = Kotlin.kotlin.properties.ReadOnlyProperty;
  var StringBuilder_init = Kotlin.kotlin.text.StringBuilder_init;
  var LinkedHashSet_init = Kotlin.kotlin.collections.LinkedHashSet_init_287e2$;
  var Kind_INTERFACE = Kotlin.Kind.INTERFACE;
  var Annotation = Kotlin.kotlin.Annotation;
  var Enum = Kotlin.kotlin.Enum;
  var throwISE = Kotlin.throwISE;
  var toString = Kotlin.toString;
  var checkIndexOverflow = Kotlin.kotlin.collections.checkIndexOverflow_za3lpa$;
  GraphQLSubscriptionBuilder.prototype = Object.create(BaseGraphQLQueryBuilder.prototype);
  GraphQLSubscriptionBuilder.prototype.constructor = GraphQLSubscriptionBuilder;
  GraphQLMutationBuilder.prototype = Object.create(BaseGraphQLQueryBuilder.prototype);
  GraphQLMutationBuilder.prototype.constructor = GraphQLMutationBuilder;
  GraphQLQueryBuilder.prototype = Object.create(BaseGraphQLQueryBuilder.prototype);
  GraphQLQueryBuilder.prototype.constructor = GraphQLQueryBuilder;
  RootGraphQLQueryBuilder.prototype = Object.create(GraphQLQueryBuilder.prototype);
  RootGraphQLQueryBuilder.prototype.constructor = RootGraphQLQueryBuilder;
  RootGraphQLMutationBuilder.prototype = Object.create(GraphQLMutationBuilder.prototype);
  RootGraphQLMutationBuilder.prototype.constructor = RootGraphQLMutationBuilder;
  RootGraphQLSubscriptionBuilder.prototype = Object.create(GraphQLSubscriptionBuilder.prototype);
  RootGraphQLSubscriptionBuilder.prototype.constructor = RootGraphQLSubscriptionBuilder;
  GraphQLQueryType.prototype = Object.create(Enum.prototype);
  GraphQLQueryType.prototype.constructor = GraphQLQueryType;
  function BaseGraphQLQueryBuilder(queryType) {
    this.queryType = queryType;
    this.fieldNames = LinkedHashSet_init();
    this.indentLevel_8be2vx$ = 1;
    this.sb_42csga$_0 = StringBuilder_init();
  }
  Object.defineProperty(BaseGraphQLQueryBuilder.prototype, 'isRoot', {
    get: function () {
      return false;
    }
  });
  Object.defineProperty(BaseGraphQLQueryBuilder.prototype, 'isQuery', {
    get: function () {
      return this.queryType === GraphQLQueryType$QUERY_getInstance();
    }
  });
  Object.defineProperty(BaseGraphQLQueryBuilder.prototype, 'isMutation', {
    get: function () {
      return this.queryType === GraphQLQueryType$MUTATION_getInstance();
    }
  });
  Object.defineProperty(BaseGraphQLQueryBuilder.prototype, 'isSubscription', {
    get: function () {
      return this.queryType === GraphQLQueryType$SUBSCRIPTION_getInstance();
    }
  });
  BaseGraphQLQueryBuilder.prototype.gqlParam_fmz8iu$ = function (name, defaultValue, value) {
    if (defaultValue === void 0)
      defaultValue = null;
    if (value === void 0)
      value = null;
    return new GraphQLParameter(name, defaultValue, value);
  };
  BaseGraphQLQueryBuilder.prototype.gqlScalarWithParams_avw15n$ = function (name, parameters) {
    var fieldBuilder = new ScalarGraphQLQueryFieldBuilder(name, parameters);
    this.fieldNames.add_11rb$(name);
    this.addIndents_10gdv1$_0();
    this.sb_42csga$_0.append_gw00v9$(fieldBuilder.build_8be2vx$());
  };
  BaseGraphQLQueryBuilder.prototype.gqlObject_tmotd3$ = function (name, parameters, objectBuilder, objectFieldBuilder) {
    if (parameters === void 0)
      parameters = emptyList();
    var fieldBuilder = new ObjectGraphQLQueryFieldBuilder(name, parameters, objectBuilder, objectFieldBuilder, this.indentLevel_8be2vx$);
    this.fieldNames.add_11rb$(name);
    this.addIndents_10gdv1$_0();
    this.sb_42csga$_0.append_gw00v9$(fieldBuilder.build_8be2vx$());
  };
  BaseGraphQLQueryBuilder.prototype.build = function () {
    return this.sb_42csga$_0.toString();
  };
  BaseGraphQLQueryBuilder.prototype.addIndents_10gdv1$_0 = function () {
    var tmp$;
    tmp$ = this.indentLevel_8be2vx$;
    for (var i = 0; i < tmp$; i++) {
      this.sb_42csga$_0.append_gw00v9$('    ');
    }
  };
  function BaseGraphQLQueryBuilder$gqlScalar($outer, name) {
    this.$outer = $outer;
    this.name = name;
  }
  BaseGraphQLQueryBuilder$gqlScalar.prototype.getValue_lrcp0p$ = function (thisRef, property) {
    var fieldBuilder = new ScalarGraphQLQueryFieldBuilder(this.name);
    this.$outer.fieldNames.add_11rb$(this.name);
    this.$outer.addIndents_10gdv1$_0();
    this.$outer.sb_42csga$_0.append_gw00v9$(fieldBuilder.build_8be2vx$());
    return Unit;
  };
  BaseGraphQLQueryBuilder$gqlScalar.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'gqlScalar',
    interfaces: [ReadOnlyProperty]
  };
  BaseGraphQLQueryBuilder.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'BaseGraphQLQueryBuilder',
    interfaces: [GraphQLRootInfoProvider]
  };
  function GraphQLSubscriptionBuilder() {
    BaseGraphQLQueryBuilder.call(this, GraphQLQueryType$SUBSCRIPTION_getInstance());
  }
  GraphQLSubscriptionBuilder.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'GraphQLSubscriptionBuilder',
    interfaces: [BaseGraphQLQueryBuilder]
  };
  function GraphQLMutationBuilder() {
    BaseGraphQLQueryBuilder.call(this, GraphQLQueryType$MUTATION_getInstance());
  }
  GraphQLMutationBuilder.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'GraphQLMutationBuilder',
    interfaces: [BaseGraphQLQueryBuilder]
  };
  function GraphQLQueryBuilder() {
    BaseGraphQLQueryBuilder.call(this, GraphQLQueryType$QUERY_getInstance());
  }
  GraphQLQueryBuilder.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'GraphQLQueryBuilder',
    interfaces: [BaseGraphQLQueryBuilder]
  };
  function GraphQLRootInfoProvider() {
  }
  GraphQLRootInfoProvider.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'GraphQLRootInfoProvider',
    interfaces: []
  };
  function BaseRootGraphQLQueryBuilder() {
  }
  BaseRootGraphQLQueryBuilder.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'BaseRootGraphQLQueryBuilder',
    interfaces: [GraphQLRootInfoProvider]
  };
  function RootGraphQLQueryBuilder() {
    GraphQLQueryBuilder.call(this);
  }
  Object.defineProperty(RootGraphQLQueryBuilder.prototype, 'isRoot', {
    get: function () {
      return true;
    }
  });
  RootGraphQLQueryBuilder.prototype.build = function () {
    var $receiver = StringBuilder_init();
    $receiver.append_gw00v9$('{\n');
    $receiver.append_gw00v9$(GraphQLQueryBuilder.prototype.build.call(this));
    $receiver.append_gw00v9$('}');
    return $receiver.toString();
  };
  RootGraphQLQueryBuilder.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'RootGraphQLQueryBuilder',
    interfaces: [BaseRootGraphQLQueryBuilder, GraphQLQueryBuilder]
  };
  function RootGraphQLMutationBuilder() {
    GraphQLMutationBuilder.call(this);
  }
  Object.defineProperty(RootGraphQLMutationBuilder.prototype, 'isRoot', {
    get: function () {
      return true;
    }
  });
  RootGraphQLMutationBuilder.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'RootGraphQLMutationBuilder',
    interfaces: [BaseRootGraphQLQueryBuilder, GraphQLMutationBuilder]
  };
  function RootGraphQLSubscriptionBuilder() {
    GraphQLSubscriptionBuilder.call(this);
  }
  Object.defineProperty(RootGraphQLSubscriptionBuilder.prototype, 'isRoot', {
    get: function () {
      return true;
    }
  });
  RootGraphQLSubscriptionBuilder.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'RootGraphQLSubscriptionBuilder',
    interfaces: [BaseRootGraphQLQueryBuilder, GraphQLSubscriptionBuilder]
  };
  function GraphQLParameter(name, defaultValue, value) {
    if (defaultValue === void 0)
      defaultValue = null;
    if (value === void 0)
      value = null;
    this.name = name;
    this.defaultValue = defaultValue;
    this.value = value;
  }
  GraphQLParameter.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'GraphQLParameter',
    interfaces: []
  };
  GraphQLParameter.prototype.component1 = function () {
    return this.name;
  };
  GraphQLParameter.prototype.component2 = function () {
    return this.defaultValue;
  };
  GraphQLParameter.prototype.component3 = function () {
    return this.value;
  };
  GraphQLParameter.prototype.copy_fmz8iu$ = function (name, defaultValue, value) {
    return new GraphQLParameter(name === void 0 ? this.name : name, defaultValue === void 0 ? this.defaultValue : defaultValue, value === void 0 ? this.value : value);
  };
  GraphQLParameter.prototype.toString = function () {
    return 'GraphQLParameter(name=' + Kotlin.toString(this.name) + (', defaultValue=' + Kotlin.toString(this.defaultValue)) + (', value=' + Kotlin.toString(this.value)) + ')';
  };
  GraphQLParameter.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.name) | 0;
    result = result * 31 + Kotlin.hashCode(this.defaultValue) | 0;
    result = result * 31 + Kotlin.hashCode(this.value) | 0;
    return result;
  };
  GraphQLParameter.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.name, other.name) && Kotlin.equals(this.defaultValue, other.defaultValue) && Kotlin.equals(this.value, other.value)))));
  };
  function GraphQLQuery(builder, query) {
    this.builder = builder;
    this.query = query;
  }
  GraphQLQuery.prototype.toDecodedString = function () {
    this.query(this.builder);
    return this.builder.build();
  };
  GraphQLQuery.prototype.toEncodedString = function () {
    return this.toDecodedString();
  };
  GraphQLQuery.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'GraphQLQuery',
    interfaces: []
  };
  GraphQLQuery.prototype.component1 = function () {
    return this.builder;
  };
  GraphQLQuery.prototype.component2 = function () {
    return this.query;
  };
  GraphQLQuery.prototype.copy_81h908$ = function (builder, query) {
    return new GraphQLQuery(builder === void 0 ? this.builder : builder, query === void 0 ? this.query : query);
  };
  GraphQLQuery.prototype.toString = function () {
    return 'GraphQLQuery(builder=' + Kotlin.toString(this.builder) + (', query=' + Kotlin.toString(this.query)) + ')';
  };
  GraphQLQuery.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.builder) | 0;
    result = result * 31 + Kotlin.hashCode(this.query) | 0;
    return result;
  };
  GraphQLQuery.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.builder, other.builder) && Kotlin.equals(this.query, other.query)))));
  };
  function GraphQLQueryBuilderMarker() {
  }
  GraphQLQueryBuilderMarker.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'GraphQLQueryBuilderMarker',
    interfaces: [Annotation]
  };
  function fragment() {
    return new GraphQLQueryFragmentBuilder();
  }
  function rangeTo($receiver, fragment) {
    fragment.builder($receiver);
  }
  function query(builder, query) {
    return new GraphQLQuery(builder, query);
  }
  function mutation(builder, query) {
    return new GraphQLQuery(builder, query);
  }
  function subscription(builder, query) {
    return new GraphQLQuery(builder, query);
  }
  function GraphQLQueryFragment(builder) {
    this.builder = builder;
  }
  GraphQLQueryFragment.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'GraphQLQueryFragment',
    interfaces: []
  };
  GraphQLQueryFragment.prototype.component1 = function () {
    return this.builder;
  };
  GraphQLQueryFragment.prototype.copy_a9kq36$ = function (builder) {
    return new GraphQLQueryFragment(builder === void 0 ? this.builder : builder);
  };
  GraphQLQueryFragment.prototype.toString = function () {
    return 'GraphQLQueryFragment(builder=' + Kotlin.toString(this.builder) + ')';
  };
  GraphQLQueryFragment.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.builder) | 0;
    return result;
  };
  GraphQLQueryFragment.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && Kotlin.equals(this.builder, other.builder))));
  };
  function GraphQLQueryFragmentBuilder() {
  }
  GraphQLQueryFragmentBuilder.prototype.on_a9kq36$ = function (builder) {
    return new GraphQLQueryFragment(builder);
  };
  GraphQLQueryFragmentBuilder.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'GraphQLQueryFragmentBuilder',
    interfaces: []
  };
  function GraphQLQueryType(name, ordinal) {
    Enum.call(this);
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function GraphQLQueryType_initFields() {
    GraphQLQueryType_initFields = function () {
    };
    GraphQLQueryType$QUERY_instance = new GraphQLQueryType('QUERY', 0);
    GraphQLQueryType$MUTATION_instance = new GraphQLQueryType('MUTATION', 1);
    GraphQLQueryType$SUBSCRIPTION_instance = new GraphQLQueryType('SUBSCRIPTION', 2);
  }
  var GraphQLQueryType$QUERY_instance;
  function GraphQLQueryType$QUERY_getInstance() {
    GraphQLQueryType_initFields();
    return GraphQLQueryType$QUERY_instance;
  }
  var GraphQLQueryType$MUTATION_instance;
  function GraphQLQueryType$MUTATION_getInstance() {
    GraphQLQueryType_initFields();
    return GraphQLQueryType$MUTATION_instance;
  }
  var GraphQLQueryType$SUBSCRIPTION_instance;
  function GraphQLQueryType$SUBSCRIPTION_getInstance() {
    GraphQLQueryType_initFields();
    return GraphQLQueryType$SUBSCRIPTION_instance;
  }
  GraphQLQueryType.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'GraphQLQueryType',
    interfaces: [Enum]
  };
  function GraphQLQueryType$values() {
    return [GraphQLQueryType$QUERY_getInstance(), GraphQLQueryType$MUTATION_getInstance(), GraphQLQueryType$SUBSCRIPTION_getInstance()];
  }
  GraphQLQueryType.values = GraphQLQueryType$values;
  function GraphQLQueryType$valueOf(name) {
    switch (name) {
      case 'QUERY':
        return GraphQLQueryType$QUERY_getInstance();
      case 'MUTATION':
        return GraphQLQueryType$MUTATION_getInstance();
      case 'SUBSCRIPTION':
        return GraphQLQueryType$SUBSCRIPTION_getInstance();
      default:throwISE('No enum constant com.chrynan.graphqlquerybuilder.GraphQLQueryType.' + name);
    }
  }
  GraphQLQueryType.valueOf_61zpoe$ = GraphQLQueryType$valueOf;
  function ObjectGraphQLQueryFieldBuilder(name, parameters, objectBuilder, objectFieldBuilder, indentLevel) {
    if (parameters === void 0)
      parameters = emptyList();
    if (indentLevel === void 0)
      indentLevel = 1;
    this.name = name;
    this.parameters = parameters;
    this.objectBuilder = objectBuilder;
    this.objectFieldBuilder = objectFieldBuilder;
    this.indentLevel = indentLevel;
  }
  ObjectGraphQLQueryFieldBuilder.prototype.build_8be2vx$ = function () {
    var $receiver = StringBuilder_init();
    var tmp$;
    $receiver.append_gw00v9$(this.name);
    if (!this.parameters.isEmpty()) {
      $receiver.append_gw00v9$('(');
      var tmp$_0, tmp$_0_0;
      var index = 0;
      tmp$_0 = this.parameters.iterator();
      while (tmp$_0.hasNext()) {
        var item = tmp$_0.next();
        var index_0 = checkIndexOverflow((tmp$_0_0 = index, index = tmp$_0_0 + 1 | 0, tmp$_0_0));
        $receiver.append_gw00v9$(item.name + ' = ' + toString(item.value));
        if (index_0 < (this.parameters.size - 1 | 0)) {
          $receiver.append_gw00v9$(', ');
        }
      }
      $receiver.append_gw00v9$(')');
    }
    $receiver.append_gw00v9$(' {\n');
    this.objectBuilder.indentLevel_8be2vx$ = this.indentLevel + 1 | 0;
    this.objectFieldBuilder(this.objectBuilder);
    $receiver.append_gw00v9$(this.objectBuilder.build());
    tmp$ = this.indentLevel;
    for (var i = 0; i < tmp$; i++) {
      $receiver.append_gw00v9$('    ');
    }
    $receiver.append_gw00v9$('}\n');
    return $receiver.toString();
  };
  ObjectGraphQLQueryFieldBuilder.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ObjectGraphQLQueryFieldBuilder',
    interfaces: []
  };
  ObjectGraphQLQueryFieldBuilder.prototype.component1 = function () {
    return this.name;
  };
  ObjectGraphQLQueryFieldBuilder.prototype.component2 = function () {
    return this.parameters;
  };
  ObjectGraphQLQueryFieldBuilder.prototype.component3 = function () {
    return this.objectBuilder;
  };
  ObjectGraphQLQueryFieldBuilder.prototype.component4 = function () {
    return this.objectFieldBuilder;
  };
  ObjectGraphQLQueryFieldBuilder.prototype.component5 = function () {
    return this.indentLevel;
  };
  ObjectGraphQLQueryFieldBuilder.prototype.copy_77zo1i$ = function (name, parameters, objectBuilder, objectFieldBuilder, indentLevel) {
    return new ObjectGraphQLQueryFieldBuilder(name === void 0 ? this.name : name, parameters === void 0 ? this.parameters : parameters, objectBuilder === void 0 ? this.objectBuilder : objectBuilder, objectFieldBuilder === void 0 ? this.objectFieldBuilder : objectFieldBuilder, indentLevel === void 0 ? this.indentLevel : indentLevel);
  };
  ObjectGraphQLQueryFieldBuilder.prototype.toString = function () {
    return 'ObjectGraphQLQueryFieldBuilder(name=' + Kotlin.toString(this.name) + (', parameters=' + Kotlin.toString(this.parameters)) + (', objectBuilder=' + Kotlin.toString(this.objectBuilder)) + (', objectFieldBuilder=' + Kotlin.toString(this.objectFieldBuilder)) + (', indentLevel=' + Kotlin.toString(this.indentLevel)) + ')';
  };
  ObjectGraphQLQueryFieldBuilder.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.name) | 0;
    result = result * 31 + Kotlin.hashCode(this.parameters) | 0;
    result = result * 31 + Kotlin.hashCode(this.objectBuilder) | 0;
    result = result * 31 + Kotlin.hashCode(this.objectFieldBuilder) | 0;
    result = result * 31 + Kotlin.hashCode(this.indentLevel) | 0;
    return result;
  };
  ObjectGraphQLQueryFieldBuilder.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.name, other.name) && Kotlin.equals(this.parameters, other.parameters) && Kotlin.equals(this.objectBuilder, other.objectBuilder) && Kotlin.equals(this.objectFieldBuilder, other.objectFieldBuilder) && Kotlin.equals(this.indentLevel, other.indentLevel)))));
  };
  function ScalarGraphQLQueryFieldBuilder(name, parameters) {
    if (parameters === void 0)
      parameters = emptyList();
    this.name = name;
    this.parameters = parameters;
  }
  ScalarGraphQLQueryFieldBuilder.prototype.build_8be2vx$ = function () {
    var $receiver = StringBuilder_init();
    $receiver.append_gw00v9$(this.name);
    if (!this.parameters.isEmpty()) {
      $receiver.append_gw00v9$('(');
      var tmp$, tmp$_0;
      var index = 0;
      tmp$ = this.parameters.iterator();
      while (tmp$.hasNext()) {
        var item = tmp$.next();
        var index_0 = checkIndexOverflow((tmp$_0 = index, index = tmp$_0 + 1 | 0, tmp$_0));
        $receiver.append_gw00v9$(item.name + ' = ' + toString(item.value));
        if (index_0 < (this.parameters.size - 1 | 0)) {
          $receiver.append_gw00v9$(', ');
        }
      }
      $receiver.append_gw00v9$(')');
    }
    $receiver.append_gw00v9$('\n');
    return $receiver.toString();
  };
  ScalarGraphQLQueryFieldBuilder.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ScalarGraphQLQueryFieldBuilder',
    interfaces: []
  };
  ScalarGraphQLQueryFieldBuilder.prototype.component1 = function () {
    return this.name;
  };
  ScalarGraphQLQueryFieldBuilder.prototype.component2 = function () {
    return this.parameters;
  };
  ScalarGraphQLQueryFieldBuilder.prototype.copy_avw15n$ = function (name, parameters) {
    return new ScalarGraphQLQueryFieldBuilder(name === void 0 ? this.name : name, parameters === void 0 ? this.parameters : parameters);
  };
  ScalarGraphQLQueryFieldBuilder.prototype.toString = function () {
    return 'ScalarGraphQLQueryFieldBuilder(name=' + Kotlin.toString(this.name) + (', parameters=' + Kotlin.toString(this.parameters)) + ')';
  };
  ScalarGraphQLQueryFieldBuilder.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.name) | 0;
    result = result * 31 + Kotlin.hashCode(this.parameters) | 0;
    return result;
  };
  ScalarGraphQLQueryFieldBuilder.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.name, other.name) && Kotlin.equals(this.parameters, other.parameters)))));
  };
  BaseGraphQLQueryBuilder.gqlScalar = BaseGraphQLQueryBuilder$gqlScalar;
  var package$com = _.com || (_.com = {});
  var package$chrynan = package$com.chrynan || (package$com.chrynan = {});
  var package$graphqlquerybuilder = package$chrynan.graphqlquerybuilder || (package$chrynan.graphqlquerybuilder = {});
  package$graphqlquerybuilder.BaseGraphQLQueryBuilder = BaseGraphQLQueryBuilder;
  package$graphqlquerybuilder.GraphQLSubscriptionBuilder = GraphQLSubscriptionBuilder;
  package$graphqlquerybuilder.GraphQLMutationBuilder = GraphQLMutationBuilder;
  package$graphqlquerybuilder.GraphQLQueryBuilder = GraphQLQueryBuilder;
  package$graphqlquerybuilder.GraphQLRootInfoProvider = GraphQLRootInfoProvider;
  package$graphqlquerybuilder.BaseRootGraphQLQueryBuilder = BaseRootGraphQLQueryBuilder;
  package$graphqlquerybuilder.RootGraphQLQueryBuilder = RootGraphQLQueryBuilder;
  package$graphqlquerybuilder.RootGraphQLMutationBuilder = RootGraphQLMutationBuilder;
  package$graphqlquerybuilder.RootGraphQLSubscriptionBuilder = RootGraphQLSubscriptionBuilder;
  package$graphqlquerybuilder.GraphQLParameter = GraphQLParameter;
  package$graphqlquerybuilder.GraphQLQuery = GraphQLQuery;
  package$graphqlquerybuilder.GraphQLQueryBuilderMarker = GraphQLQueryBuilderMarker;
  package$graphqlquerybuilder.fragment_p31hh$ = fragment;
  package$graphqlquerybuilder.rangeTo_pshcop$ = rangeTo;
  package$graphqlquerybuilder.query_fdm211$ = query;
  package$graphqlquerybuilder.mutation_5vwxgg$ = mutation;
  package$graphqlquerybuilder.subscription_5vggvg$ = subscription;
  package$graphqlquerybuilder.GraphQLQueryFragment = GraphQLQueryFragment;
  package$graphqlquerybuilder.GraphQLQueryFragmentBuilder = GraphQLQueryFragmentBuilder;
  Object.defineProperty(GraphQLQueryType, 'QUERY', {
    get: GraphQLQueryType$QUERY_getInstance
  });
  Object.defineProperty(GraphQLQueryType, 'MUTATION', {
    get: GraphQLQueryType$MUTATION_getInstance
  });
  Object.defineProperty(GraphQLQueryType, 'SUBSCRIPTION', {
    get: GraphQLQueryType$SUBSCRIPTION_getInstance
  });
  package$graphqlquerybuilder.GraphQLQueryType = GraphQLQueryType;
  package$graphqlquerybuilder.ObjectGraphQLQueryFieldBuilder = ObjectGraphQLQueryFieldBuilder;
  package$graphqlquerybuilder.ScalarGraphQLQueryFieldBuilder = ScalarGraphQLQueryFieldBuilder;
  Kotlin.defineModule('graphql-query', _);
  return _;
}(typeof this['graphql-query'] === 'undefined' ? {} : this['graphql-query'], kotlin);
