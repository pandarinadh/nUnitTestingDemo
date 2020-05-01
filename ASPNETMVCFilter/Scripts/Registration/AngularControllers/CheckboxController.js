var CheckboxController = registrationModule.controller("CheckboxController", function ($scope, vendorService, MaterialBOMService) {

    var columnDefs = [
        
        { headerName: "partNumber", field: "partNumber", cellRenderer: 'agGroupCellRenderer'},
        { headerName: "description", field: "description" },
        { headerName: "jobStatus", field: "jobStatus", sortable: true, filter: true },
        { headerName: "paceNumber", field: "paceNumber"},
        {
            headerName: "namedStatus", field: "namedStatus", filter: 'agSetColumnFilter', keyCreator: namedStatusKeyCreator
        },
         {
             headerName: "vendorName", field: "vendorName", filter: 'agSetColumnFilter',
             filterParams: {
                 values: function (params) {
                     setTimeout(function () {
                         params.success(['value 1', 'value 2'])
                     }, 5000);
                 }
             }
         }
    ];

    function namedStatusKeyCreator(params) {
        var key;
        if (params.value === 'Open')
        {
            key = 'Open';
        }
        else
        {
            key = 'Not Open';
        }

        //var countryObject = params.value;
        //var key = countryObject.name;
        return key;
    }
    
    var masterGridOptions = {
        defaultColDef: {
            sortable: true,
            filter: true
        },
        animateRows: true,
        columnDefs: columnDefs,
        rowSelection: 'multiple',
        enableCellTextSelection: true,
        enableRangeSelection: true,
        suppressCopyRowsToClipboard:true,
        enableCellTextSelection: true,
        pagination: true,
        onFilterChanged: function (e) {
            console.log('onFilterChanged', e);
            console.log('gridApi.getFilterModel() =>', e.api.getFilterModel());
        },
       

        onGridReady: function (params) {
          
        }
        //rowData: rowData
    };

    function getWarehouseCodeValuesData(valuesParams)
    {
        console.log(valuesParams);

    }

    $scope.myfunc = function () {
        alert('hi');
       var gridDiv = document.querySelector('#myGrid3');
       new agGrid.Grid(gridDiv, masterGridOptions);
        $scope.materials = MaterialBOMService.funcData();

        // to get the json property names.      
        var characters = Object.keys($scope.materials[0]);
        console.log(characters);

        // to get the json property names.
        characters = Object.keys($scope.materials[0].dashboardInventoryItems[0]);
        console.log(characters);
        

        masterGridOptions.api.setRowData($scope.materials);
    };
    $scope.getSelectedRows = function () {
        var selectedNodes = masterGridOptions.api.getSelectedNodes();
       
        _.forEach(selectedNodes, function (node) {
            console.log(node.data);
        });
        //var selectedData = selectedNodes.map(function (node) { return node.data });
        //var selectedDataStringPresentation = selectedData.map(function (node) { return node.make + ' ' + node.model }).join(', ');
        //alert('Selected nodes: ' + selectedDataStringPresentation);
    };

    $scope.filterState = function () {
        var filterComponent = masterGridOptions.api.getFilterInstance('state');

        filterComponent.setModel({
            type: 'set',
            values: [$scope.filterInput]
        });

        filterComponent.applyModel();
        masterGridOptions.api.onFilterChanged();

        var model = filterComponent.getModel();
        if (model) {
            console.log('Country model is: [' + model.values.join(',') + ']');
        } else {
            console.log('Country model filter is not active');
        }
    };

    $scope.ClearStateFilter = function () {
        var filterComponent = masterGridOptions.api.getFilterInstance('state');
        filterComponent.setModel(null);
        masterGridOptions.api.onFilterChanged();
    };

    $scope.ClearFilter = function () {
        masterGridOptions.api.setFilterModel(null);
    };

});
