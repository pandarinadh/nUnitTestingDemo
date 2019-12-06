var MaterialBOMController = registrationModule.controller("MaterialBOMController", function ($scope, vendorService, MaterialBOMService) {

    var columnDefs = [
        
        { headerName: "partNumber", field: "partNumber", cellRenderer: 'agGroupCellRenderer'},
        { headerName: "description", field: "description" },
        { headerName: "jobStatus", field: "jobStatus", sortable: true, filter: true },
        { headerName: "paceNumber", field: "paceNumber"},
        { headerName: "namedStatus", field: "namedStatus", filter: 'agSetColumnFilter', filterParams: { applyButton: true, clearButton: true } },
         { headerName: "vendorName", field: "vendorName", filter: 'agSetColumnFilter' },
    ];


    
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
        masterDetail: true,
        enableCellTextSelection: true,
        onFilterChanged: function (e) {
            console.log('onFilterChanged', e);
            console.log('gridApi.getFilterModel() =>', e.api.getFilterModel());
        },
        detailCellRendererParams: {
            detailGridOptions: {
                columnDefs: [
                    { field: 'warehouseCode', filter: 'agSetColumnFilter' },
                    { field: 'warehouseName' },
                    { field: 'partDescription' },
                    { field: 'onHandQty' },
                    { field: 'scopedQty' },
                ],
                filter: true,
                onFirstDataRendered: function (params) {
                    params.api.sizeColumnsToFit();
                }
            },

            getDetailRowData: function (params) {
                params.successCallback(params.data.dashboardInventoryItems);
            }
        },

        onGridReady: function (params) {
            setTimeout(function () {
                params.api.sizeColumnsToFit();

                var someRow = params.api.getRowNode("1");
                if (someRow) {
                    someRow.setExpanded(true);
                }
            }, 1500);
        }
        //rowData: rowData
    };


    $scope.myfunc = function () {
     //   alert('hi');
       var gridDiv = document.querySelector('#myGrid');
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
