'use strict';

registrationModule.controller("InstructorsController", ['$scope', '$mdDialog', '$templateCache', 'myData', 'vendorService',  function ($scope, $mdDialog, $templateCache, myData, vendorService) {
    $scope.instructors = myData.instructors;

    $scope.myName = '';
    $scope.myTextArea = '';

    $scope.vendors = vendorService.funcData();
    $scope.items = [{
        id: null,
        name: null
    }];

    _.forEach($scope.vendors,
                                  function (obj) {
                                      $scope.items.push({
                                          id: obj.id,
                                          name: obj.vendorName
                                      })
                                  });

    $(function () {
        $.widget("custom.combobox", {
            _create: function () {
                this.wrapper = $("<span>")
                  .addClass("custom-combobox")
                  .insertAfter(this.element);

                this.element.hide();
                this._createAutocomplete();
                this._createShowAllButton();
            },

            _createAutocomplete: function () {
                var selected = this.element.children(":selected"),
                  value = selected.val() ? selected.text() : "";

                this.input = $("<input>")
                  .appendTo(this.wrapper)
                  .val(value)
                  .attr("title", "")
                  .addClass("custom-combobox-input ui-widget ui-widget-content ui-state-default ui-corner-left")
                  .autocomplete({
                      delay: 0,
                      minLength: 0,
                      source: $.proxy(this, "_source")
                  })
                  .tooltip({
                      classes: {
                          "ui-tooltip": "ui-state-highlight"
                      }
                  });

                this._on(this.input, {
                    autocompleteselect: function (event, ui) {
                        ui.item.option.selected = true;
                        this._trigger("select", event, {
                            item: ui.item.option
                        });
                    },

                    autocompletechange: "_removeIfInvalid"
                });
            },

            _createShowAllButton: function () {
                var input = this.input,
                  wasOpen = false;

                $("<a>")
                  .attr("tabIndex", -1)
                  .attr("title", "Show All Items")
                  .tooltip()
                  .appendTo(this.wrapper)
                  .button({
                      icons: {
                          primary: "ui-icon-triangle-1-s"
                      },
                      text: false
                  })
                  .removeClass("ui-corner-all")
                  .addClass("custom-combobox-toggle ui-corner-right")
                  .on("mousedown", function () {
                      wasOpen = input.autocomplete("widget").is(":visible");
                  })
                  .on("click", function () {
                      input.trigger("focus");

                      // Close if already visible
                      if (wasOpen) {
                          return;
                      }

                      // Pass empty string as value to search for, displaying all results
                      input.autocomplete("search", "");
                  });
            },

            _source: function (request, response) {
                var matcher = new RegExp($.ui.autocomplete.escapeRegex(request.term), "i");
                response(this.element.children("option").map(function () {
                    var text = $(this).text();
                    if (this.value && (!request.term || matcher.test(text)))
                        return {
                            label: text,
                            value: text,
                            option: this
                        };
                }));
            },

            _removeIfInvalid: function (event, ui) {

                // Selected an item, nothing to do
                if (ui.item) {
                    return;
                }

                // Search for a match (case-insensitive)
                var value = this.input.val(),
                  valueLowerCase = value.toLowerCase(),
                  valid = false;
                this.element.children("option").each(function () {
                    if ($(this).text().toLowerCase() === valueLowerCase) {
                        this.selected = valid = true;
                        return false;
                    }
                });

                // Found a match, nothing to do
                if (valid) {
                    return;
                }

                // Remove invalid value
                this.input
                  .val("")
                  .attr("title", value + " didn't match any item")
                  .tooltip("open");
                this.element.val("");
                this._delay(function () {
                    this.input.tooltip("close").attr("title", "");
                }, 2500);
                this.input.autocomplete("instance").term = "";
            },

            _destroy: function () {
                this.wrapper.remove();
                this.element.show();
            }
        });

        $("#combobox").combobox();
        $("#toggle").on("click", function () {
            $("#combobox").toggle();
        });
    });

    $scope.showDialog = function ($event) {
        alert = $mdDialog.alert({
            title: 'Attention',
            textContent: 'This is an example of how easy dialogs can be!',
            ok: 'Close'
        });

        setTimeout(function () { console.log('in timer'); $mdDialog.hide(); }, 1000);

        $mdDialog
          .show(alert)
          .finally(function () {
              setTimeout
              alert = undefined;
          });
    };

    $scope.showApplyChangesDialog = function ($event) {

        $templateCache.remove('/templates/directives/instructorInfo.html')

        $mdDialog.show({
            scope: $scope,
            preserveScope: true,
             //template: ' <my-instructors></my-instructors>'
            templateUrl: '/templates/directives/instructorInfo.html'
            });
    };

    $scope.cancelDialog = function () {
        $mdDialog.hide();
    };

    $scope.saveDialog = function () {
        _.forEach($scope.instructors,
                                    function (obj) {
                                        obj.name = $scope.myName;
                                        obj.subject = $scope.myTextArea;
                                    });

        $mdDialog.hide();
    };

}]
)
/*.directive('customer', function () {
    alert('hi');

    return {
        restrict: 'E',
        scope: {
            instructors: '='
        },

        template: '<ol><li ng-repeat="instructor in instructors">Number: {{instructor.Number}} </li></ol>'
    };
});
*/
;