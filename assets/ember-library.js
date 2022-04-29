'use strict';



;define("ember-library/adapters/-json-api", ["exports", "@ember-data/adapter/json-api"], function (_exports, _jsonApi) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _jsonApi.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"@ember-data/adapter/json-api"eaimeta@70e063a35619d71f
});
;define("ember-library/adapters/application", ["exports", "@ember-data/adapter/json-api", "ember-library/config/environment"], function (_exports, _jsonApi, _environment) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"@ember-data/adapter/json-api",0,"ember-library/config/environment"eaimeta@70e063a35619d71f

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  class ApplicationAdapter extends _jsonApi.default {
    constructor() {
      super(...arguments);

      _defineProperty(this, "host", _environment.default.APP.backEndUrl);
    }

  }

  _exports.default = ApplicationAdapter;
});
;define("ember-library/app", ["exports", "@ember/application", "ember-resolver", "ember-load-initializers", "ember-library/config/environment"], function (_exports, _application, _emberResolver, _emberLoadInitializers, _environment) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"@ember/application",0,"ember-resolver",0,"ember-load-initializers",0,"ember-library/config/environment"eaimeta@70e063a35619d71f

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  class App extends _application.default {
    constructor() {
      super(...arguments);

      _defineProperty(this, "modulePrefix", _environment.default.modulePrefix);

      _defineProperty(this, "podModulePrefix", _environment.default.podModulePrefix);

      _defineProperty(this, "Resolver", _emberResolver.default);
    }

  }

  _exports.default = App;
  (0, _emberLoadInitializers.default)(App, _environment.default.modulePrefix);
});
;define("ember-library/component-managers/glimmer", ["exports", "@glimmer/component/-private/ember-component-manager"], function (_exports, _emberComponentManager) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _emberComponentManager.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"@glimmer/component/-private/ember-component-manager"eaimeta@70e063a35619d71f
});
;define("ember-library/components/author-form", ["exports", "@ember/component", "@ember/template-factory", "@glimmer/component", "@ember/object", "@glimmer/tracking"], function (_exports, _component, _templateFactory, _component2, _object, _tracking) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _class;

  0; //eaimeta@70e063a35619d71f0,"ember-cli-htmlbars",0,"@glimmer/component",0,"@ember/object",0,"@glimmer/tracking"eaimeta@70e063a35619d71f

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  const __COLOCATED_TEMPLATE__ = (0, _templateFactory.createTemplateFactory)(
  /*
    <form {{on 'submit' this.submitChanges}}>
    <div class="field">
      <label for="firstName">
        First Name:
      </label>
      <Input
        id="firstName"
        @type="text"
        placeholder="First Name"
        @value={{@author.firstName}}
      />
    </div>
    <div class="field">
      <label for="lastName">
        Last Name:
      </label>
      <Input
        id="lastName"
        @type="text"
        @value={{@author.lastName}}
        placeholder="Last Name"
      />
    </div>
    <div class="form-footer">
      <button type="submit" class="btn-submit">
        {{#if @buttonText}}
          Save Changes
        {{else}}
          Create a new author
        {{/if}}
      </button>
    </div>
  </form>
  
  */
  {
    "id": "U+p1N6GN",
    "block": "[[[11,\"form\"],[4,[38,0],[\"submit\",[30,0,[\"submitChanges\"]]],null],[12],[1,\"\\n  \"],[10,0],[14,0,\"field\"],[12],[1,\"\\n    \"],[10,\"label\"],[14,\"for\",\"firstName\"],[12],[1,\"\\n      First Name:\\n    \"],[13],[1,\"\\n    \"],[8,[39,1],[[24,1,\"firstName\"],[24,\"placeholder\",\"First Name\"]],[[\"@type\",\"@value\"],[\"text\",[30,1,[\"firstName\"]]]],null],[1,\"\\n  \"],[13],[1,\"\\n  \"],[10,0],[14,0,\"field\"],[12],[1,\"\\n    \"],[10,\"label\"],[14,\"for\",\"lastName\"],[12],[1,\"\\n      Last Name:\\n    \"],[13],[1,\"\\n    \"],[8,[39,1],[[24,1,\"lastName\"],[24,\"placeholder\",\"Last Name\"]],[[\"@type\",\"@value\"],[\"text\",[30,1,[\"lastName\"]]]],null],[1,\"\\n  \"],[13],[1,\"\\n  \"],[10,0],[14,0,\"form-footer\"],[12],[1,\"\\n    \"],[10,\"button\"],[14,0,\"btn-submit\"],[14,4,\"submit\"],[12],[1,\"\\n\"],[41,[30,2],[[[1,\"        Save Changes\\n\"]],[]],[[[1,\"        Create a new author\\n\"]],[]]],[1,\"    \"],[13],[1,\"\\n  \"],[13],[1,\"\\n\"],[13],[1,\"\\n\"]],[\"@author\",\"@buttonText\"],false,[\"on\",\"input\",\"if\"]]",
    "moduleName": "ember-library/components/author-form.hbs",
    "isStrictMode": false
  });

  let AuthorFormComponent = (_class = class AuthorFormComponent extends _component2.default {
    // @tracked firstName = this.args.author.firstName;
    // @tracked lastName = this.args.author.lastName;
    submitChanges(evt) {
      evt.preventDefault();
      this.args.saveAuthor(this.args.author);
    }

  }, (_applyDecoratedDescriptor(_class.prototype, "submitChanges", [_object.action], Object.getOwnPropertyDescriptor(_class.prototype, "submitChanges"), _class.prototype)), _class);
  _exports.default = AuthorFormComponent;
  (0, _component.setComponentTemplate)(__COLOCATED_TEMPLATE__, AuthorFormComponent);
});
;define("ember-library/components/author-list-item", ["exports", "@ember/component", "@ember/template-factory", "@ember/component/template-only"], function (_exports, _component, _templateFactory, _templateOnly) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"ember-cli-htmlbars",0,"@ember/component/template-only"eaimeta@70e063a35619d71f

  const __COLOCATED_TEMPLATE__ = (0, _templateFactory.createTemplateFactory)(
  /*
    <LinkTo @route="author.detail" @model={{@model}}>
    <strong>
      {{inc-by-one @index}}
      {{@model.firstName}}
      {{@model.lastName}}
    </strong>
  </LinkTo>
  
  */
  {
    "id": "6z4Vj6jK",
    "block": "[[[8,[39,0],null,[[\"@route\",\"@model\"],[\"author.detail\",[30,1]]],[[\"default\"],[[[[1,\"\\n  \"],[10,\"strong\"],[12],[1,\"\\n    \"],[1,[28,[35,1],[[30,2]],null]],[1,\"\\n    \"],[1,[30,1,[\"firstName\"]]],[1,\"\\n    \"],[1,[30,1,[\"lastName\"]]],[1,\"\\n  \"],[13],[1,\"\\n\"]],[]]]]],[1,\"\\n\"]],[\"@model\",\"@index\"],false,[\"link-to\",\"inc-by-one\"]]",
    "moduleName": "ember-library/components/author-list-item.hbs",
    "isStrictMode": false
  });

  var _default = (0, _component.setComponentTemplate)(__COLOCATED_TEMPLATE__, (0, _templateOnly.default)());

  _exports.default = _default;
});
;define("ember-library/components/fa-icon", ["exports", "@fortawesome/ember-fontawesome/components/fa-icon"], function (_exports, _faIcon) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _faIcon.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"@fortawesome/ember-fontawesome/components/fa-icon"eaimeta@70e063a35619d71f
});
;define("ember-library/components/illiquid-model", ["exports", "liquid-fire/components/illiquid-model"], function (_exports, _illiquidModel) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _illiquidModel.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"liquid-fire/components/illiquid-model"eaimeta@70e063a35619d71f
});
;define("ember-library/components/lf-get-outlet-state", ["exports", "liquid-fire/components/lf-get-outlet-state"], function (_exports, _lfGetOutletState) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _lfGetOutletState.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"liquid-fire/components/lf-get-outlet-state"eaimeta@70e063a35619d71f
});
;define("ember-library/components/liquid-bind", ["exports", "liquid-fire/components/liquid-bind"], function (_exports, _liquidBind) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _liquidBind.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"liquid-fire/components/liquid-bind"eaimeta@70e063a35619d71f
});
;define("ember-library/components/liquid-child", ["exports", "liquid-fire/components/liquid-child"], function (_exports, _liquidChild) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _liquidChild.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"liquid-fire/components/liquid-child"eaimeta@70e063a35619d71f
});
;define("ember-library/components/liquid-container", ["exports", "liquid-fire/components/liquid-container"], function (_exports, _liquidContainer) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _liquidContainer.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"liquid-fire/components/liquid-container"eaimeta@70e063a35619d71f
});
;define("ember-library/components/liquid-if", ["exports", "liquid-fire/components/liquid-if"], function (_exports, _liquidIf) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _liquidIf.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"liquid-fire/components/liquid-if"eaimeta@70e063a35619d71f
});
;define("ember-library/components/liquid-measured", ["exports", "liquid-fire/components/liquid-measured"], function (_exports, _liquidMeasured) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _liquidMeasured.default;
    }
  });
  Object.defineProperty(_exports, "measure", {
    enumerable: true,
    get: function () {
      return _liquidMeasured.measure;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"liquid-fire/components/liquid-measured"eaimeta@70e063a35619d71f
});
;define("ember-library/components/liquid-outlet", ["exports", "liquid-fire/components/liquid-outlet"], function (_exports, _liquidOutlet) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _liquidOutlet.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"liquid-fire/components/liquid-outlet"eaimeta@70e063a35619d71f
});
;define("ember-library/components/liquid-spacer", ["exports", "liquid-fire/components/liquid-spacer"], function (_exports, _liquidSpacer) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _liquidSpacer.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"liquid-fire/components/liquid-spacer"eaimeta@70e063a35619d71f
});
;define("ember-library/components/liquid-sync", ["exports", "liquid-fire/components/liquid-sync"], function (_exports, _liquidSync) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _liquidSync.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"liquid-fire/components/liquid-sync"eaimeta@70e063a35619d71f
});
;define("ember-library/components/liquid-unless", ["exports", "liquid-fire/components/liquid-unless"], function (_exports, _liquidUnless) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _liquidUnless.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"liquid-fire/components/liquid-unless"eaimeta@70e063a35619d71f
});
;define("ember-library/components/liquid-versions", ["exports", "liquid-fire/components/liquid-versions"], function (_exports, _liquidVersions) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _liquidVersions.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"liquid-fire/components/liquid-versions"eaimeta@70e063a35619d71f
});
;define("ember-library/components/spinner", ["exports", "@ember/component", "@ember/template-factory", "@ember/component/template-only"], function (_exports, _component, _templateFactory, _templateOnly) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"ember-cli-htmlbars",0,"@ember/component/template-only"eaimeta@70e063a35619d71f

  const __COLOCATED_TEMPLATE__ = (0, _templateFactory.createTemplateFactory)(
  /*
    <div class="lds-spinner">
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
  </div>
  
  */
  {
    "id": "nar6JUYK",
    "block": "[[[10,0],[14,0,\"lds-spinner\"],[12],[1,\"\\n  \"],[10,0],[12],[13],[1,\"\\n  \"],[10,0],[12],[13],[1,\"\\n  \"],[10,0],[12],[13],[1,\"\\n  \"],[10,0],[12],[13],[1,\"\\n  \"],[10,0],[12],[13],[1,\"\\n  \"],[10,0],[12],[13],[1,\"\\n  \"],[10,0],[12],[13],[1,\"\\n  \"],[10,0],[12],[13],[1,\"\\n  \"],[10,0],[12],[13],[1,\"\\n  \"],[10,0],[12],[13],[1,\"\\n  \"],[10,0],[12],[13],[1,\"\\n  \"],[10,0],[12],[13],[1,\"\\n\"],[13],[1,\"\\n\"]],[],false,[]]",
    "moduleName": "ember-library/components/spinner.hbs",
    "isStrictMode": false
  });

  var _default = (0, _component.setComponentTemplate)(__COLOCATED_TEMPLATE__, (0, _templateOnly.default)());

  _exports.default = _default;
});
;define("ember-library/controllers/author", ["exports", "@ember/controller"], function (_exports, _controller) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"@ember/controller"eaimeta@70e063a35619d71f

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  class AuthorController extends _controller.default {
    constructor() {
      super(...arguments);

      _defineProperty(this, "searchTerm", '');
    }

  }

  _exports.default = AuthorController;
});
;define("ember-library/controllers/author/create", ["exports", "@ember/controller", "@ember/object", "@ember/service", "@glimmer/tracking"], function (_exports, _controller, _object, _service, _tracking) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _dec, _dec2, _dec3, _class, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5;

  0; //eaimeta@70e063a35619d71f0,"@ember/controller",0,"@ember/object",0,"@ember/service",0,"@glimmer/tracking"eaimeta@70e063a35619d71f

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  let AuthorCreateController = (_dec = (0, _service.inject)(), _dec2 = (0, _service.inject)(), _dec3 = (0, _service.inject)(), (_class = class AuthorCreateController extends _controller.default {
    constructor() {
      super(...arguments);

      _initializerDefineProperty(this, "router", _descriptor, this);

      _initializerDefineProperty(this, "store", _descriptor2, this);

      _initializerDefineProperty(this, "dataService", _descriptor3, this);

      _initializerDefineProperty(this, "firstName", _descriptor4, this);

      _initializerDefineProperty(this, "lastName", _descriptor5, this);
    }

    async createAuthor(author) {
      await this.dataService.createAuthor(author); // let newAuthor = this.store.createRecord('author', author);
      // await newAuthor.save();

      this.router.transitionTo('author');
    }

  }, (_descriptor = _applyDecoratedDescriptor(_class.prototype, "router", [_dec], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor2 = _applyDecoratedDescriptor(_class.prototype, "store", [_dec2], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor3 = _applyDecoratedDescriptor(_class.prototype, "dataService", [_dec3], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor4 = _applyDecoratedDescriptor(_class.prototype, "firstName", [_tracking.tracked], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor5 = _applyDecoratedDescriptor(_class.prototype, "lastName", [_tracking.tracked], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _applyDecoratedDescriptor(_class.prototype, "createAuthor", [_object.action], Object.getOwnPropertyDescriptor(_class.prototype, "createAuthor"), _class.prototype)), _class));
  _exports.default = AuthorCreateController;
});
;define("ember-library/controllers/author/detail", ["exports", "@ember/controller", "@ember/object", "@ember/service"], function (_exports, _controller, _object, _service) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _dec, _dec2, _class, _descriptor, _descriptor2;

  0; //eaimeta@70e063a35619d71f0,"@ember/controller",0,"@ember/object",0,"@ember/service"eaimeta@70e063a35619d71f

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  let AuthorDetailController = (_dec = (0, _service.inject)(), _dec2 = (0, _service.inject)(), (_class = class AuthorDetailController extends _controller.default {
    constructor() {
      super(...arguments);

      _initializerDefineProperty(this, "dataService", _descriptor, this);

      _initializerDefineProperty(this, "router", _descriptor2, this);
    }

    deleteAuthor(id) {
      this.dataService.deleteAuthor(id);
      this.router.transitionTo('author');
    }

  }, (_descriptor = _applyDecoratedDescriptor(_class.prototype, "dataService", [_dec], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor2 = _applyDecoratedDescriptor(_class.prototype, "router", [_dec2], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _applyDecoratedDescriptor(_class.prototype, "deleteAuthor", [_object.action], Object.getOwnPropertyDescriptor(_class.prototype, "deleteAuthor"), _class.prototype)), _class));
  _exports.default = AuthorDetailController;
});
;define("ember-library/controllers/author/edit", ["exports", "@ember/controller", "@ember/object", "@ember/service"], function (_exports, _controller, _object, _service) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _dec, _dec2, _class, _descriptor, _descriptor2;

  0; //eaimeta@70e063a35619d71f0,"@ember/controller",0,"@ember/object",0,"@ember/service"eaimeta@70e063a35619d71f

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  let AuthorEditController = (_dec = (0, _service.inject)(), _dec2 = (0, _service.inject)(), (_class = class AuthorEditController extends _controller.default {
    constructor() {
      super(...arguments);

      _initializerDefineProperty(this, "router", _descriptor, this);

      _initializerDefineProperty(this, "dataService", _descriptor2, this);
    }

    async editAuthor(author) {
      await this.dataService.editAuthor(author);
      this.router.transitionTo('author.detail', this.model.id);
    }

    initData() {
      this.firstName = this.model.firstName;
      this.lastName = this.model.lastName;
    }

  }, (_descriptor = _applyDecoratedDescriptor(_class.prototype, "router", [_dec], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor2 = _applyDecoratedDescriptor(_class.prototype, "dataService", [_dec2], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _applyDecoratedDescriptor(_class.prototype, "editAuthor", [_object.action], Object.getOwnPropertyDescriptor(_class.prototype, "editAuthor"), _class.prototype)), _class));
  _exports.default = AuthorEditController;
});
;define("ember-library/data-adapter", ["exports", "@ember-data/debug"], function (_exports, _debug) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _debug.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"@ember-data/debug"eaimeta@70e063a35619d71f
});
;define("ember-library/helpers/app-version", ["exports", "@ember/component/helper", "ember-library/config/environment", "ember-cli-app-version/utils/regexp"], function (_exports, _helper, _environment, _regexp) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.appVersion = appVersion;
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"@ember/component/helper",0,"ember-library/config/environment",0,"ember-cli-app-version/utils/regexp"eaimeta@70e063a35619d71f

  function appVersion(_) {
    let hash = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    const version = _environment.default.APP.version; // e.g. 1.0.0-alpha.1+4jds75hf
    // Allow use of 'hideSha' and 'hideVersion' For backwards compatibility

    let versionOnly = hash.versionOnly || hash.hideSha;
    let shaOnly = hash.shaOnly || hash.hideVersion;
    let match = null;

    if (versionOnly) {
      if (hash.showExtended) {
        match = version.match(_regexp.versionExtendedRegExp); // 1.0.0-alpha.1
      } // Fallback to just version


      if (!match) {
        match = version.match(_regexp.versionRegExp); // 1.0.0
      }
    }

    if (shaOnly) {
      match = version.match(_regexp.shaRegExp); // 4jds75hf
    }

    return match ? match[0] : version;
  }

  var _default = (0, _helper.helper)(appVersion);

  _exports.default = _default;
});
;define("ember-library/helpers/inc-by-one", ["exports", "@ember/component/helper"], function (_exports, _helper) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"@ember/component/helper"eaimeta@70e063a35619d71f

  var _default = (0, _helper.helper)(function incByOne(positional) {
    let [n] = positional;
    return Number.parseInt(n + 1);
  });

  _exports.default = _default;
});
;define("ember-library/helpers/lf-lock-model", ["exports", "liquid-fire/helpers/lf-lock-model"], function (_exports, _lfLockModel) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _lfLockModel.default;
    }
  });
  Object.defineProperty(_exports, "lfLockModel", {
    enumerable: true,
    get: function () {
      return _lfLockModel.lfLockModel;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"liquid-fire/helpers/lf-lock-model"eaimeta@70e063a35619d71f
});
;define("ember-library/helpers/lf-or", ["exports", "liquid-fire/helpers/lf-or"], function (_exports, _lfOr) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _lfOr.default;
    }
  });
  Object.defineProperty(_exports, "lfOr", {
    enumerable: true,
    get: function () {
      return _lfOr.lfOr;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"liquid-fire/helpers/lf-or"eaimeta@70e063a35619d71f
});
;define("ember-library/helpers/page-title", ["exports", "ember-page-title/helpers/page-title"], function (_exports, _pageTitle) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"ember-page-title/helpers/page-title"eaimeta@70e063a35619d71f

  var _default = _pageTitle.default;
  _exports.default = _default;
});
;define("ember-library/helpers/pluralize", ["exports", "ember-inflector/lib/helpers/pluralize"], function (_exports, _pluralize) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"ember-inflector/lib/helpers/pluralize"eaimeta@70e063a35619d71f

  var _default = _pluralize.default;
  _exports.default = _default;
});
;define("ember-library/helpers/singularize", ["exports", "ember-inflector/lib/helpers/singularize"], function (_exports, _singularize) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"ember-inflector/lib/helpers/singularize"eaimeta@70e063a35619d71f

  var _default = _singularize.default;
  _exports.default = _default;
});
;define("ember-library/initializers/app-version", ["exports", "ember-cli-app-version/initializer-factory", "ember-library/config/environment"], function (_exports, _initializerFactory, _environment) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"ember-cli-app-version/initializer-factory",0,"ember-library/config/environment"eaimeta@70e063a35619d71f

  let name, version;

  if (_environment.default.APP) {
    name = _environment.default.APP.name;
    version = _environment.default.APP.version;
  }

  var _default = {
    name: 'App Version',
    initialize: (0, _initializerFactory.default)(name, version)
  };
  _exports.default = _default;
});
;define("ember-library/initializers/container-debug-adapter", ["exports", "ember-resolver/resolvers/classic/container-debug-adapter"], function (_exports, _containerDebugAdapter) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"ember-resolver/resolvers/classic/container-debug-adapter"eaimeta@70e063a35619d71f

  var _default = {
    name: 'container-debug-adapter',

    initialize() {
      let app = arguments[1] || arguments[0];
      app.register('container-debug-adapter:main', _containerDebugAdapter.default);
    }

  };
  _exports.default = _default;
});
;define("ember-library/initializers/ember-data-data-adapter", ["exports", "@ember-data/debug/setup"], function (_exports, _setup) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _setup.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"@ember-data/debug/setup"eaimeta@70e063a35619d71f
});
;define("ember-library/initializers/ember-data", ["exports", "ember-data", "ember-data/setup-container"], function (_exports, _emberData, _setupContainer) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"ember-data",0,"ember-data/setup-container"eaimeta@70e063a35619d71f

  /*
    This code initializes EmberData in an Ember application.
  */
  var _default = {
    name: 'ember-data',
    initialize: _setupContainer.default
  };
  _exports.default = _default;
});
;define("ember-library/initializers/export-application-global", ["exports", "ember", "ember-library/config/environment"], function (_exports, _ember, _environment) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  _exports.initialize = initialize;
  0; //eaimeta@70e063a35619d71f0,"ember",0,"ember-library/config/environment"eaimeta@70e063a35619d71f

  function initialize() {
    var application = arguments[1] || arguments[0];

    if (_environment.default.exportApplicationGlobal !== false) {
      var theGlobal;

      if (typeof window !== 'undefined') {
        theGlobal = window;
      } else if (typeof global !== 'undefined') {
        theGlobal = global;
      } else if (typeof self !== 'undefined') {
        theGlobal = self;
      } else {
        // no reasonable global, just bail
        return;
      }

      var value = _environment.default.exportApplicationGlobal;
      var globalName;

      if (typeof value === 'string') {
        globalName = value;
      } else {
        globalName = _ember.default.String.classify(_environment.default.modulePrefix);
      }

      if (!theGlobal[globalName]) {
        theGlobal[globalName] = application;
        application.reopen({
          willDestroy: function () {
            this._super.apply(this, arguments);

            delete theGlobal[globalName];
          }
        });
      }
    }
  }

  var _default = {
    name: 'export-application-global',
    initialize: initialize
  };
  _exports.default = _default;
});
;define("ember-library/initializers/liquid-fire", ["exports", "liquid-fire/velocity-ext"], function (_exports, _velocityExt) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"liquid-fire/velocity-ext"eaimeta@70e063a35619d71f

  var _default = {
    name: 'liquid-fire',
    initialize: function () {}
  };
  _exports.default = _default;
});
;define("ember-library/instance-initializers/ember-data", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71feaimeta@70e063a35619d71f

  /* exists only for things that historically used "after" or "before" */
  var _default = {
    name: 'ember-data',

    initialize() {}

  };
  _exports.default = _default;
});
;define("ember-library/models/author", ["exports", "@ember-data/model"], function (_exports, _model) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _dec, _dec2, _class, _descriptor, _descriptor2;

  0; //eaimeta@70e063a35619d71f0,"@ember-data/model"eaimeta@70e063a35619d71f

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  let AuthorModel = (_dec = (0, _model.attr)('string'), _dec2 = (0, _model.attr)('string'), (_class = class AuthorModel extends _model.default {
    constructor() {
      super(...arguments);

      _initializerDefineProperty(this, "firstName", _descriptor, this);

      _initializerDefineProperty(this, "lastName", _descriptor2, this);
    }

  }, (_descriptor = _applyDecoratedDescriptor(_class.prototype, "firstName", [_dec], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor2 = _applyDecoratedDescriptor(_class.prototype, "lastName", [_dec2], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  })), _class));
  _exports.default = AuthorModel;
});
;define("ember-library/router", ["exports", "@ember/routing/router", "ember-library/config/environment"], function (_exports, _router, _environment) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"@ember/routing/router",0,"ember-library/config/environment"eaimeta@70e063a35619d71f

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  class Router extends _router.default {
    constructor() {
      super(...arguments);

      _defineProperty(this, "location", _environment.default.locationType);

      _defineProperty(this, "rootURL", _environment.default.rootURL);
    }

  }

  _exports.default = Router;
  Router.map(function () {
    this.route('author', {
      path: '/authors'
    }, function () {
      this.route('detail', {
        path: '/:id'
      });
      this.route('edit', {
        path: '/:id/edit'
      });
      this.route('create');
    });
    this.route('book', {
      path: '/books'
    }, function () {
      this.route('create');
      this.route('detail');
      this.route('edit', {
        path: '/:id/edit'
      });
    });
    this.route('not-found', {
      path: '*path'
    });
  });
});
;define("ember-library/routes/author", ["exports", "@ember/routing/route", "@ember/service"], function (_exports, _route, _service) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _dec, _class, _descriptor, _descriptor2;

  0; //eaimeta@70e063a35619d71f0,"@ember/routing/route",0,"@ember/service"eaimeta@70e063a35619d71f

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  let AuthorRoute = (_dec = (0, _service.inject)(), (_class = class AuthorRoute extends _route.default {
    constructor() {
      super(...arguments);

      _initializerDefineProperty(this, "store", _descriptor, this);

      _defineProperty(this, "queryParams", {
        searchTerm: {
          as: 'q',
          refreshModel: true
        }
      });

      _initializerDefineProperty(this, "dataService", _descriptor2, this);
    }

    async model(_ref) {
      let {
        searchTerm
      } = _ref;

      if (searchTerm) {
        return await this.store.query('author', {
          q: searchTerm
        });
      }

      return await this.store.findAll('author');
    }

  }, (_descriptor = _applyDecoratedDescriptor(_class.prototype, "store", [_dec], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor2 = _applyDecoratedDescriptor(_class.prototype, "dataService", [_service.inject], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  })), _class));
  _exports.default = AuthorRoute;
});
;define("ember-library/routes/author/create", ["exports", "@ember/routing/route"], function (_exports, _route) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"@ember/routing/route"eaimeta@70e063a35619d71f

  class AuthorCreateRoute extends _route.default {
    model() {
      return {
        firstName: '',
        lastName: ''
      };
    }

    setupController(controller, model) {
      super.setupController(...arguments);
    }

  }

  _exports.default = AuthorCreateRoute;
});
;define("ember-library/routes/author/detail", ["exports", "@ember/routing/route", "@ember/service"], function (_exports, _route, _service) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _dec, _class, _descriptor;

  0; //eaimeta@70e063a35619d71f0,"@ember/routing/route",0,"@ember/service"eaimeta@70e063a35619d71f

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  let AuthorDetailRoute = (_dec = (0, _service.inject)(), (_class = class AuthorDetailRoute extends _route.default {
    constructor() {
      super(...arguments);

      _initializerDefineProperty(this, "store", _descriptor, this);
    }

    model(_ref) {
      let {
        id
      } = _ref;
      return this.store.findRecord('author', id);
    }

  }, (_descriptor = _applyDecoratedDescriptor(_class.prototype, "store", [_dec], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  })), _class));
  _exports.default = AuthorDetailRoute;
});
;define("ember-library/routes/author/edit", ["exports", "@ember/routing/route", "@ember/service"], function (_exports, _route, _service) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _dec, _class, _descriptor;

  0; //eaimeta@70e063a35619d71f0,"@ember/routing/route",0,"@ember/service"eaimeta@70e063a35619d71f

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  let AuthorEditRoute = (_dec = (0, _service.inject)(), (_class = class AuthorEditRoute extends _route.default {
    constructor() {
      super(...arguments);

      _initializerDefineProperty(this, "dataService", _descriptor, this);
    }

    model(_ref) {
      let {
        id
      } = _ref;
      return this.dataService.getAuthor(id);
    }

    setupController(controller, model) {
      super.setupController(...arguments);
      controller.initData();
    }

  }, (_descriptor = _applyDecoratedDescriptor(_class.prototype, "dataService", [_dec], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  })), _class));
  _exports.default = AuthorEditRoute;
});
;define("ember-library/routes/author/index", ["exports", "@ember/routing/route"], function (_exports, _route) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"@ember/routing/route"eaimeta@70e063a35619d71f

  class AuthorIndexRoute extends _route.default {}

  _exports.default = AuthorIndexRoute;
});
;define("ember-library/routes/book", ["exports", "@ember/routing/route", "rsvp"], function (_exports, _route, _rsvp) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"@ember/routing/route",0,"rsvp"eaimeta@70e063a35619d71f

  function wait(delay) {
    return new _rsvp.Promise(function (resolve) {
      setTimeout(function () {
        resolve();
      }, delay);
    });
  }

  class BookRoute extends _route.default {
    async model() {
      return await wait(500);
    }

  }

  _exports.default = BookRoute;
});
;define("ember-library/routes/book/create", ["exports", "@ember/routing/route"], function (_exports, _route) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"@ember/routing/route"eaimeta@70e063a35619d71f

  class BookCreateRoute extends _route.default {}

  _exports.default = BookCreateRoute;
});
;define("ember-library/routes/book/detail", ["exports", "@ember/routing/route"], function (_exports, _route) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"@ember/routing/route"eaimeta@70e063a35619d71f

  class BookDetailRoute extends _route.default {}

  _exports.default = BookDetailRoute;
});
;define("ember-library/routes/book/edit", ["exports", "@ember/routing/route"], function (_exports, _route) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"@ember/routing/route"eaimeta@70e063a35619d71f

  class BookEditRoute extends _route.default {}

  _exports.default = BookEditRoute;
});
;define("ember-library/routes/not-found", ["exports", "@ember/routing/route"], function (_exports, _route) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"@ember/routing/route"eaimeta@70e063a35619d71f

  class NotFoundRoute extends _route.default {}

  _exports.default = NotFoundRoute;
});
;define("ember-library/serializers/-default", ["exports", "@ember-data/serializer/json"], function (_exports, _json) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _json.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"@ember-data/serializer/json"eaimeta@70e063a35619d71f
});
;define("ember-library/serializers/-json-api", ["exports", "@ember-data/serializer/json-api"], function (_exports, _jsonApi) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _jsonApi.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"@ember-data/serializer/json-api"eaimeta@70e063a35619d71f
});
;define("ember-library/serializers/-rest", ["exports", "@ember-data/serializer/rest"], function (_exports, _rest) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _rest.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"@ember-data/serializer/rest"eaimeta@70e063a35619d71f
});
;define("ember-library/serializers/application", ["exports", "@ember-data/serializer/json"], function (_exports, _json) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"@ember-data/serializer/json"eaimeta@70e063a35619d71f

  class ApplicationSerializer extends _json.default {
    extractRelationship(relationshipModelName, relationshipHash) {
      let hash = relationshipHash.id ? relationshipHash.id : relationshipHash;
      return super.extractRelationship.call(this, relationshipModelName, hash); // return super.extractRelationship(...arguments);
    }

  }

  _exports.default = ApplicationSerializer;
});
;define("ember-library/services/data-service", ["exports", "@ember/service", "ember-library/config/environment"], function (_exports, _service, _environment) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"@ember/service",0,"ember-library/config/environment"eaimeta@70e063a35619d71f

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  class DataServiceService extends _service.default {
    constructor() {
      super(...arguments);

      _defineProperty(this, "baseUrl", _environment.default.APP.backEndUrl);
    }

    async createAuthor(author) {
      return await fetch(`${this.baseUrl}/authors`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(author)
      });
    }

    async deleteAuthor(id) {
      return await fetch(`${this.baseUrl}/authors/${id}`, {
        method: 'DELETE'
      });
    }

    async editAuthor(author) {
      return await fetch(`${this.baseUrl}/authors/${author.id}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(author)
      });
    }

    async getAuthors(searchTerm) {
      let query = searchTerm ? `?q=${searchTerm}` : '';
      let response = await fetch(`${this.baseUrl}/authors${query}`);
      return await response.json();
    }

    async getAuthor(id) {
      let response = await fetch(`${this.baseUrl}/authors/${id}`);
      return await response.json();
    }

  }

  _exports.default = DataServiceService;
});
;define("ember-library/services/liquid-fire-transitions", ["exports", "liquid-fire/transition-map"], function (_exports, _transitionMap) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"liquid-fire/transition-map"eaimeta@70e063a35619d71f

  var _default = _transitionMap.default;
  _exports.default = _default;
});
;define("ember-library/services/page-title-list", ["exports", "ember-page-title/services/page-title-list"], function (_exports, _pageTitleList) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _pageTitleList.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-page-title/services/page-title-list"eaimeta@70e063a35619d71f
});
;define("ember-library/services/page-title", ["exports", "ember-page-title/services/page-title"], function (_exports, _pageTitle) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _pageTitle.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-page-title/services/page-title"eaimeta@70e063a35619d71f
});
;define("ember-library/services/store", ["exports", "ember-data/store"], function (_exports, _store) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _store.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-data/store"eaimeta@70e063a35619d71f
});
;define("ember-library/templates/application", ["exports", "@ember/template-factory"], function (_exports, _templateFactory) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"@ember/template-factory"eaimeta@70e063a35619d71f

  var _default = (0, _templateFactory.createTemplateFactory)({
    "id": "RJv/oCip",
    "block": "[[[10,0],[14,0,\"app\"],[12],[1,\"\\n  \"],[10,\"nav\"],[14,0,\"main-nav\"],[12],[1,\"\\n    \"],[10,\"h1\"],[14,0,\"logo\"],[12],[1,\"\\n      \"],[8,[39,0],null,[[\"@route\"],[\"index\"]],[[\"default\"],[[[[1,\"\\n        \"],[10,\"img\"],[14,\"src\",\"/logo.svg\"],[14,\"alt\",\"Ember Library\"],[12],[13],[1,\"\\n        \"],[10,1],[14,0,\"sr-only\"],[12],[1,\"\\n          Ember Library\\n        \"],[13],[1,\"\\n      \"]],[]]]]],[1,\"\\n    \"],[13],[1,\"\\n    \"],[10,\"ul\"],[12],[1,\"\\n      \"],[10,\"li\"],[12],[1,\"\\n        \"],[8,[39,0],null,[[\"@route\"],[\"author\"]],[[\"default\"],[[[[1,\"\\n          Authors\\n        \"]],[]]]]],[1,\"\\n      \"],[13],[1,\"\\n      \"],[10,\"li\"],[12],[1,\"\\n        \"],[8,[39,0],null,[[\"@route\"],[\"book\"]],[[\"default\"],[[[[1,\"\\n          Books\\n        \"]],[]]]]],[1,\"\\n      \"],[13],[1,\"\\n    \"],[13],[1,\"\\n  \"],[13],[1,\"\\n  \"],[10,\"main\"],[14,0,\"app-content\"],[12],[1,\"\\n    \"],[46,[28,[37,2],null,null],null,null,null],[1,\"\\n  \"],[13],[1,\"\\n\"],[13],[1,\"\\n\"]],[],false,[\"link-to\",\"component\",\"-outlet\"]]",
    "moduleName": "ember-library/templates/application.hbs",
    "isStrictMode": false
  });

  _exports.default = _default;
});
;define("ember-library/templates/author", ["exports", "@ember/template-factory"], function (_exports, _templateFactory) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"@ember/template-factory"eaimeta@70e063a35619d71f

  var _default = (0, _templateFactory.createTemplateFactory)({
    "id": "8RkK/X2I",
    "block": "[[[1,[28,[35,0],[\"Author\"],null]],[1,\"\\n\"],[10,0],[14,0,\"panel-heading\"],[12],[1,\"\\n  \"],[10,0],[14,0,\"search\"],[12],[1,\"\\n    \"],[8,[39,1],[[24,\"placeholder\",\"Search by Author Name\"]],[[\"@type\",\"@value\"],[\"text\",[30,0,[\"searchTerm\"]]]],null],[1,\"\\n  \"],[13],[1,\"\\n  \"],[8,[39,2],[[24,0,\"btn-new\"]],[[\"@route\"],[\"author.create\"]],[[\"default\"],[[[[1,\"\\n    \"],[10,0],[14,0,\"sr-only\"],[12],[1,\"\\n      Add new Author\\n    \"],[13],[1,\"\\n  \"]],[]]]]],[1,\"\\n\"],[13],[1,\"\\n\"],[10,0],[14,0,\"panel-content\"],[12],[1,\"\\n  \"],[10,\"h3\"],[14,0,\"panel-title\"],[12],[1,\"\\n    Authors\\n  \"],[13],[1,\"\\n\"],[41,[30,0,[\"isLoading\"]],[[[1,\"    \"],[10,0],[14,0,\"welcome-page\"],[12],[1,\"\\n      \"],[8,[39,4],null,null,null],[1,\"\\n    \"],[13],[1,\"\\n\"]],[]],[[[1,\"    \"],[10,\"ul\"],[14,0,\"collection\"],[12],[1,\"\\n\"],[42,[28,[37,6],[[28,[37,6],[[30,0,[\"model\"]]],null]],null],null,[[[1,\"        \"],[10,\"li\"],[12],[1,\"\\n          \"],[8,[39,7],null,[[\"@model\",\"@index\"],[[30,1],[30,2]]],null],[1,\"\\n        \"],[13],[1,\"\\n\"]],[1,2]],null],[1,\"    \"],[13],[1,\"\\n\"]],[]]],[13],[1,\"\\n\"],[1,[28,[35,8],null,[[\"class\"],[\"slide-container\"]]]],[1,\"\\n\"]],[\"author\",\"i\"],false,[\"page-title\",\"input\",\"link-to\",\"if\",\"spinner\",\"each\",\"-track-array\",\"author-list-item\",\"liquid-outlet\"]]",
    "moduleName": "ember-library/templates/author.hbs",
    "isStrictMode": false
  });

  _exports.default = _default;
});
;define("ember-library/templates/author/create", ["exports", "@ember/template-factory"], function (_exports, _templateFactory) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"@ember/template-factory"eaimeta@70e063a35619d71f

  var _default = (0, _templateFactory.createTemplateFactory)({
    "id": "PiI+qtld",
    "block": "[[[1,[28,[35,0],[\"Create\"],null]],[1,\"\\n\"],[10,0],[14,0,\"slide-out-bg\"],[12],[13],[1,\"\\n\"],[10,0],[14,0,\"slide-out\"],[12],[1,\"\\n  \"],[10,0],[14,0,\"slide-out-card\"],[12],[1,\"\\n    \"],[8,[39,1],[[24,0,\"btn-back\"]],[[\"@route\"],[\"author\"]],[[\"default\"],[[[[1,\"\\n      \"],[10,1],[14,0,\"sr-only\"],[12],[1,\"\\n        Back\\n      \"],[13],[1,\"\\n      ←\\n    \"]],[]]]]],[1,\"\\n    \"],[10,0],[14,0,\"slide-out-heading\"],[12],[1,\"\\n      \"],[10,0],[14,0,\"title\"],[12],[1,\"\\n        \"],[10,\"h3\"],[12],[1,\"\\n          New Author\\n        \"],[13],[1,\"\\n      \"],[13],[1,\"\\n    \"],[13],[1,\"\\n    \"],[10,0],[14,0,\"slide-out-content\"],[12],[1,\"\\n      \"],[8,[39,2],null,[[\"@saveAuthor\",\"@author\"],[[30,0,[\"createAuthor\"]],[30,0,[\"model\"]]]],null],[1,\"\\n    \"],[13],[1,\"\\n  \"],[13],[1,\"\\n\"],[13],[1,\"\\n\"]],[],false,[\"page-title\",\"link-to\",\"author-form\"]]",
    "moduleName": "ember-library/templates/author/create.hbs",
    "isStrictMode": false
  });

  _exports.default = _default;
});
;define("ember-library/templates/author/detail", ["exports", "@ember/template-factory"], function (_exports, _templateFactory) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"@ember/template-factory"eaimeta@70e063a35619d71f

  var _default = (0, _templateFactory.createTemplateFactory)({
    "id": "yRvyqldg",
    "block": "[[[1,[28,[35,0],[\"Detail\"],null]],[1,\"\\n\"],[10,0],[14,0,\"slide-out-bg\"],[12],[13],[1,\"\\n\"],[10,0],[14,0,\"slide-out\"],[12],[1,\"\\n  \"],[10,0],[14,0,\"slide-out-card\"],[12],[1,\"\\n    \"],[8,[39,1],[[24,0,\"btn-back\"]],[[\"@route\"],[\"author\"]],[[\"default\"],[[[[1,\"\\n      \"],[10,1],[14,0,\"sr-only\"],[12],[1,\"\\n        Back\\n      \"],[13],[1,\"\\n      ←\\n    \"]],[]]]]],[1,\"\\n    \"],[10,0],[14,0,\"slide-out-heading\"],[12],[1,\"\\n      \"],[10,0],[14,0,\"title\"],[12],[1,\"\\n        \"],[10,\"h3\"],[12],[1,\"\\n          \"],[1,[30,0,[\"model\",\"firstName\"]]],[1,\"\\n          \"],[1,[30,0,[\"model\",\"lastName\"]]],[1,\"\\n        \"],[13],[1,\"\\n        \"],[10,0],[14,0,\"actions\"],[12],[1,\"\\n          \"],[8,[39,1],[[24,0,\"btn btn-pop\"]],[[\"@route\",\"@model\"],[\"author.edit\",[30,0,[\"model\"]]]],[[\"default\"],[[[[1,\"\\n            Edit\\n          \"]],[]]]]],[1,\"\\n          \"],[11,\"button\"],[24,0,\"btn-recessed\"],[24,4,\"button\"],[4,[38,2],[\"click\",[28,[37,3],[[30,0,[\"deleteAuthor\"]],[30,0,[\"model\",\"id\"]]],null]],null],[12],[1,\"\\n            Delete\\n          \"],[13],[1,\"\\n        \"],[13],[1,\"\\n      \"],[13],[1,\"\\n    \"],[13],[1,\"\\n    \"],[10,0],[14,0,\"slide-out-content\"],[12],[13],[1,\"\\n  \"],[13],[1,\"\\n\"],[13],[1,\"\\n\"]],[],false,[\"page-title\",\"link-to\",\"on\",\"fn\"]]",
    "moduleName": "ember-library/templates/author/detail.hbs",
    "isStrictMode": false
  });

  _exports.default = _default;
});
;define("ember-library/templates/author/edit", ["exports", "@ember/template-factory"], function (_exports, _templateFactory) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"@ember/template-factory"eaimeta@70e063a35619d71f

  var _default = (0, _templateFactory.createTemplateFactory)({
    "id": "1uDYF5Xw",
    "block": "[[[1,[28,[35,0],[\"Edit\"],null]],[1,\"\\n\"],[10,0],[14,0,\"slide-out-bg\"],[12],[13],[1,\"\\n\"],[10,0],[14,0,\"slide-out\"],[12],[1,\"\\n  \"],[10,0],[14,0,\"slide-out-card\"],[12],[1,\"\\n    \"],[8,[39,1],[[24,0,\"btn-back\"]],[[\"@route\",\"@model\"],[\"author.detail\",[30,0,[\"model\"]]]],[[\"default\"],[[[[1,\"\\n      \"],[10,1],[14,0,\"sr-only\"],[12],[1,\"\\n        Back\\n      \"],[13],[1,\"\\n      ←\\n    \"]],[]]]]],[1,\"\\n    \"],[10,0],[14,0,\"slide-out-heading\"],[12],[1,\"\\n      \"],[10,0],[14,0,\"title\"],[12],[1,\"\\n        \"],[10,\"h3\"],[12],[1,\"\\n          Edit\\n          \"],[1,[30,0,[\"model\",\"author\"]]],[1,\"\\n        \"],[13],[1,\"\\n      \"],[13],[1,\"\\n    \"],[13],[1,\"\\n    \"],[10,0],[14,0,\"slide-out-content\"],[12],[1,\"\\n      \"],[8,[39,2],null,[[\"@saveAuthor\",\"@author\",\"@buttonText\"],[[30,0,[\"editAuthor\"]],[30,0,[\"model\"]],\"Edit Author\"]],null],[1,\"\\n    \"],[13],[1,\"\\n  \"],[13],[1,\"\\n\"],[13],[1,\"\\n\"]],[],false,[\"page-title\",\"link-to\",\"author-form\"]]",
    "moduleName": "ember-library/templates/author/edit.hbs",
    "isStrictMode": false
  });

  _exports.default = _default;
});
;define("ember-library/templates/author/index", ["exports", "@ember/template-factory"], function (_exports, _templateFactory) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"@ember/template-factory"eaimeta@70e063a35619d71f

  var _default = (0, _templateFactory.createTemplateFactory)({
    "id": "dLaDT6BE",
    "block": "[[[1,[28,[35,0],[\"Index\"],null]],[46,[28,[37,2],null,null],null,null,null],[1,\"\\n\"]],[],false,[\"page-title\",\"component\",\"-outlet\"]]",
    "moduleName": "ember-library/templates/author/index.hbs",
    "isStrictMode": false
  });

  _exports.default = _default;
});
;define("ember-library/templates/book", ["exports", "@ember/template-factory"], function (_exports, _templateFactory) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"@ember/template-factory"eaimeta@70e063a35619d71f

  var _default = (0, _templateFactory.createTemplateFactory)({
    "id": "3SelTKxD",
    "block": "[[[1,[28,[35,0],[\"Books\"],null]],[1,\"\\n\"],[10,0],[14,0,\"panel-heading\"],[12],[1,\"\\n  \"],[10,0],[14,0,\"search\"],[12],[1,\"\\n    \"],[8,[39,1],[[24,\"placeholder\",\"Search by Title or ISBN\"],[24,4,\"text\"]],[[\"@value\"],[[30,0,[\"search\"]]]],null],[1,\"\\n  \"],[13],[1,\"\\n  \"],[8,[39,2],[[24,0,\"btn-new\"]],[[\"@route\"],[\"book.create\"]],[[\"default\"],[[[[1,\"\\n    \"],[10,0],[14,0,\"sr-only\"],[12],[1,\"\\n      Add New Book\\n    \"],[13],[1,\"\\n  \"]],[]]]]],[1,\"\\n\"],[13],[1,\"\\n\"],[10,0],[14,0,\"panel-content\"],[12],[1,\"\\n  \"],[10,\"h3\"],[14,0,\"panel-title\"],[12],[1,\"\\n    Books\\n  \"],[13],[1,\"\\n  \"],[10,\"ul\"],[14,0,\"collection\"],[12],[1,\"\\n\"],[42,[28,[37,4],[[28,[37,4],[[30,0,[\"model\"]]],null]],null],null,[[[1,\"      \"],[10,\"li\"],[12],[1,\"\\n        \"],[8,[39,2],null,[[\"@route\",\"@model\"],[\"book.detail\",[30,1,[\"id\"]]]],[[\"default\"],[[[[1,\"\\n          \"],[10,1],[14,0,\"book-title\"],[12],[1,\"\\n            \"],[1,[30,1,[\"title\"]]],[1,\"\\n          \"],[13],[1,\"\\n          \"],[10,\"em\"],[14,0,\"book-isbn\"],[12],[1,\"\\n            \"],[1,[30,1,[\"isbn\"]]],[1,\"\\n          \"],[13],[1,\"\\n        \"]],[]]]]],[1,\"\\n      \"],[13],[1,\"\\n\"]],[1]],null],[1,\"  \"],[13],[1,\"\\n\"],[13],[1,\"\\n\"],[1,[28,[35,5],null,[[\"class\"],[\"slide-container\"]]]],[1,\"\\n\"]],[\"book\"],false,[\"page-title\",\"input\",\"link-to\",\"each\",\"-track-array\",\"liquid-outlet\"]]",
    "moduleName": "ember-library/templates/book.hbs",
    "isStrictMode": false
  });

  _exports.default = _default;
});
;define("ember-library/templates/book/create", ["exports", "@ember/template-factory"], function (_exports, _templateFactory) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"@ember/template-factory"eaimeta@70e063a35619d71f

  var _default = (0, _templateFactory.createTemplateFactory)({
    "id": "Muclf70D",
    "block": "[[[1,[28,[35,0],[\"Create\"],null]],[1,\"\\n\"],[10,0],[14,0,\"slide-out-bg\"],[12],[13],[1,\"\\n\"],[10,0],[14,0,\"slide-out\"],[12],[1,\"\\n  \"],[10,0],[14,0,\"slide-out-card\"],[12],[1,\"\\n    \"],[8,[39,1],[[24,0,\"btn-back\"]],[[\"@route\"],[\"book\"]],[[\"default\"],[[[[1,\"\\n      \"],[10,1],[14,0,\"sr-only\"],[12],[1,\"\\n        Back\\n      \"],[13],[1,\"\\n      ←\\n    \"]],[]]]]],[1,\"\\n    \"],[10,0],[14,0,\"slide-out-heading\"],[12],[1,\"\\n      \"],[10,0],[14,0,\"title\"],[12],[1,\"\\n        \"],[10,\"h3\"],[12],[1,\"\\n          New Book\\n        \"],[13],[1,\"\\n      \"],[13],[1,\"\\n    \"],[13],[1,\"\\n    \"],[10,0],[14,0,\"slide-out-content\"],[12],[13],[1,\"\\n  \"],[13],[1,\"\\n\"],[13],[1,\"\\n\"]],[],false,[\"page-title\",\"link-to\"]]",
    "moduleName": "ember-library/templates/book/create.hbs",
    "isStrictMode": false
  });

  _exports.default = _default;
});
;define("ember-library/templates/book/detail", ["exports", "@ember/template-factory"], function (_exports, _templateFactory) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"@ember/template-factory"eaimeta@70e063a35619d71f

  var _default = (0, _templateFactory.createTemplateFactory)({
    "id": "DaBjCNhl",
    "block": "[[[1,[28,[35,0],[\"Detail\"],null]],[1,\"\\n\"],[10,0],[14,0,\"slide-out-bg\"],[12],[13],[1,\"\\n\"],[10,0],[14,0,\"slide-out\"],[12],[1,\"\\n  \"],[10,0],[14,0,\"slide-out-card\"],[12],[1,\"\\n    \"],[8,[39,1],[[24,0,\"btn-back\"]],[[\"@route\"],[\"book\"]],[[\"default\"],[[[[1,\"\\n      \"],[10,0],[14,0,\"sr-only\"],[12],[1,\"\\n        Back\\n      \"],[13],[1,\"\\n      ←\\n    \"]],[]]]]],[1,\"\\n    \"],[10,0],[14,0,\"slide-out-heading\"],[12],[1,\"\\n      \"],[10,0],[14,0,\"title\"],[12],[1,\"\\n        \"],[10,\"h3\"],[12],[1,\"\\n          \"],[1,[30,0,[\"model\",\"title\"]]],[1,\"\\n        \"],[13],[1,\"\\n        \"],[10,0],[14,0,\"actions\"],[12],[1,\"\\n          \"],[8,[39,1],[[24,0,\"btn-pop\"]],[[\"@route\",\"@model\"],[\"book.edit\",[30,0,[\"model\",\"id\"]]]],[[\"default\"],[[[[1,\"\\n            Edit\\n          \"]],[]]]]],[1,\"\\n          \"],[10,\"button\"],[14,0,\"btn-recessed\"],[14,4,\"button\"],[12],[1,\"\\n            delete\\n          \"],[13],[1,\"\\n        \"],[13],[1,\"\\n      \"],[13],[1,\"\\n      \"],[10,0],[14,0,\"details\"],[12],[1,\"\\n        \"],[10,2],[12],[1,\"\\n          \"],[10,\"strong\"],[12],[1,\"\\n            Author:\\n          \"],[13],[1,\"\\n          \"],[8,[39,1],null,[[\"@route\",\"@model\"],[\"author.detail\",[30,0,[\"model\",\"author\",\"id\"]]]],[[\"default\"],[[[[1,\"\\n            \"],[1,[30,0,[\"model\",\"author\",\"lastName\"]]],[1,\"\\n            \"],[1,[30,0,[\"model\",\"author\",\"firstName\"]]],[1,\"\\n          \"]],[]]]]],[1,\"\\n        \"],[13],[1,\"\\n        \"],[10,2],[12],[1,\"\\n          \"],[10,\"strong\"],[12],[1,\"\\n            Publish Date:\\n          \"],[13],[1,\"\\n          \"],[1,[30,0,[\"model\",\"publishDate\"]]],[1,\"\\n        \"],[13],[1,\"\\n        \"],[10,2],[12],[1,\"\\n          \"],[10,\"strong\"],[12],[1,\"\\n            ISBN:\\n          \"],[13],[1,\"\\n          \"],[1,[30,0,[\"model\",\"isbn\"]]],[1,\"\\n        \"],[13],[1,\"\\n        \"],[10,2],[12],[1,\"\\n          \"],[10,\"strong\"],[12],[1,\"\\n            Added By:\\n          \"],[13],[1,\"\\n          \"],[1,[30,0,[\"model\",\"username\"]]],[1,\"\\n        \"],[13],[1,\"\\n      \"],[13],[1,\"\\n    \"],[13],[1,\"\\n    \"],[1,[34,2]],[1,\"\\n  \"],[13],[1,\"\\n\"],[13],[1,\"\\n\"]],[],false,[\"page-title\",\"link-to\",\"liquid-outlet\"]]",
    "moduleName": "ember-library/templates/book/detail.hbs",
    "isStrictMode": false
  });

  _exports.default = _default;
});
;define("ember-library/templates/book/edit", ["exports", "@ember/template-factory"], function (_exports, _templateFactory) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"@ember/template-factory"eaimeta@70e063a35619d71f

  var _default = (0, _templateFactory.createTemplateFactory)({
    "id": "/YhCBh4Y",
    "block": "[[[1,[28,[35,0],[\"Edit\"],null]],[1,\"\\n\"],[10,0],[14,0,\"slide-out-bg\"],[12],[13],[1,\"\\n\"],[10,0],[14,0,\"slide-out\"],[12],[1,\"\\n  \"],[10,0],[14,0,\"slide-out-card\"],[12],[1,\"\\n    \"],[8,[39,1],[[24,0,\"btn-back\"]],[[\"@route\",\"@model\"],[\"book.detail\",[30,0,[\"model\",\"id\"]]]],[[\"default\"],[[[[1,\"\\n      \"],[10,1],[14,0,\"sr-only\"],[12],[1,\"\\n        Back\\n      \"],[13],[1,\"\\n    \"]],[]]]]],[1,\"\\n    \"],[10,0],[14,0,\"slide-out-heading\"],[12],[1,\"\\n      \"],[10,0],[14,0,\"title\"],[12],[1,\"\\n        \"],[10,\"h3\"],[12],[1,\"\\n          Editing\\n          \"],[1,[30,0,[\"model\",\"title\"]]],[1,\"\\n        \"],[13],[1,\"\\n      \"],[13],[1,\"\\n    \"],[13],[1,\"\\n    \"],[10,0],[14,0,\"slide-out-content\"],[12],[13],[1,\"\\n  \"],[13],[1,\"\\n\"],[13],[1,\"\\n\"]],[],false,[\"page-title\",\"link-to\"]]",
    "moduleName": "ember-library/templates/book/edit.hbs",
    "isStrictMode": false
  });

  _exports.default = _default;
});
;define("ember-library/templates/error", ["exports", "@ember/template-factory"], function (_exports, _templateFactory) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"@ember/template-factory"eaimeta@70e063a35619d71f

  var _default = (0, _templateFactory.createTemplateFactory)({
    "id": "w7O1EGee",
    "block": "[[[10,0],[14,0,\"error-pane\"],[12],[1,\"\\n  \"],[10,0],[14,0,\"error-message\"],[12],[1,\"\\n    Something went wrong while fetching data...\\n  \"],[13],[1,\"\\n\"],[13],[1,\"\\n\"]],[],false,[]]",
    "moduleName": "ember-library/templates/error.hbs",
    "isStrictMode": false
  });

  _exports.default = _default;
});
;define("ember-library/templates/index", ["exports", "@ember/template-factory"], function (_exports, _templateFactory) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"@ember/template-factory"eaimeta@70e063a35619d71f

  var _default = (0, _templateFactory.createTemplateFactory)({
    "id": "Nf23bmNM",
    "block": "[[[10,0],[14,0,\"welcome-page\"],[12],[1,\"\\n  \"],[10,\"img\"],[14,\"src\",\"/welcome.svg\"],[14,\"alt\",\"Welcome\"],[12],[13],[1,\"\\n  \"],[10,\"h2\"],[12],[1,\"\\n    Welcome to Ember Library\\n  \"],[13],[1,\"\\n  \"],[10,\"hr\"],[12],[13],[1,\"\\n  \"],[10,\"h3\"],[12],[1,\"\\n    Where anyone can review their favorite books and authors!\\n  \"],[13],[1,\"\\n\"],[13],[1,\"\\n\"]],[],false,[]]",
    "moduleName": "ember-library/templates/index.hbs",
    "isStrictMode": false
  });

  _exports.default = _default;
});
;define("ember-library/templates/loading", ["exports", "@ember/template-factory"], function (_exports, _templateFactory) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"@ember/template-factory"eaimeta@70e063a35619d71f

  var _default = (0, _templateFactory.createTemplateFactory)({
    "id": "szvzF4jq",
    "block": "[[[10,0],[14,0,\"loading-pane\"],[12],[1,\"\\n  \"],[10,0],[14,0,\"loading-message\"],[12],[1,\"\\n    Loading data...\\n  \"],[13],[1,\"\\n  \"],[8,[39,0],null,null,null],[1,\"\\n\"],[13],[1,\"\\n\"]],[],false,[\"spinner\"]]",
    "moduleName": "ember-library/templates/loading.hbs",
    "isStrictMode": false
  });

  _exports.default = _default;
});
;define("ember-library/templates/not-found", ["exports", "@ember/template-factory"], function (_exports, _templateFactory) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"@ember/template-factory"eaimeta@70e063a35619d71f

  var _default = (0, _templateFactory.createTemplateFactory)({
    "id": "KL5vE+in",
    "block": "[[[1,[28,[35,0],[\"NotFound\"],null]],[1,\"\\n\"],[10,\"h4\"],[14,0,\"welcome-page\"],[12],[1,\"\\n  The page you are looking for doesn't exist...\\n\"],[13],[1,\"\\n\"],[46,[28,[37,2],null,null],null,null,null],[1,\"\\n\"]],[],false,[\"page-title\",\"component\",\"-outlet\"]]",
    "moduleName": "ember-library/templates/not-found.hbs",
    "isStrictMode": false
  });

  _exports.default = _default;
});
;define("ember-library/transforms/boolean", ["exports", "@ember-data/serializer/-private"], function (_exports, _private) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _private.BooleanTransform;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"@ember-data/serializer/-private"eaimeta@70e063a35619d71f
});
;define("ember-library/transforms/date", ["exports", "@ember-data/serializer/-private"], function (_exports, _private) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _private.DateTransform;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"@ember-data/serializer/-private"eaimeta@70e063a35619d71f
});
;define("ember-library/transforms/number", ["exports", "@ember-data/serializer/-private"], function (_exports, _private) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _private.NumberTransform;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"@ember-data/serializer/-private"eaimeta@70e063a35619d71f
});
;define("ember-library/transforms/string", ["exports", "@ember-data/serializer/-private"], function (_exports, _private) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _private.StringTransform;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"@ember-data/serializer/-private"eaimeta@70e063a35619d71f
});
;define("ember-library/transitions", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = _default;
  0; //eaimeta@70e063a35619d71feaimeta@70e063a35619d71f

  const duration = 600;
  const slidingCardIn = [{
    pickNew: '.slide-out-bg',
    use: ['fade', {
      duration
    }]
  }, {
    pickNew: '.slide-out-card',
    use: ['wait', duration, {
      then: 'toLeft'
    }, {
      duration
    }]
  }];
  const slidingCardOut = [{
    pickOld: '.slide-out-bg',
    use: ['wait', duration, {
      then: 'fade'
    }, {
      duration
    }]
  }, {
    pickOld: '.slide-out-card',
    use: ['toRight', {
      duration
    }]
  }];

  function _default() {
    this.transition(this.hasClass('modal-if'), this.use('fade', {
      duration
    }));
    this.transition(this.fromRoute('book.detail.index'), this.use('toLeft', {
      duration
    }), this.reverse('toRight', {
      duration
    }));
    this.transition(this.fromRoute('author.detail.index'), this.use('fade', {
      duration
    }), this.reverse('fade', {
      duration
    }));
    this.transition(this.fromRoute('author.index'), this.use('explode', ...slidingCardIn), this.reverse('explode', ...slidingCardOut));
    this.transition(this.fromRoute('book.index'), this.use('explode', ...slidingCardIn), this.reverse('explode', ...slidingCardOut)); // Add your transitions here, like:
    //   this.transition(
    //     this.fromRoute('people.index'),
    //     this.toRoute('people.detail'),
    //     this.use('toLeft'),
    //     this.reverse('toRight')
    //   );
  }
});
;define("ember-library/transitions/cross-fade", ["exports", "liquid-fire/transitions/cross-fade"], function (_exports, _crossFade) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _crossFade.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"liquid-fire/transitions/cross-fade"eaimeta@70e063a35619d71f
});
;define("ember-library/transitions/default", ["exports", "liquid-fire/transitions/default"], function (_exports, _default) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _default.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"liquid-fire/transitions/default"eaimeta@70e063a35619d71f
});
;define("ember-library/transitions/explode", ["exports", "liquid-fire/transitions/explode"], function (_exports, _explode) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _explode.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"liquid-fire/transitions/explode"eaimeta@70e063a35619d71f
});
;define("ember-library/transitions/fade", ["exports", "liquid-fire/transitions/fade"], function (_exports, _fade) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _fade.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"liquid-fire/transitions/fade"eaimeta@70e063a35619d71f
});
;define("ember-library/transitions/flex-grow", ["exports", "liquid-fire/transitions/flex-grow"], function (_exports, _flexGrow) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _flexGrow.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"liquid-fire/transitions/flex-grow"eaimeta@70e063a35619d71f
});
;define("ember-library/transitions/fly-to", ["exports", "liquid-fire/transitions/fly-to"], function (_exports, _flyTo) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _flyTo.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"liquid-fire/transitions/fly-to"eaimeta@70e063a35619d71f
});
;define("ember-library/transitions/move-over", ["exports", "liquid-fire/transitions/move-over"], function (_exports, _moveOver) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _moveOver.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"liquid-fire/transitions/move-over"eaimeta@70e063a35619d71f
});
;define("ember-library/transitions/scale", ["exports", "liquid-fire/transitions/scale"], function (_exports, _scale) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _scale.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"liquid-fire/transitions/scale"eaimeta@70e063a35619d71f
});
;define("ember-library/transitions/scroll-then", ["exports", "liquid-fire/transitions/scroll-then"], function (_exports, _scrollThen) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _scrollThen.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"liquid-fire/transitions/scroll-then"eaimeta@70e063a35619d71f
});
;define("ember-library/transitions/to-down", ["exports", "liquid-fire/transitions/to-down"], function (_exports, _toDown) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _toDown.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"liquid-fire/transitions/to-down"eaimeta@70e063a35619d71f
});
;define("ember-library/transitions/to-left", ["exports", "liquid-fire/transitions/to-left"], function (_exports, _toLeft) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _toLeft.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"liquid-fire/transitions/to-left"eaimeta@70e063a35619d71f
});
;define("ember-library/transitions/to-right", ["exports", "liquid-fire/transitions/to-right"], function (_exports, _toRight) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _toRight.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"liquid-fire/transitions/to-right"eaimeta@70e063a35619d71f
});
;define("ember-library/transitions/to-up", ["exports", "liquid-fire/transitions/to-up"], function (_exports, _toUp) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _toUp.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"liquid-fire/transitions/to-up"eaimeta@70e063a35619d71f
});
;define("ember-library/transitions/wait", ["exports", "liquid-fire/transitions/wait"], function (_exports, _wait) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _wait.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"liquid-fire/transitions/wait"eaimeta@70e063a35619d71f
});
;

;define('ember-library/config/environment', [], function() {
  var prefix = 'ember-library';
try {
  var metaName = prefix + '/config/environment';
  var rawConfig = document.querySelector('meta[name="' + metaName + '"]').getAttribute('content');
  var config = JSON.parse(decodeURIComponent(rawConfig));

  var exports = { 'default': config };

  Object.defineProperty(exports, '__esModule', { value: true });

  return exports;
}
catch(err) {
  throw new Error('Could not read config from meta tag with name "' + metaName + '".');
}

});

;
          if (!runningTests) {
            require("ember-library/app")["default"].create({"backEndUrl":"http://localhost:3000","name":"ember-library","version":"0.0.0+30941638"});
          }
        
//# sourceMappingURL=ember-library.map
