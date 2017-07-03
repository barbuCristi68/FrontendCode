hrApp.service('ManagerService', ['$http', 'CommonResourcesFactory', function ($http, CommonResourcesFactory) {
    return {

        findManager: function (data) {
            var dataList = [];
            var managerList = [];
            var aux = {};
            dataList = data;
            var i = {};
            for (i in dataList) {
                if (dataList[i].managerId != null && aux[dataList[i].managerId.employeeId] == undefined) {
                    managerList.push(dataList[i].managerId);
                    aux[dataList[i].managerId.employeeId] = true;
                }
            }
            return managerList;
        },



        }
    }]
);