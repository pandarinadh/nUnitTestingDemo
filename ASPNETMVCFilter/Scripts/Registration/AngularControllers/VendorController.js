var VendorController = registrationModule.controller("VendorController", function ($scope, vendorService, MaterialBOMService) {

    var columnDefs = [
        
        { headerName: "vendorId", field: "vendorId" },
        { headerName: "vendorNumber", field: "vendorNumber" },
        { headerName: "vendorName", field: "vendorName", sortable: true, filter: true },
        { headerName: "state", field: "state", rowGroup: true },
        { headerName: "city", field: "city" },
         { headerName: "zip", field: "zip" },
    ];


    var autoGroupColumnDef = {
        headerName: "state",
        field: "state",
        cellRenderer: 'agGroupCellRenderer',
        cellRendererParams: {
            checkbox: true
        }
    }

    
    var gridOptions = {
        defaultColDef: {
            sortable: true,
            filter: true
        },
        columnDefs: columnDefs,
        autoGroupColumnDef: autoGroupColumnDef,
        groupSelectsChildren: true,
        rowSelection: 'multiple',
        onFilterChanged: function (e) {
            console.log('onFilterChanged', e);
            console.log('gridApi.getFilterModel() =>', e.api.getFilterModel());
        }
        //rowData: rowData
    };

    $scope.myfunc = function () {
       // alert('hi');
        var gridDiv = document.querySelector('#myGrid1');
        new agGrid.Grid(gridDiv, gridOptions);
        $scope.vendors = vendorService.funcData();

        console.log(MaterialBOMService.funcData());

        console.log($scope.vendors);
        gridOptions.api.setRowData($scope.vendors);
    };
    $scope.getSelectedRows = function () {
        var selectedNodes = gridOptions.api.getSelectedNodes();
       
        _.forEach(selectedNodes, function (node) {
            console.log(node.data);
        });
        //var selectedData = selectedNodes.map(function (node) { return node.data });
        //var selectedDataStringPresentation = selectedData.map(function (node) { return node.make + ' ' + node.model }).join(', ');
        //alert('Selected nodes: ' + selectedDataStringPresentation);
    };

    $scope.filterState = function () {
        var filterComponent = gridOptions.api.getFilterInstance('state');

        filterComponent.setModel({
            type: 'set',
            values: [$scope.filterInput]
        });

        filterComponent.applyModel();
        gridOptions.api.onFilterChanged();

        var model = filterComponent.getModel();
        if (model) {
            console.log('Country model is: [' + model.values.join(',') + ']');
        } else {
            console.log('Country model filter is not active');
        }
    };

    $scope.ClearStateFilter = function () {
        var filterComponent = gridOptions.api.getFilterInstance('state');
        filterComponent.setModel(null);
        gridOptions.api.onFilterChanged();
    };

    $scope.ClearFilter = function () {
        gridOptions.api.setFilterModel(null);
    };

});
