import React__default, { useMemo, useEffect, useState, useCallback, useRef, createElement, Fragment } from 'react';
import Cookies from 'js-cookie';
import { useCMS } from '@tinacms/react-core';
import { useCMS as useCMS$1, Modal, ModalPopup, ModalHeader, ModalBody, ModalActions, FieldMeta, Form, FormBuilder, FieldsBuilder, Input as Input$1, usePlugins, useForm } from 'tinacms';
import { Button, StyleReset } from '@tinacms/styles';
import { LoadingDots, ActionButton } from '@tinacms/react-forms';
import styled, { css } from 'styled-components';
import { PullRequestIcon, ChevronDownIcon, LockIcon, AddIcon } from '@tinacms/icons';
import { Input, TextArea } from '@tinacms/fields';
import { Dismissible } from 'react-dismissible';
import { Modal as Modal$1, ModalPopup as ModalPopup$1, ModalHeader as ModalHeader$1, ModalBody as ModalBody$1, ModalActions as ModalActions$1 } from '@tinacms/react-modals';
import { FORM_ERROR } from 'final-form';
import { toMarkdownString } from 'next-tinacms-markdown';

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  subClass.__proto__ = superClass;
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

function isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;

  try {
    Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}

function _construct(Parent, args, Class) {
  if (isNativeReflectConstruct()) {
    _construct = Reflect.construct;
  } else {
    _construct = function _construct(Parent, args, Class) {
      var a = [null];
      a.push.apply(a, args);
      var Constructor = Function.bind.apply(Parent, a);
      var instance = new Constructor();
      if (Class) _setPrototypeOf(instance, Class.prototype);
      return instance;
    };
  }

  return _construct.apply(null, arguments);
}

function _isNativeFunction(fn) {
  return Function.toString.call(fn).indexOf("[native code]") !== -1;
}

function _wrapNativeSuper(Class) {
  var _cache = typeof Map === "function" ? new Map() : undefined;

  _wrapNativeSuper = function _wrapNativeSuper(Class) {
    if (Class === null || !_isNativeFunction(Class)) return Class;

    if (typeof Class !== "function") {
      throw new TypeError("Super expression must either be null or a function");
    }

    if (typeof _cache !== "undefined") {
      if (_cache.has(Class)) return _cache.get(Class);

      _cache.set(Class, Wrapper);
    }

    function Wrapper() {
      return _construct(Class, arguments, _getPrototypeOf(this).constructor);
    }

    Wrapper.prototype = Object.create(Class.prototype, {
      constructor: {
        value: Wrapper,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
    return _setPrototypeOf(Wrapper, Class);
  };

  return _wrapNativeSuper(Class);
}

function _taggedTemplateLiteralLoose(strings, raw) {
  if (!raw) {
    raw = strings.slice(0);
  }

  strings.raw = raw;
  return strings;
}

// A type of promise-like that resolves synchronously and supports only one observer
var _Pact =
/*#__PURE__*/
function () {
  function _Pact() {}

  _Pact.prototype.then = function (onFulfilled, onRejected) {
    var result = new _Pact();
    var state = this.s;

    if (state) {
      var callback = state & 1 ? onFulfilled : onRejected;

      if (callback) {
        try {
          _settle(result, 1, callback(this.v));
        } catch (e) {
          _settle(result, 2, e);
        }

        return result;
      } else {
        return this;
      }
    }

    this.o = function (_this) {
      try {
        var value = _this.v;

        if (_this.s & 1) {
          _settle(result, 1, onFulfilled ? onFulfilled(value) : value);
        } else if (onRejected) {
          _settle(result, 1, onRejected(value));
        } else {
          _settle(result, 2, value);
        }
      } catch (e) {
        _settle(result, 2, e);
      }
    };

    return result;
  };

  return _Pact;
}(); // Settles a pact synchronously

function _settle(pact, state, value) {
  if (!pact.s) {
    if (value instanceof _Pact) {
      if (value.s) {
        if (state & 1) {
          state = value.s;
        }

        value = value.v;
      } else {
        value.o = _settle.bind(null, pact, state);
        return;
      }
    }

    if (value && value.then) {
      value.then(_settle.bind(null, pact, state), _settle.bind(null, pact, 2));
      return;
    }

    pact.s = state;
    pact.v = value;
    var observer = pact.o;

    if (observer) {
      observer(pact);
    }
  }
}
function _isSettledPact(thenable) {
  return thenable instanceof _Pact && thenable.s & 1;
} // Converts argument to a function that always returns a Promise

function _forTo(array, body, check) {
  var i = -1,
      pact,
      reject;

  function _cycle(result) {
    try {
      while (++i < array.length && (!check || !check())) {
        result = body(i);

        if (result && result.then) {
          if (_isSettledPact(result)) {
            result = result.v;
          } else {
            result.then(_cycle, reject || (reject = _settle.bind(null, pact = new _Pact(), 2)));
            return;
          }
        }
      }

      if (pact) {
        _settle(pact, 1, result);
      } else {
        pact = result;
      }
    } catch (e) {
      _settle(pact || (pact = new _Pact()), 2, e);
    }
  }

  _cycle();

  return pact;
} // Asynchronously iterate through an object's properties (including properties inherited from the prototype)
var _iteratorSymbol =
/*#__PURE__*/
typeof Symbol !== "undefined" ? Symbol.iterator || (Symbol.iterator =
/*#__PURE__*/
Symbol("Symbol.iterator")) : "@@iterator"; // Asynchronously iterate through an object's values
// Uses for...of if the runtime supports it, otherwise iterates until length on a copy

function _forOf(target, body, check) {
  if (typeof target[_iteratorSymbol] === "function") {
    var _cycle = function _cycle(result) {
      try {
        while (!(step = iterator.next()).done && (!check || !check())) {
          result = body(step.value);

          if (result && result.then) {
            if (_isSettledPact(result)) {
              result = result.v;
            } else {
              result.then(_cycle, reject || (reject = _settle.bind(null, pact = new _Pact(), 2)));
              return;
            }
          }
        }

        if (pact) {
          _settle(pact, 1, result);
        } else {
          pact = result;
        }
      } catch (e) {
        _settle(pact || (pact = new _Pact()), 2, e);
      }
    };

    var iterator = target[_iteratorSymbol](),
        step,
        pact,
        reject;

    _cycle();

    if (iterator["return"]) {
      var _fixup = function _fixup(value) {
        try {
          if (!step.done) {
            iterator["return"]();
          }
        } catch (e) {}

        return value;
      };

      if (pact && pact.then) {
        return pact.then(_fixup, function (e) {
          throw _fixup(e);
        });
      }

      _fixup();
    }

    return pact;
  } // No support for Symbol.iterator


  if (!("length" in target)) {
    throw new TypeError("Object is not iterable");
  } // Handle live collections properly


  var values = [];

  for (var i = 0; i < target.length; i++) {
    values.push(target[i]);
  }

  return _forTo(values, function (i) {
    return body(values[i]);
  }, check);
}
var _asyncIteratorSymbol =
/*#__PURE__*/
typeof Symbol !== "undefined" ? Symbol.asyncIterator || (Symbol.asyncIterator =
/*#__PURE__*/
Symbol("Symbol.asyncIterator")) : "@@asyncIterator"; // Asynchronously iterate on a value using it's async iterator if present, or its synchronous iterator if missing

function _switch(discriminant, cases) {
  var dispatchIndex = -1;
  var awaitBody;

  outer: {
    for (var i = 0; i < cases.length; i++) {
      var test = cases[i][0];

      if (test) {
        var testValue = test();

        if (testValue && testValue.then) {
          break outer;
        }

        if (testValue === discriminant) {
          dispatchIndex = i;
          break;
        }
      } else {
        // Found the default case, set it as the pending dispatch case
        dispatchIndex = i;
      }
    }

    if (dispatchIndex !== -1) {
      do {
        var body = cases[dispatchIndex][1];

        while (!body) {
          dispatchIndex++;
          body = cases[dispatchIndex][1];
        }

        var result = body();

        if (result && result.then) {
          awaitBody = true;
          break outer;
        }

        var fallthroughCheck = cases[dispatchIndex][2];
        dispatchIndex++;
      } while (fallthroughCheck && !fallthroughCheck());

      return result;
    }
  }

  var pact = new _Pact();

  var reject = _settle.bind(null, pact, 2);

  (awaitBody ? result.then(_resumeAfterBody) : testValue.then(_resumeAfterTest)).then(void 0, reject);
  return pact;

  function _resumeAfterTest(value) {
    for (;;) {
      if (value === discriminant) {
        dispatchIndex = i;
        break;
      }

      if (++i === cases.length) {
        if (dispatchIndex !== -1) {
          break;
        } else {
          _settle(pact, 1, result);

          return;
        }
      }

      test = cases[i][0];

      if (test) {
        value = test();

        if (value && value.then) {
          value.then(_resumeAfterTest).then(void 0, reject);
          return;
        }
      } else {
        dispatchIndex = i;
      }
    }

    do {
      var body = cases[dispatchIndex][1];

      while (!body) {
        dispatchIndex++;
        body = cases[dispatchIndex][1];
      }

      var result = body();

      if (result && result.then) {
        result.then(_resumeAfterBody).then(void 0, reject);
        return;
      }

      var fallthroughCheck = cases[dispatchIndex][2];
      dispatchIndex++;
    } while (fallthroughCheck && !fallthroughCheck());

    _settle(pact, 1, result);
  }

  function _resumeAfterBody(result) {
    for (;;) {
      var fallthroughCheck = cases[dispatchIndex][2];

      if (!fallthroughCheck || fallthroughCheck()) {
        break;
      }

      dispatchIndex++;
      var body = cases[dispatchIndex][1];

      while (!body) {
        dispatchIndex++;
        body = cases[dispatchIndex][1];
      }

      result = body();

      if (result && result.then) {
        result.then(_resumeAfterBody).then(void 0, reject);
        return;
      }
    }

    _settle(pact, 1, result);
  }
} // Asynchronously call a function and pass the result to explicitly passed continuations

function _catch(body, recover) {
  try {
    var result = body();
  } catch (e) {
    return recover(e);
  }

  if (result && result.then) {
    return result.then(void 0, recover);
  }

  return result;
} // Asynchronously await a promise and pass the result to a finally continuation

function _finallyRethrows(body, finalizer) {
  try {
    var result = body();
  } catch (e) {
    return finalizer(true, e);
  }

  if (result && result.then) {
    return result.then(finalizer.bind(null, false), finalizer.bind(null, true));
  }

  return finalizer(false, result);
} // Asynchronously await a promise and invoke a finally continuation that always overrides the result

/**

Copyright 2019 Forestry.io Inc

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

*/
var btoa =
/*#__PURE__*/
require('btoa');

var b64EncodeUnicode = function b64EncodeUnicode(str) {
  // first we use encodeURIComponent to get percent-encoded UTF-8,
  // then we convert the percent encodings into raw bytes which
  // can be fed into btoa.
  return btoa(encodeURIComponent(str).replace(/%([0-9A-F]{2})/g, function toSolidBytes(_match, p1) {
    return String.fromCharCode(parseInt(p1, 16));
  }));
};

/**

Copyright 2019 Forestry.io Inc

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

*/
function popupWindow(url, title, window, w, h) {
  var y = window.top.outerHeight / 2 + window.top.screenY - h / 2;
  var x = window.top.outerWidth / 2 + window.top.screenX - w / 2;
  return window.open(url, title, 'toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=yes, resizable=yes, copyhistory=no, width=' + w + ', height=' + h + ', top=' + y + ', left=' + x);
}

/**

Copyright 2019 Forestry.io Inc

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

*/
var GITHUB_AUTH_CODE_KEY = 'github_auth_code';
var authenticate = function authenticate(clientId, codeExchangeRoute, scope) {
  if (scope === void 0) {
    scope = 'public_repo';
  }

  var authState = Math.random().toString(36).substring(7);
  var url = "https://github.com/login/oauth/authorize?scope=" + scope + "&client_id=" + clientId + "&state=" + authState;
  return new Promise(function (resolve) {
    // @ts-ignore
    var authTab;
    window.addEventListener('storage', function (e) {
      if (e.key == GITHUB_AUTH_CODE_KEY) {
        fetch(codeExchangeRoute + "?code=" + e.newValue + "&state=" + authState).then(function (response) {
          return response.json();
        }).then(function (data) {
          var token = data.signedToken || null;

          if (token) {
            // for implementations using the csrf mitigation
            localStorage.setItem('tinacms-github-token', token);
          } else {
            console.warn('Deprecation Notice: You are using an old authentication flow, please migrate to the new one (see https://tinacms.org/blog/upgrade-notice-improved-github-security)');
          }

          if (authTab) {
            authTab.close();
          }

          resolve();
        });
      }
    });
    authTab = popupWindow(url, '_blank', window, 1000, 700);
  });
};

function removeLeadingSlash(path) {
  if (path.charAt(0) === '/') {
    return path.substring(1);
  }

  return path;
}

var GithubClient =
/*#__PURE__*/
function () {
  function GithubClient(_ref) {
    var proxy = _ref.proxy,
        clientId = _ref.clientId,
        authCallbackRoute = _ref.authCallbackRoute,
        baseRepoFullName = _ref.baseRepoFullName,
        _ref$baseBranch = _ref.baseBranch,
        baseBranch = _ref$baseBranch === void 0 ? 'master' : _ref$baseBranch,
        _ref$authScope = _ref.authScope,
        authScope = _ref$authScope === void 0 ? 'public_repo' : _ref$authScope;
    this.proxy = proxy;
    this.baseRepoFullName = baseRepoFullName;
    this.baseBranch = baseBranch;
    this.clientId = clientId;
    this.authCallbackRoute = authCallbackRoute;
    this.authScope = authScope;
    this.validate();
  }

  var _proto = GithubClient.prototype;

  _proto.authenticate = function authenticate$1() {
    return authenticate(this.clientId, this.authCallbackRoute, this.authScope);
  };

  _proto.isAuthenticated = function isAuthenticated() {
    return this.getUser();
  };

  _proto.isAuthorized = function isAuthorized() {
    var _this = this;

    return Promise.resolve(_catch(function () {
      return Promise.resolve(_this.getRepository()).then(function (repo) {
        return repo.permissions.push;
      });
    }, function () {
      return false;
    }));
  };

  _proto.getUser = function getUser() {
    try {
      var _this3 = this;

      return Promise.resolve(_catch(function () {
        return Promise.resolve(_this3.req({
          url: "https://api.github.com/user",
          method: 'GET'
        }));
      }, function (e) {
        if (e.status = 401) {
          return;
        }

        throw e;
      }));
    } catch (e) {
      return Promise.reject(e);
    }
  };

  _proto.getRepository = function getRepository() {
    return this.req({
      url: "https://api.github.com/repos/" + this.workingRepoFullName
    });
  };

  _proto.createFork = function createFork() {
    try {
      var _this5 = this;

      return Promise.resolve(_this5.req({
        url: "https://api.github.com/repos/" + _this5.baseRepoFullName + "/forks",
        method: 'POST'
      })).then(function (fork) {
        _this5.setCookie(GithubClient.WORKING_REPO_COOKIE_KEY, fork.full_name);

        return fork;
      });
    } catch (e) {
      return Promise.reject(e);
    }
  };

  _proto.createPR = function createPR(title, body) {
    var workingRepoFullName = this.workingRepoFullName;
    var headBranch = this.branchName;
    return this.req({
      url: "https://api.github.com/repos/" + this.baseRepoFullName + "/pulls",
      method: 'POST',
      data: {
        title: title ? title : 'Update from TinaCMS',
        body: body ? body : 'Please pull these awesome changes in!',
        head: workingRepoFullName.split('/')[0] + ":" + headBranch,
        base: this.baseBranch
      }
    });
  };

  _proto.setWorkingRepoFullName = function setWorkingRepoFullName(repoFullName) {
    this.setCookie(GithubClient.WORKING_REPO_COOKIE_KEY, repoFullName);
  };

  _proto.setWorkingBranch = function setWorkingBranch(branch) {
    this.setCookie(GithubClient.HEAD_BRANCH_COOKIE_KEY, branch);
  };

  _proto.fetchExistingPR = function fetchExistingPR() {
    try {
      var _this7 = this;

      var workingRepoFullName = _this7.workingRepoFullName;
      var headBranch = _this7.branchName;
      return Promise.resolve(_this7.req({
        url: "https://api.github.com/repos/" + _this7.baseRepoFullName + "/pulls",
        method: 'GET'
      })).then(function (branches) {
        for (var i = 0; i < branches.length; i++) {
          var pull = branches[i];

          if (headBranch === pull.head.ref) {
            var _pull$head$repo, _pull$base$repo;

            if (((_pull$head$repo = pull.head.repo) === null || _pull$head$repo === void 0 ? void 0 : _pull$head$repo.full_name) === workingRepoFullName && ((_pull$base$repo = pull.base.repo) === null || _pull$base$repo === void 0 ? void 0 : _pull$base$repo.full_name) === _this7.baseRepoFullName) {
              return pull; // found matching PR
            }
          }
        }
      });
    } catch (e) {
      return Promise.reject(e);
    }
  };

  _proto.getBranch = function getBranch() {
    try {
      var _this9 = this;

      return Promise.resolve(_catch(function () {
        var workingRepoFullName = _this9.workingRepoFullName;
        var branch = _this9.branchName;
        return Promise.resolve(_this9.req({
          url: "https://api.github.com/repos/" + workingRepoFullName + "/git/ref/heads/" + branch,
          method: 'GET'
        }));
      }, function (e) {
        if (e.status = 404) {
          return;
        }

        throw e;
      })); // TODO
      // if (data.ref.startsWith('refs/heads/')) {
      //   //check if branch, and not tag
      //   return data
      // }
      // return // Bubble up error here?
    } catch (e) {
      return Promise.reject(e);
    }
  };

  _proto.getBranchList = function getBranchList() {
    try {
      var _this11 = this;

      return Promise.resolve(_this11.req({
        url: "https://api.github.com/repos/" + _this11.workingRepoFullName + "/branches",
        method: 'GET'
      }));
    } catch (e) {
      return Promise.reject(e);
    }
  };

  _proto.createBranch = function createBranch(name) {
    try {
      var _this13 = this;

      console.log("creating branchhhh");
      return Promise.resolve(_this13.getBranch()).then(function (currentBranch) {
        var sha = currentBranch.object.sha;
        return _this13.req({
          url: "https://api.github.com/repos/" + _this13.workingRepoFullName + "/git/refs",
          method: 'POST',
          data: {
            ref: "refs/heads/" + name,
            sha: sha
          }
        });
      });
    } catch (e) {
      return Promise.reject(e);
    }
  };

  _proto.commit = function commit(filePath, sha, fileContents, commitMessage) {
    if (commitMessage === void 0) {
      commitMessage = 'Update from TinaCMS';
    }

    try {
      var _this15 = this;

      var repo = _this15.workingRepoFullName;
      var branch = _this15.branchName;
      return Promise.resolve(_this15.req({
        url: "https://api.github.com/repos/" + repo + "/contents/" + removeLeadingSlash(filePath),
        method: 'PUT',
        data: {
          message: commitMessage,
          content: b64EncodeUnicode(fileContents),
          sha: sha,
          branch: branch
        }
      }));
    } catch (e) {
      return Promise.reject(e);
    }
  };

  _proto.getDownloadUrl = function getDownloadUrl(path) {
    try {
      var _this17 = this;

      return Promise.resolve(_this17.fetchFile(path, false)).then(function (res) {
        return res.download_url;
      });
    } catch (e) {
      return Promise.reject(e);
    }
  };

  _proto.fetchFile = function fetchFile(filePath, decoded) {
    if (decoded === void 0) {
      decoded = true;
    }

    try {
      var _this19 = this;

      var repo = _this19.workingRepoFullName;
      var branch = _this19.branchName;
      return Promise.resolve(_this19.req({
        url: "https://api.github.com/repos/" + repo + "/contents/" + removeLeadingSlash(filePath) + "?ref=" + branch,
        method: 'GET'
      })).then(function (request) {
        // decode using base64 decoding (https://developer.mozilla.org/en-US/docs/Glossary/Base64)
        request.content = decoded ? atob(request.content || '') : request.content;
        return request;
      });
    } catch (e) {
      return Promise.reject(e);
    }
  }
  /*
  added or deletes files from github
  */
  ;

  _proto.githubFileApi = function githubFileApi(path, fileContents, commitMessage, encoded, method) {
    if (commitMessage === void 0) {
      commitMessage = 'Update from TinaCMS';
    }

    if (encoded === void 0) {
      encoded = false;
    }

    try {
      var _temp3 = function _temp3() {
        return _this21.req({
          url: "https://api.github.com/repos/" + repo + "/contents/" + removeLeadingSlash(path),
          method: method,
          data: {
            message: commitMessage,
            content: encoded ? fileContents : b64EncodeUnicode(fileContents),
            branch: branch,
            sha: sha
          }
        });
      };

      var _this21 = this;

      var repo = _this21.workingRepoFullName;
      var branch = _this21.branchName;
      var sha = null;

      var _temp4 = _catch(function () {
        ;
        return Promise.resolve(_this21.fetchFile(path)).then(function (_this20$fetchFile) {
          sha = _this20$fetchFile.sha;
        });
      }, function () {});

      return Promise.resolve(_temp4 && _temp4.then ? _temp4.then(_temp3) : _temp3(_temp4));
    } catch (e) {
      return Promise.reject(e);
    }
  };

  _proto.upload = function upload(path, fileContents, commitMessage, encoded) {
    if (commitMessage === void 0) {
      commitMessage = 'Update from TinaCMS';
    }

    if (encoded === void 0) {
      encoded = false;
    }

    try {
      var _this23 = this;

      return Promise.resolve(_this23.githubFileApi(path, fileContents, commitMessage, encoded, 'PUT'));
    } catch (e) {
      return Promise.reject(e);
    }
  };

  _proto["delete"] = function _delete(path, commitMessage) {
    try {
      var _this25 = this;

      if (commitMessage === undefined) commitMessage = "Deleted " + path + " using TinaCMS";
      return Promise.resolve(_this25.githubFileApi(path, '', commitMessage, false, 'DELETE'));
    } catch (e) {
      return Promise.reject(e);
    }
  };

  _proto.req = function req(data) {
    try {
      var _this27 = this;

      return Promise.resolve(_this27.proxyRequest(data)).then(function (response) {
        console.log(response);
        return _this27.getGithubResponse(response);
      });
    } catch (e) {
      return Promise.reject(e);
    }
  };

  _proto.getGithubResponse = function getGithubResponse(response) {
    try {
      return Promise.resolve(response.json()).then(function (data) {
        //2xx status codes
        if (response.status.toString()[0] == '2') return data;
        throw new GithubError(data.message || response.statusText, response.status);
      });
    } catch (e) {
      return Promise.reject(e);
    }
  };

  _proto.validate = function validate() {
    var errors = [];

    if (!this.proxy) {
      errors.push('Missing `proxy` URL');
    }

    if (!this.authCallbackRoute) {
      errors.push('Missing `authCallbackRoute`');
    }

    if (!this.baseRepoFullName) {
      errors.push('Missing `baseRepoFullName`. It may not have been set in environment variables.');
    }

    if (!this.clientId) {
      errors.push('Missing `clientId`. It may not have been set in environment variables.');
    }

    if (errors.length) {
      throw new Error(createErrorMessage(errors));
    }
  }
  /**
   * The methods below maybe don't belong on GitHub client, but it's fine for now.
   */
  ;

  _proto.proxyRequest = function proxyRequest(data) {
    // For implementations using the csrf mitigation
    // const token = localStorage.getItem('tinacms-github-token') || null
    var token = localStorage.getItem('github-access-token') || null;
    console.log('in proxyRequest ', data);
    var headers = new Headers();

    if (token) {
      headers.append('Authorization', 'token ' + token);
    }

    return fetch(this.proxy, {
      method: 'POST',
      headers: headers,
      body: JSON.stringify(data)
    });
  };

  _proto.getCookie = function getCookie(cookieName) {
    console.log('returning cookie ', cookieName);
    return Cookies.get(cookieName);
  };

  _proto.setCookie = function setCookie(cookieName, val) {
    Cookies.set(cookieName, val);
  };

  _createClass(GithubClient, [{
    key: "isFork",
    get: function get() {
      return this.workingRepoFullName !== this.baseRepoFullName;
    }
  }, {
    key: "workingRepoFullName",
    get: function get() {
      var forkName = this.getCookie(GithubClient.WORKING_REPO_COOKIE_KEY);

      if (forkName) {
        return forkName;
      }

      return this.baseRepoFullName;
    }
  }, {
    key: "branchName",
    get: function get() {
      var branchName = this.getCookie(GithubClient.HEAD_BRANCH_COOKIE_KEY);

      if (branchName) {
        return branchName;
      }

      return this.baseBranch;
    }
  }]);

  return GithubClient;
}();
GithubClient.WORKING_REPO_COOKIE_KEY = 'working_repo_full_name';
GithubClient.HEAD_BRANCH_COOKIE_KEY = 'head_branch';

var GithubError =
/*#__PURE__*/
function (_Error) {
  _inheritsLoose(GithubError, _Error);

  function GithubError(message, status) {
    var _this28;

    _this28 = _Error.call(this, message) || this;
    _this28.message = message;
    _this28.status = status;
    return _this28;
  }

  return GithubError;
}(
/*#__PURE__*/
_wrapNativeSuper(Error));

var createErrorMessage = function createErrorMessage(errors) {
  return "Failed to create the TinaCMS GithubClient\n\n" + errors.map(function (error) {
    return "\t* " + error;
  }).join('\n') + "\n\nVisit the setup guide for more information\n\n\thttps://tinacms.org/guides/nextjs/github-open-authoring/configure-custom-app\n";
};

var GithubFile = function GithubFile(cms, path, parse, serialize) {
  var _this = this,
      _this2 = this;

  this.cms = cms;
  this.path = path;
  this.parse = parse;
  this.serialize = serialize;
  this.sha = null;

  this.fetchFile = function () {
    try {
      return Promise.resolve(_this.cms.api.github.fetchFile(_this.path)).then(function (res) {
        _this.sha = res.sha;
        return _this.parse ? _this.parse(res.content) : res.content;
      });
    } catch (e) {
      return Promise.reject(e);
    }
  };

  this.commit = function (data, message, retryOnConflict) {
    if (message === void 0) {
      message = 'Update from TinaCMS';
    }

    if (retryOnConflict === void 0) {
      retryOnConflict = true;
    }

    try {
      var serializedContent = _this2.serialize ? _this2.serialize(data) : data;
      return Promise.resolve(_catch(function () {
        function _temp2() {
          return Promise.resolve(_this2.cms.api.github.commit(_this2.path, _this2.sha, serializedContent, message)).then(function (response) {
            _this2.sha = response.content.sha;

            _this2.cms.events.dispatch({
              type: 'github:commit',
              response: response
            });

            return response;
          });
        }

        var _temp = function () {
          if (!_this2.sha) {
            return Promise.resolve(_this2.cms.api.github.fetchFile(_this2.path)).then(function (res) {
              _this2.sha = res.sha;
            });
          }
        }();

        return _temp && _temp.then ? _temp.then(_temp2) : _temp2(_temp);
      }, function (error) {
        return function () {
          if (error.status == 409 && retryOnConflict) {
            return Promise.resolve(_this2.fetchFile()).then(function () {
              // update sha
              return Promise.resolve(_this2.commit(data, message, false)).then(function () {}); // try one more time
            });
          } else {
            _this2.cms.events.dispatch({
              type: 'github:error',
              error: error
            });

            throw error;
          }
        }();
      }));
    } catch (e) {
      return Promise.reject(e);
    }
  };
};
var useGithubFile = function useGithubFile(_ref) {
  var path = _ref.path,
      parse = _ref.parse,
      serialize = _ref.serialize;
  var cms = useCMS();
  return useMemo(function () {
    return new GithubFile(cms, path, parse, serialize);
  }, [path, parse, serialize, cms]);
};

/**

Copyright 2019 Forestry.io Inc

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

*/
var useGithubAuthRedirect = function useGithubAuthRedirect() {
  useEffect(function () {
    var urlParams = new URLSearchParams(window.location.search);
    var code = urlParams.get('code');
    localStorage[GITHUB_AUTH_CODE_KEY] = code;
  }, []);
};

var AsyncButton = function AsyncButton(_ref) {
  var name = _ref.name,
      primary = _ref.primary,
      action = _ref.action;

  var _useState = useState(false),
      submitting = _useState[0],
      setSubmitting = _useState[1];

  var onClick = useCallback(function () {
    try {
      setSubmitting(true);
      return Promise.resolve(_catch(function () {
        return Promise.resolve(action()).then(function () {
          setSubmitting(false);
        });
      }, function (e) {
        setSubmitting(false);
        throw e;
      }));
    } catch (e) {
      return Promise.reject(e);
    }
  }, [action, setSubmitting]);
  return React__default.createElement(Button, {
    primary: primary,
    onClick: onClick,
    busy: submitting,
    disabled: submitting
  }, submitting && React__default.createElement(LoadingDots, null), !submitting && name);
};

function _templateObject() {
  var data = _taggedTemplateLiteralLoose(["\n  color: var(--tina-color-error) !important;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}
function GithubAuthenticationModal(_ref) {
  var onAuthSuccess = _ref.onAuthSuccess,
      close = _ref.close;
  var cms = useCMS$1();
  return React__default.createElement(ModalBuilder, {
    title: "GitHub Authorization",
    message: "To save edits, Tina requires GitHub authorization. On save, changes will get commited to GitHub using your account.",
    close: close,
    actions: [{
      name: 'Cancel',
      action: close
    }, {
      name: 'Continue to GitHub',
      action: function () {
        try {
          return Promise.resolve(cms.api.github.authenticate()).then(function () {
            onAuthSuccess();
          });
        } catch (e) {
          return Promise.reject(e);
        }
      },
      primary: true
    }]
  });
}
function CreateForkModal(_ref2) {
  var onForkCreated = _ref2.onForkCreated,
      close = _ref2.close;
  var cms = useCMS$1();

  var _useState = useState(),
      error = _useState[0],
      setError = _useState[1];

  return React__default.createElement(ModalBuilder, {
    title: "GitHub Authorization",
    message: "A fork of this website is required to save changes.",
    close: close,
    actions: [{
      name: 'Cancel',
      action: close
    }, {
      name: 'Create Fork',
      action: function () {
        try {
          return Promise.resolve(_catch(function () {
            return Promise.resolve(cms.api.github.createFork()).then(function () {
              onForkCreated();
            });
          }, function (e) {
            setError('Forking repository failed. Are you sure the repository is public?');
            throw e;
          }));
        } catch (e) {
          return Promise.reject(e);
        }
      },
      primary: true
    }],
    error: error
  });
}
function ModalBuilder(modalProps) {
  return React__default.createElement(StyleReset, null, React__default.createElement(Modal, null, React__default.createElement(ModalPopup, null, React__default.createElement(ModalHeader, {
    close: modalProps.close
  }, modalProps.title), React__default.createElement(ModalBody, {
    padded: true
  }, React__default.createElement("p", null, modalProps.message), modalProps.error && React__default.createElement(ErrorLabel, null, modalProps.error)), React__default.createElement(ModalActions, null, modalProps.actions.map(function (action) {
    return React__default.createElement(AsyncButton, Object.assign({}, action));
  })))));
}
var ErrorLabel =
/*#__PURE__*/
styled.p(
/*#__PURE__*/
_templateObject());

/**

Copyright 2019 Forestry.io Inc

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

*/
var getModalProps = function getModalProps(error, cms, githubClient, startEditing, stopEditing) {
  try {
    var _temp3 = function _temp3(_result) {
      return _exit3 ? _result : {
        title: "Error  " + error.status,
        message: error.message,
        actions: [cancelEditModeAction, reauthenticateAction]
      };
    };

    var _exit3 = false;
    var reauthenticateAction = {
      name: 'Continue',
      primary: true,
      action: startEditing
    };
    var cancelEditModeAction = {
      name: 'Cancel',
      primary: false,
      action: stopEditing
    };
    var switchToMaster = {
      name: "Switch to " + githubClient.baseBranch,
      primary: true,
      action: function action() {
        githubClient.setWorkingBranch(githubClient.baseBranch);
        cms.events.dispatch({
          type: 'github:branch:checkout',
          branchName: githubClient.baseBranch
        });
      }
    };

    var _temp4 = _switch(error.status, [[function () {
      return 401;
    }, function () {
      {
        // Unauthorized
        _exit3 = true;
        return {
          title: '401 Unauthenticated',
          message: 'Authentication is invalid',
          actions: [cancelEditModeAction, reauthenticateAction]
        };
      }
    }], [function () {
      return 404;
    }, function () {
      {
        /**
         * This case checks all the reasons there may have been a 404:
         * - Unauthorized
         *   - Private Repo
         *   - Missing Repo
         * - Missing Branch
         * - Missing Repo
         */
        // Is the user authorized to edit this repo?
        return Promise.resolve(githubClient.isAuthorized()).then(function (_githubClient$isAutho) {
          var _exit2 = false;

          if (!_githubClient$isAutho) {
            // Is the repo public?
            if (githubClient.authScope === 'public_repo') {
              _exit3 = true;
              return {
                title: "Create a Fork of " + githubClient.baseRepoFullName,
                message: "You do not have permission to make changes to " + githubClient.baseRepoFullName + "." + "Press the button below to fork this site and begin editing. ",
                actions: [cancelEditModeAction, {
                  name: 'Create a Fork',
                  primary: true,
                  action: startEditing
                }]
              };
            } else {
              _exit3 = true;
              return {
                title: 'Unauthorized',
                message: "You do not have permission to make changes to " + githubClient.baseRepoFullName + ".",
                actions: [cancelEditModeAction]
              };
            }
          }

          // Does the branch exist?
          return Promise.resolve(githubClient.getBranch()).then(function (_githubClient$getBran) {
            if (_githubClient$getBran) {
              _exit3 = true;
              return {
                title: 'Missing Branch ',
                message: 'The branch that you were editing has been deleted. Press.',
                actions: [cancelEditModeAction, switchToMaster]
              };
            }

            // The file is missing
            _exit3 = true;
            return {
              title: 'Content Not Found.',
              message: 'The file you are trying to access is missing. Maybe it lives on a different branch?',
              actions: [cancelEditModeAction, switchToMaster]
            };
          });
        });
      }
    }], [function () {
      return 500;
    }, function () {
      {
        _exit3 = true;
        return {
          title: 'Error 500',
          message: error.message,
          actions: [reauthenticateAction]
        };
      }
    }]]);

    return Promise.resolve(_temp4 && _temp4.then ? _temp4.then(_temp3) : _temp3(_temp4));
  } catch (e) {
    return Promise.reject(e);
  }
};

/**

Copyright 2019 Forestry.io Inc

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

*/
var ActionableModal = function ActionableModal(_ref) {
  var title = _ref.title,
      message = _ref.message,
      actions = _ref.actions;

  if (!open) {
    return null;
  }

  return React__default.createElement(StyleReset, null, React__default.createElement(Modal, null, React__default.createElement(ModalPopup, null, React__default.createElement(ModalHeader, null, title), React__default.createElement(ModalBody, {
    padded: true
  }, React__default.createElement("p", null, message)), React__default.createElement(ModalActions, null, actions.map(function (action) {
    return React__default.createElement(Button, {
      primary: action.primary,
      onClick: action.action
    }, action.name);
  })))));
};

/**

Copyright 2019 Forestry.io Inc

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

*/
// We have to perform a few extra checks and render a modal with options

var GithubErrorModal = function GithubErrorModal(props) {
  var _useState = useState(null),
      errorModalProps = _useState[0],
      setErrorModalProps = _useState[1];

  var github = useCMS$1().api.github;
  var cms = useCMS$1();
  useEffect(function () {

    (function () {
      try {
        var _temp2 = function () {
          if (props.error) {
            return Promise.resolve(getModalProps(props.error, cms, github, cms.enable, cms.disable)).then(function (modalProps) {
              setErrorModalProps(modalProps);
            });
          } else {
            setErrorModalProps(null);
          }
        }();

        return _temp2 && _temp2.then ? _temp2.then(function () {}) : void 0;
      } catch (e) {
        Promise.reject(e);
      }
    })();
  }, [props.error, cms.enable]);

  if (!errorModalProps) {
    return null;
  }

  return React__default.createElement(ActionableModal, Object.assign({}, errorModalProps));
};

/**

Copyright 2019 Forestry.io Inc

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

*/
var TinacmsGithubProvider = function TinacmsGithubProvider(_ref) {
  var children = _ref.children,
      onLogin = _ref.onLogin,
      onLogout = _ref.onLogout,
      previewError = _ref.error;

  var _useState = useState(previewError),
      error = _useState[0],
      setError = _useState[1];

  var cms = useCMS$1();
  var github = cms.api.github;

  var _useState2 = useState(null),
      activeModal = _useState2[0],
      setActiveModal = _useState2[1];

  var onClose = function onClose() {
    try {
      setActiveModal(null);
      return Promise.resolve(github.isAuthorized()).then(function (_github$isAuthorized) {
        if (!_github$isAuthorized) {
          cms.disable();
        }
      });
    } catch (e) {
      return Promise.reject(e);
    }
  };

  var beginAuth = function beginAuth() {
    try {
      return Promise.resolve(github.isAuthenticated()).then(function (_github$isAuthenticat) {
        if (_github$isAuthenticat) {
          onAuthSuccess();
        } else {
          setActiveModal('authenticate');
        }
      });
    } catch (e) {
      return Promise.reject(e);
    }
  };

  var onAuthSuccess = function onAuthSuccess() {
    try {
      return Promise.resolve(github.isAuthorized()).then(function (_github$isAuthorized2) {
        if (_github$isAuthorized2) {
          github.setWorkingRepoFullName(github.baseRepoFullName);
          github.setWorkingBranch(github.branchName);
          onLogin();
          setActiveModal(null);
        } else {
          setActiveModal('createFork');
        }
      });
    } catch (e) {
      return Promise.reject(e);
    }
  };

  useCMSEvent('cms:enable', beginAuth, []);
  useCMSEvent('cms:disable', onLogout, []);
  useCMSEvent('github:branch:checkout', onLogin, []);
  useCMSEvent('github:error', function (_ref2) {
    var error = _ref2.error;
    return setError(error);
  }, []);
  return React__default.createElement(React__default.Fragment, null, error && React__default.createElement(GithubErrorModal, {
    error: error
  }), !error && activeModal === 'authenticate' && React__default.createElement(GithubAuthenticationModal, {
    close: onClose,
    onAuthSuccess: onAuthSuccess
  }), !error && activeModal === 'createFork' && React__default.createElement(CreateForkModal, {
    close: onClose,
    onForkCreated: onLogin
  }), !previewError && children);
};

function useCMSEvent(event, callback, deps) {
  var cms = useCMS$1();
  useEffect(function () {
    return cms.events.subscribe(event, callback);
  }, deps);
}

function _templateObject3() {
  var data = _taggedTemplateLiteralLoose(["\n  padding: 1.25rem 1.25rem 0 1.25rem;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteralLoose(["\n  margin-bottom: 1rem;\n\n  b {\n    font-weight: bold;\n  }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject$1() {
  var data = _taggedTemplateLiteralLoose(["\n  height: auto;\n  padding-top: 0.8125rem;\n  padding-bottom: 0.8125rem;\n  text-decoration: none;\n  line-height: 1;\n"]);

  _templateObject$1 = function _templateObject() {
    return data;
  };

  return data;
}
var PRModal = function PRModal() {
  var _useState = useState(''),
      prError = _useState[0],
      setPrError = _useState[1];

  var _useState2 = useState(undefined),
      fetchedPR = _useState2[0],
      setFetchedPR = _useState2[1];

  var cms = useCMS$1();
  var github = cms.api.github;
  var titleInput = React__default.createRef();
  var bodyInput = React__default.createRef();

  var checkForPR = function checkForPR() {
    try {
      return Promise.resolve(github.fetchExistingPR().then(function (pull) {
        if (pull) {
          setFetchedPR(pull);
        } else {
          setFetchedPR({
            id: null
          });
        }
      })["catch"](function () {
        setPrError("Could not fetch Pull Requests");
      })).then(function () {});
    } catch (e) {
      return Promise.reject(e);
    }
  };

  var createPR = function createPR() {
    return github.createPR(titleInput.current.value, bodyInput.current.value).then(function () {
      checkForPR(); // TODO - can we use PR from response instead of refetching?
    })["catch"](function () {
      setPrError("Pull Request failed, are you sure you have any changes?");
    });
  };

  useEffect(function () {
    checkForPR();
  }, []);

  if (prError) {
    return React__default.createElement(PrModalBody, null, React__default.createElement(ModalDescription, null, React__default.createElement("p", null, prError)));
  }

  if (!fetchedPR) {
    return React__default.createElement(PrModalBody, null, React__default.createElement(ModalDescription, null, React__default.createElement("p", null, "Loading...")));
  }

  var workingBranch = github.branchName;
  var baseBranch = github.baseBranch;

  if (github.isFork) {
    var username = github.workingRepoFullName.split('/')[0];
    var baseOwner = github.baseRepoFullName.split('/')[0];
    workingBranch = username + ":" + workingBranch;
    baseBranch = baseOwner + ":" + baseBranch;
  }

  if (workingBranch === baseBranch) {
    return React__default.createElement(PrModalBody, null, React__default.createElement(ModalDescription, null, React__default.createElement("p", null, "You are currently on the base branch: ", React__default.createElement("b", null, baseBranch), "."), React__default.createElement("p", null, "To create a Pull Request you must first switch to a new branch.")));
  }

  return React__default.createElement(React__default.Fragment, null, React__default.createElement(PrModalBody, null, !fetchedPR.id && React__default.createElement(React__default.Fragment, null, React__default.createElement(ModalDescription, null, "Create a pull request from ", React__default.createElement("b", null, workingBranch), " into", ' ', React__default.createElement("b", null, baseBranch), ".", ' ', React__default.createElement("a", {
    target: "_blank",
    href: "https://github.com/" + github.baseRepoFullName + "/compare/" + github.baseBranch + "..." + github.workingRepoFullName.split('/')[0] + ":" + github.branchName
  }, "View changes on GitHub"), "."), React__default.createElement(FieldMeta, {
    label: "PR Title",
    name: "title"
  }, React__default.createElement(Input, {
    type: "text",
    ref: titleInput
  })), React__default.createElement(FieldMeta, {
    label: "PR Description",
    name: "description"
  }, React__default.createElement(TextArea, {
    ref: bodyInput
  }))), fetchedPR.id && React__default.createElement(ModalDescription, null, "You've created a pull request from ", React__default.createElement("b", null, workingBranch), " into", ' ', React__default.createElement("b", null, baseBranch), ".")), React__default.createElement(ModalActions, null, !fetchedPR.id && React__default.createElement(AsyncButton, {
    primary: true,
    name: "Create Pull Request",
    action: createPR
  }), fetchedPR && fetchedPR.html_url && React__default.createElement(React__default.Fragment, null, React__default.createElement(TinaButton, {
    as: "a",
    // @ts-ignore
    href: "https://github.com/" + github.baseRepoFullName + "/compare/" + github.baseBranch + "..." + github.workingRepoFullName.split('/')[0] + ":" + github.branchName,
    target: "_blank"
  }, "View Diff"), React__default.createElement(TinaButton, {
    as: "a",
    primary: true,
    // @ts-ignore
    href: fetchedPR.html_url,
    target: "_blank"
  }, "View Pull Request"))));
};
var TinaButton =
/*#__PURE__*/
styled(Button)(
/*#__PURE__*/
_templateObject$1());
var ModalDescription =
/*#__PURE__*/
styled.p(
/*#__PURE__*/
_templateObject2());
var PrModalBody =
/*#__PURE__*/
styled(ModalBody)(
/*#__PURE__*/
_templateObject3());

function _templateObject$2() {
  var data = _taggedTemplateLiteralLoose(["\n  display: flex;\n  align-items: center;\n  white-space: nowrap;\n  padding: 0 10px;\n\n  &:focus {\n    outline: none;\n  }\n\n  svg {\n    fill: currentColor;\n    opacity: 0.7;\n    width: 2.5em;\n    height: 2.5em;\n  }\n\n  &:disabled {\n    opacity: 0.6;\n    filter: grayscale(25%);\n  }\n\n  @media (min-width: 1030px) {\n    padding: 0 20px;\n\n    svg {\n      margin-right: 0.25rem;\n    }\n  }\n"]);

  _templateObject$2 = function _templateObject() {
    return data;
  };

  return data;
}
var ToolbarButton =
/*#__PURE__*/
styled(Button)(
/*#__PURE__*/
_templateObject$2());

function _templateObject$3() {
  var data = _taggedTemplateLiteralLoose(["\n  display: none;\n  @media (min-width: 1030px) {\n    display: inline;\n  }\n"]);

  _templateObject$3 = function _templateObject() {
    return data;
  };

  return data;
}
var DesktopLabel =
/*#__PURE__*/
styled.span(
/*#__PURE__*/
_templateObject$3());

/**

Copyright 2019 Forestry.io Inc

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

*/
var PullRequestToolbarWidget = {
  __type: 'toolbar:widget',
  name: 'create-pr',
  weight: 5,
  component: PullRequestButton
};

function PullRequestButton() {
  var _useState = useState(false),
      opened = _useState[0],
      setOpened = _useState[1];

  var close = function close() {
    return setOpened(false);
  };

  return React__default.createElement(React__default.Fragment, null, React__default.createElement(ToolbarButton, {
    onClick: function onClick() {
      return setOpened(function (p) {
        return !p;
      });
    }
  }, React__default.createElement(PullRequestIcon, null), React__default.createElement(DesktopLabel, null, " Pull Request")), opened && React__default.createElement(Modal, null, React__default.createElement(ModalPopup, null, React__default.createElement(ModalHeader, {
    close: close
  }, "Pull Request"), React__default.createElement(ModalBody, null, React__default.createElement(PRModal, null)))));
}

function _templateObject$4() {
  var data = _taggedTemplateLiteralLoose(["\n  display: block;\n  max-width: 250px;\n  overflow: hidden;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n  font-size: var(--tina-font-size-3);\n  line-height: 1.35;\n  color: var(--tina-color-primary-dark);\n"]);

  _templateObject$4 = function _templateObject() {
    return data;
  };

  return data;
}
var MetaLink =
/*#__PURE__*/
styled.a(
/*#__PURE__*/
_templateObject$4());

var RepoInfo = function RepoInfo() {
  var cms = useCMS$1();
  var github = cms.api.github;
  return React__default.createElement(FieldMeta, {
    name: github.isFork ? 'Fork' : 'Repository'
  }, React__default.createElement(MetaLink, {
    target: "_blank",
    href: "https://github.com/" + github.workingRepoFullName
  }, github.workingRepoFullName));
};

var RepoToolbarWidget = {
  __type: 'toolbar:widget',
  name: 'repo-info',
  weight: 1,
  component: RepoInfo
};

function _templateObject18() {
  var data = _taggedTemplateLiteralLoose(["\n  color: var(--tina-color-grey-6);\n  display: block;\n  text-align: left;\n  line-height: 20px;\n  font-size: var(--tina-font-size-3);\n  text-overflow: ellipsis;\n  max-width: 250px;\n  white-space: nowrap;\n  overflow: hidden;\n"]);

  _templateObject18 = function _templateObject18() {
    return data;
  };

  return data;
}

function _templateObject17() {
  var data = _taggedTemplateLiteralLoose(["\n  color: var(--tina-color-grey-8);\n  display: block;\n  letter-spacing: 0.01em;\n  line-height: 1;\n  font-size: var(--tina-font-size-1);\n  font-weight: 600;\n  text-align: left;\n  transition: all 150ms ease-out;\n"]);

  _templateObject17 = function _templateObject17() {
    return data;
  };

  return data;
}

function _templateObject16() {
  var data = _taggedTemplateLiteralLoose(["\n      background-color: var(--tina-color-grey-1);\n      box-shadow: inset 0px 2px 3px rgba(0, 0, 0, 0.06);\n\n      ", " {\n        color: var(--tina-color-primary);\n      }\n\n      svg {\n        transform: translate3d(0, -50%, 0) rotate(180deg);\n        fill: var(--tina-color-grey-4);\n      }\n    "]);

  _templateObject16 = function _templateObject16() {
    return data;
  };

  return data;
}

function _templateObject15() {
  var data = _taggedTemplateLiteralLoose(["\n  border-radius: var(--tina-radius-small);\n  border: 1px solid var(--tina-color-grey-2);\n  background-color: white;\n  padding: 5px 42px 5px var(--tina-padding-small);\n  position: relative;\n  outline: none;\n  cursor: pointer;\n  min-width: 140px;\n  transition: all 150ms ease-out;\n\n  :hover {\n    background-color: var(--tina-color-grey-1);\n  }\n\n  svg {\n    fill: var(--tina-color-primary);\n    position: absolute;\n    top: 50%;\n    right: 8px;\n    transform-origin: 50% 50%;\n    transform: translate3d(0, -50%, 0);\n    transition: all 150ms ease-out;\n    width: 24px;\n    height: auto;\n  }\n\n  ", ";\n"]);

  _templateObject15 = function _templateObject15() {
    return data;
  };

  return data;
}

function _templateObject14() {
  var data = _taggedTemplateLiteralLoose(["\n      opacity: 1;\n      pointer-events: auto;\n      transform: translate3d(-50%, 100%, 0) scale3d(1, 1, 1);\n    "]);

  _templateObject14 = function _templateObject14() {
    return data;
  };

  return data;
}

function _templateObject13() {
  var data = _taggedTemplateLiteralLoose(["\n  position: absolute;\n  bottom: -4px;\n  left: 50%;\n  transform: translate3d(-50%, calc(100% - 16px), 0) scale3d(0.5, 0.5, 1);\n  border-radius: var(--tina-radius-small);\n  border: 1px solid var(--tina-color-grey-2);\n  box-shadow: var(--tina-shadow-big);\n  background-color: white;\n  transform-origin: 50% 0;\n  pointer-events: none;\n  transition: all 150ms ease-out;\n  opacity: 0;\n  width: 350px;\n\n  &:before {\n    content: '';\n    display: block;\n    position: absolute;\n    top: 0;\n    left: 50%;\n    transform: translate3d(-50%, -100%, 0);\n    width: 0;\n    height: 0;\n    border-left: 10px solid transparent;\n    border-right: 10px solid transparent;\n    border-bottom: 10px solid var(--tina-color-grey-2);\n  }\n\n  &:after {\n    content: '';\n    display: block;\n    position: absolute;\n    top: 1px;\n    left: 50%;\n    transform: translate3d(-50%, -100%, 0);\n    width: 0;\n    height: 0;\n    border-left: 10px solid transparent;\n    border-right: 10px solid transparent;\n    border-bottom: 10px solid white;\n  }\n\n  ", ";\n"]);

  _templateObject13 = function _templateObject13() {
    return data;
  };

  return data;
}

function _templateObject12() {
  var data = _taggedTemplateLiteralLoose(["\n  position: relative;\n"]);

  _templateObject12 = function _templateObject12() {
    return data;
  };

  return data;
}

function _templateObject11() {
  var data = _taggedTemplateLiteralLoose(["\n  min-width: 200px;\n  max-height: 170px;\n  overflow-y: scroll;\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n  align-items: stretch;\n"]);

  _templateObject11 = function _templateObject11() {
    return data;
  };

  return data;
}

function _templateObject10() {
  var data = _taggedTemplateLiteralLoose(["\n      font-weight: bold;\n      color: var(--tina-color-primary);\n      background-color: var(--tina-color-grey-1);\n      pointer-events: none;\n    "]);

  _templateObject10 = function _templateObject10() {
    return data;
  };

  return data;
}

function _templateObject9() {
  var data = _taggedTemplateLiteralLoose(["\n  display: lock;\n  border: none;\n  outline: none;\n  padding: 4px var(--tina-padding-small);\n  background: transparent;\n  color: var(--tina-color-grey-6);\n  text-align: left;\n  font-size: var(--tina-font-size-2);\n  line-height: 1.2;\n  white-space: nowrap;\n  width: 100%;\n  cursor: pointer;\n  transition: all 150ms ease-out;\n  text-overflow: ellipsis;\n  max-width: 100%;\n  overflow: hidden;\n  flex: 0 0 auto;\n\n  svg {\n    width: 20px;\n    height: auto;\n    margin: -4px -4px -4px -4px;\n    fill: currentColor;\n    opacity: 0.7;\n  }\n\n  :first-child {\n    padding-top: 8px;\n  }\n\n  :last-child {\n    padding-bottom: 8px;\n  }\n\n  :hover {\n    color: var(--tina-color-primary);\n    background-color: var(--tina-color-grey-1);\n  }\n\n  ", ";\n"]);

  _templateObject9 = function _templateObject9() {
    return data;
  };

  return data;
}

function _templateObject8() {
  var data = _taggedTemplateLiteralLoose(["\n  display: flex;\n  border: none;\n  outline: none;\n  padding: var(--tina-padding-small);\n  background: transparent;\n  width: 100%;\n  justify-content: center;\n  align-items: center;\n  flex: 0 0 auto;\n"]);

  _templateObject8 = function _templateObject8() {
    return data;
  };

  return data;
}

function _templateObject7() {
  var data = _taggedTemplateLiteralLoose(["\n  display: block;\n  border: none;\n  outline: none;\n  padding: var(--tina-padding-small);\n  background: transparent;\n  color: var(--tina-color-grey-4);\n  text-align: left;\n  font-size: var(--tina-font-size-2);\n  line-height: 1.4;\n  width: 100%;\n  transition: all 150ms ease-out;\n  flex: 0 0 auto;\n"]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = _taggedTemplateLiteralLoose(["\n  padding: var(--tina-padding-small);\n  border-bottom: 1px solid var(--tina-color-grey-2);\n"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = _taggedTemplateLiteralLoose(["\n  background-color: var(--tina-color-grey-1);\n  border-top: 1px solid var(--tina-color-grey-2);\n  padding: var(--tina-padding-small);\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteralLoose(["\n  font-weight: bold;\n  color: var(--tina-color-primary);\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3$1() {
  var data = _taggedTemplateLiteralLoose(["\n  display: flex;\n  align-items: center;\n  height: 36px;\n\n  svg {\n    width: 24px;\n    margin-right: 4px;\n    opacity: 0.7;\n  }\n"]);

  _templateObject3$1 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2$1() {
  var data = _taggedTemplateLiteralLoose(["\n  height: 36px;\n  flex: 0 1 auto;\n\n  ::placeholder {\n    color: var(--tina-color-grey-4);\n  }\n"]);

  _templateObject2$1 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject$5() {
  var data = _taggedTemplateLiteralLoose(["\n  padding: 0 var(--tina-padding-big) var(--tina-padding-big)\n    var(--tina-padding-big);\n"]);

  _templateObject$5 = function _templateObject() {
    return data;
  };

  return data;
}

var BranchSwitcher = function BranchSwitcher(_ref) {
  var _onBranchChange = _ref.onBranchChange;
  var cms = useCMS$1();
  var github = cms.api.github;

  var _React$useState = useState(false),
      open = _React$useState[0],
      setOpen = _React$useState[1];

  var _React$useState2 = useState(),
      confirmSwitchProps = _React$useState2[0],
      setConfirmSwitchProps = _React$useState2[1];

  var _React$useState3 = useState(),
      createBranchProps = _React$useState3[0],
      setCreateBranchProps = _React$useState3[1];

  var _React$useState4 = useState(''),
      filterValue = _React$useState4[0],
      setFilterValue = _React$useState4[1];

  var selectListRef = useRef();

  var _React$useState5 = useState('pending'),
      branchStatus = _React$useState5[0],
      setBranchStatus = _React$useState5[1];

  var _React$useState6 = useState([]),
      branches = _React$useState6[0],
      setBranches = _React$useState6[1];

  var updateBranchList = useCallback(function () {
    github.getBranchList().then(function (branches) {
      setBranches(branches);
      setBranchStatus('loaded');
    })["catch"](function () {
      setBranchStatus('error');
    });
  }, [github, setBranches, setBranchStatus]);
  useEffect(function () {
    updateBranchList();
    cms.events.subscribe('github:branch:create', updateBranchList);
  }, []);

  var closeDropdown = function closeDropdown() {
    setOpen(false);
    setFilterValue('');

    if (selectListRef.current) {
      selectListRef.current.scrollTop = 0;
    }
  };

  var openCreateBranchModal = function openCreateBranchModal() {
    setCreateBranchProps({
      name: filterValue
    });
    closeDropdown();
  };

  var filteredBranches = branches.filter(function (option) {
    return option.name.includes(filterValue);
  });
  return createElement(Fragment, null, createElement(SelectWrapper, null, createElement(SelectBox, {
    onClick: function onClick() {
      return setOpen(!open);
    },
    open: open
  }, createElement(SelectLabel, null, "Branch"), createElement(SelectCurrent, null, github.branchName), createElement(ChevronDownIcon, null)), createElement(SelectDropdown, {
    open: open
  }, createElement(Dismissible, {
    click: true,
    escape: true,
    disabled: !open,
    onDismiss: closeDropdown
  }, createElement(DropdownHeader, null, createElement(SelectFilter, {
    placeholder: "Filter",
    onChange: function onChange(event) {
      return setFilterValue(event.target.value);
    },
    value: filterValue
  })), createElement(SelectList, {
    ref: selectListRef
  }, branchStatus === 'pending' && createElement(SelectLoadingState, null, createElement(LoadingDots, {
    color: "var(--tina-color-primary)"
  })), branchStatus === 'loaded' && createElement(Fragment, null, filteredBranches.map(function (option) {
    return createElement(SelectOption, {
      key: option.name,
      active: option.name === github.branchName,
      onClick: function onClick() {
        setConfirmSwitchProps(option);
        closeDropdown();
      }
    }, option["protected"] && createElement(LockIcon, null), " ", option.name);
  }), filteredBranches.length === 0 && createElement(SelectEmptyState, null, "No branches to display.")), branchStatus === 'error' && createElement(SelectEmptyState, null, "We had trouble loading branches. Please refresh to try again.")), createElement(DropdownActions, null, createElement(CreateButton, {
    onClick: openCreateBranchModal
  }, createElement(AddIcon, null), " New Branch"))))), createBranchProps && createElement(CreateBranchModal, {
    current: github.branchName,
    name: createBranchProps.name,
    onBranchChange: function onBranchChange(name) {
      if (_onBranchChange) {
        _onBranchChange(name);
      }

      setCreateBranchProps(null);
    },
    close: function close() {
      setCreateBranchProps(null);
    }
  }), confirmSwitchProps && createElement(ConfirmSwitchBranchModal, {
    name: confirmSwitchProps.name,
    onBranchChange: function onBranchChange() {
      cms.alerts.info('Switched to branch ' + confirmSwitchProps.name);
      github.setWorkingBranch(confirmSwitchProps.name);
      closeDropdown();

      if (_onBranchChange) {
        _onBranchChange(confirmSwitchProps.name);
      }

      setConfirmSwitchProps(null);
      setCreateBranchProps(null);
      cms.events.dispatch({
        type: 'github:branch:checkout',
        branchName: confirmSwitchProps.name
      });
    },
    close: function close() {
      setConfirmSwitchProps(null);
    }
  }));
};

var CreateBranchModal = function CreateBranchModal(_ref2) {
  var current = _ref2.current,
      name = _ref2.name,
      onBranchChange = _ref2.onBranchChange,
      close = _ref2.close;
  var cms = useCMS$1();
  var form = useMemo(function () {
    return new Form({
      label: 'create-branch',
      id: 'create-branch-id',
      initialValues: {
        name: name
      },
      fields: [{
        label: 'Branch Name',
        name: 'name',
        component: 'text'
      }],
      onSubmit: function onSubmit(_ref3) {
        var name = _ref3.name;

        try {
          var _temp2 = _catch(function () {
            return Promise.resolve(cms.api.github.createBranch(name)).then(function () {
              cms.events.dispatch({
                type: 'github:branch:create',
                branchName: name
              });
              cms.api.github.setWorkingBranch(name);
              cms.events.dispatch({
                type: 'github:branch:checkout',
                branchName: name
              });

              if (onBranchChange) {
                onBranchChange(name);
              }
            });
          }, function (error) {
            cms.events.dispatch({
              type: 'github:error',
              error: error
            });
          });

          return Promise.resolve(_temp2 && _temp2.then ? _temp2.then(function () {}) : void 0);
        } catch (e) {
          return Promise.reject(e);
        }
      }
    });
  }, [cms]);
  return createElement(Modal, null, createElement(FormBuilder, {
    form: form
  }, function (_ref4) {
    var handleSubmit = _ref4.handleSubmit;
    return createElement(ModalPopup, null, createElement(ModalHeader, {
      close: close
    }, "Create Branch"), createElement(ModalBody, {
      onKeyPress: function onKeyPress(e) {
        return e.charCode === 13 ? handleSubmit() : null;
      }
    }, createElement(FieldsBuilder, {
      form: form,
      fields: form.fields
    }), createElement(ModalText, null, createElement("p", null, "Create branch\xA0", createElement(BranchName, null, name), "\xA0from '", current, "'"))), createElement(ModalActions, null, createElement(Button, {
      onClick: close
    }, "Cancel"), createElement(Button, {
      onClick: handleSubmit,
      primary: true
    }, "Create")));
  }));
};

var ConfirmSwitchBranchModal = function ConfirmSwitchBranchModal(_ref5) {
  var name = _ref5.name,
      onBranchChange = _ref5.onBranchChange,
      close = _ref5.close;
  return createElement(Modal, null, createElement(ModalPopup, null, createElement(ModalHeader, {
    close: close
  }, "Switch Branch"), createElement(ModalBody, {
    padded: true,
    onKeyPress: function onKeyPress(e) {
      return e.charCode === 13 ? onBranchChange() : null;
    }
  }, createElement("p", null, "Are you sure you want to switch to branch", ' ', createElement(BranchName, null, name), "?")), createElement(ModalActions, null, createElement(Button, {
    onClick: close
  }, "Cancel"), createElement(Button, {
    onClick: onBranchChange,
    primary: true
  }, "Switch Branch"))));
};

var ModalText =
/*#__PURE__*/
styled.div(
/*#__PURE__*/
_templateObject$5());
var SelectFilter =
/*#__PURE__*/
styled(Input$1)(
/*#__PURE__*/
_templateObject2$1());
var CreateButton =
/*#__PURE__*/
styled(Button)(
/*#__PURE__*/
_templateObject3$1());
var BranchName =
/*#__PURE__*/
styled.span(
/*#__PURE__*/
_templateObject4());
var DropdownActions =
/*#__PURE__*/
styled.div(
/*#__PURE__*/
_templateObject5());
var DropdownHeader =
/*#__PURE__*/
styled.div(
/*#__PURE__*/
_templateObject6());
var SelectEmptyState =
/*#__PURE__*/
styled.div(
/*#__PURE__*/
_templateObject7());
var SelectLoadingState =
/*#__PURE__*/
styled.div(
/*#__PURE__*/
_templateObject8());
var SelectOption =
/*#__PURE__*/
styled.button(
/*#__PURE__*/
_templateObject9(), function (p) {
  return p.active && css(_templateObject10());
});
var SelectList =
/*#__PURE__*/
styled.div(
/*#__PURE__*/
_templateObject11());
var SelectWrapper =
/*#__PURE__*/
styled.div(
/*#__PURE__*/
_templateObject12());
var SelectDropdown =
/*#__PURE__*/
styled.div(
/*#__PURE__*/
_templateObject13(), function (p) {
  return p.open && css(_templateObject14());
});
var SelectBox =
/*#__PURE__*/
styled.button(
/*#__PURE__*/
_templateObject15(), function (p) {
  return p.open && css(_templateObject16(), SelectLabel);
});
var SelectLabel =
/*#__PURE__*/
styled.span(
/*#__PURE__*/
_templateObject17());
var SelectCurrent =
/*#__PURE__*/
styled.span(
/*#__PURE__*/
_templateObject18());
var BranchSwitcherPlugin = {
  __type: 'toolbar:widget',
  name: 'branch-switcher',
  weight: 1,
  component: BranchSwitcher
};

/**

Copyright 2019 Forestry.io Inc

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

*/
var useGithubToolbarPlugins = function useGithubToolbarPlugins() {
  usePlugins([RepoToolbarWidget, PullRequestToolbarWidget, BranchSwitcherPlugin]);
};

var getTitleDefault = function getTitleDefault(form) {
  return form.name;
};
/**
 * This function returns an action that can but used in a form to delete files in github.
 *
 * Options
 * getTitle: a function that takes in a form and returns a title of the file to be deleted (optional)
 * getFilePath: a function that takes in a form and returns a the file path in github (optional)
 *
 * EXAMPLE
 * const deleteAction = createGithubDeleteAction()
 *
 * const formOptions = {
 *    actions: [deleteAction, ...]
 *    //..
 * }
 * const [data, form] = useGithubJsonForm(file, formOptions);
 * usePlugin(form);
 *
 * NOTE: this will delete the entire file that is used to store the form data. The primary use case would be dynamic page content like blog posts.
 *
 */


var createGithubDeleteAction = function createGithubDeleteAction(_temp) {
  var _ref = _temp === void 0 ? {
    getTitle: getTitleDefault,
    getFilePath: getTitleDefault
  } : _temp,
      _ref$getTitle = _ref.getTitle,
      getTitle = _ref$getTitle === void 0 ? getTitleDefault : _ref$getTitle,
      _ref$getFilePath = _ref.getFilePath,
      getFilePath = _ref$getFilePath === void 0 ? getTitleDefault : _ref$getFilePath;

  var DeleteAction = function DeleteAction(_ref2) {
    var form = _ref2.form;
    var cms = useCMS();

    var _React$useState = useState(false),
        active = _React$useState[0],
        setActive = _React$useState[1];

    var open = function open() {
      return setActive(true);
    };

    var close = function close() {
      return setActive(false);
    };

    var title = getTitle(form);
    var filePath = getFilePath(form);
    return createElement(Fragment, null, createElement(ActionButton, {
      onClick: open
    }, "Delete " + title), active && createElement(Modal$1, null, createElement(ModalPopup$1, null, createElement(ModalHeader$1, {
      close: close
    }, "Delete " + title, " "), createElement(ModalBody$1, null, "Are you sure you want to delete " + title), createElement(ModalActions$1, null, createElement(Button, {
      onClick: function () {
        try {
          var _temp3 = _finallyRethrows(function () {
            return _catch(function () {
              close();
              return Promise.resolve(cms.api.github["delete"](filePath)).then(function () {});
            }, function (error) {
              close();
              console.error(error);
            });
          }, function (_wasThrown, _result) {
            window.history.back();
            if (_wasThrown) throw _result;
            return _result;
          });

          return Promise.resolve(_temp3 && _temp3.then ? _temp3.then(function () {}) : void 0);
        } catch (e) {
          return Promise.reject(e);
        }
      }
    }, "Yes"), createElement(Button, {
      onClick: close
    }, "No")))));
  };

  return DeleteAction;
};

/**

Copyright 2019 Forestry.io Inc

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

*/
var useGithubFileForm = function useGithubFileForm(file, options) {
  var cms = useCMS$1();
  var githubFile = useGithubFile({
    path: file.fileRelativePath,
    serialize: options.serialize
  });

  var _useForm = useForm({
    id: file.fileRelativePath,
    label: options.label || file.fileRelativePath,
    initialValues: file.data,
    fields: options.fields || [],
    actions: options.actions || [],
    onSubmit: function onSubmit(formData) {
      var github = cms.api.github;
      return githubFile.commit(formData).then(function () {
        cms.alerts.success("Saved Successfully: Changes committed to " + github.workingRepoFullName);
      })["catch"](function (error) {
        var _ref;

        return _ref = {}, _ref[FORM_ERROR] = error, _ref;
      });
    }
  }),
      formData = _useForm[0],
      form = _useForm[1];

  return [formData || file.data, form];
};

var serialize = function serialize(formData) {
  return JSON.stringify(formData, null, 2);
};

function useGithubJsonForm(jsonFile, formOptions) {
  return useGithubFileForm(jsonFile, _extends({}, formOptions, {
    serialize: serialize
  }));
}

function useGithubMarkdownForm(markdownFile, formOptions) {
  return useGithubFileForm(markdownFile, _extends({}, formOptions, {
    serialize: toMarkdownString
  }));
}

/**

Copyright 2019 Forestry.io Inc

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

*/
function base64File(file) {
  return new Promise(function (resolve) {
    var reader = new FileReader();
    reader.readAsDataURL(file);

    reader.onload = function () {
      if (reader.result) {
        resolve(reader.result);
      } else {
        throw new Error('base64File: No result');
      }
    };
  });
}

var GithubMediaStore =
/*#__PURE__*/
function () {
  function GithubMediaStore(githubClient) {
    this.githubClient = githubClient;
    this.accept = '*'; //
  }

  var _proto = GithubMediaStore.prototype;

  _proto.persist = function persist(files) {
    try {
      var _this2 = this;

      var uploaded = [];

      var _temp3 = _forOf(files, function (_ref) {
        var file = _ref.file,
            directory = _ref.directory;
        var path = directory.charAt(0) === '/' ? (directory + file.name).slice(1) // drop the first '/'
        : directory + file.name;

        var _temp = _catch(function () {
          return Promise.resolve(base64File(file)).then(function (_base64File) {
            var content = _base64File.toString().split(',')[1];

            // only need the data piece
            return Promise.resolve(_this2.githubClient.upload(path, content, 'Upload', true)).then(function () {
              uploaded.push({
                directory: directory,
                filename: file.name
              });
            });
          });
        }, function (e) {
          console.warn('Failed to upload content to Github: ' + e);
        });

        if (_temp && _temp.then) return _temp.then(function () {});
      });

      return Promise.resolve(_temp3 && _temp3.then ? _temp3.then(function () {
        return uploaded;
      }) : uploaded);
    } catch (e) {
      return Promise.reject(e);
    }
  };

  _proto.callback = function callback(files) {
    try {
      var uploaded = [];

      var _temp6 = _forOf(files, function (_ref2) {
        var file = _ref2.file,
            directory = _ref2.directory;
        var path = directory.charAt(0) === '/' ? (directory + file.name).slice(1) // drop the first '/'
        : directory + file.name;

        var _temp4 = _catch(function () {
          return Promise.resolve(base64File(file)).then(function (_base64File2) {
            var content = _base64File2.toString().split(',')[1];

            // only need the data piece
            uploaded.push({
              directory: directory,
              filename: file.name,
              content: content,
              path: path
            });
          });
        }, function (e) {
          console.warn('Failed to upload content to Github: ' + e);
        });

        if (_temp4 && _temp4.then) return _temp4.then(function () {});
      });

      return Promise.resolve(_temp6 && _temp6.then ? _temp6.then(function () {
        return uploaded;
      }) : uploaded);
    } catch (e) {
      return Promise.reject(e);
    }
  };

  _proto.previewSrc = function previewSrc(src) {
    try {
      var _this4 = this;

      try {
        return Promise.resolve(_this4.githubClient.getDownloadUrl(src));
      } catch (_unused) {
        return Promise.resolve(src);
      }
    } catch (e) {
      return Promise.reject(e);
    }
  };

  return GithubMediaStore;
}();

export { CreateForkModal, ErrorLabel, GITHUB_AUTH_CODE_KEY, GithubAuthenticationModal, GithubClient, GithubFile, GithubMediaStore, ModalBuilder, RepoToolbarWidget, TinacmsGithubProvider, authenticate, createGithubDeleteAction, useGithubAuthRedirect, useGithubFile, useGithubFileForm, useGithubJsonForm, useGithubMarkdownForm, useGithubToolbarPlugins };
//# sourceMappingURL=react-tinacms-github.esm.js.map
