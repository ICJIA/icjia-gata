/// Removes the search bar and pagination in Datatables //////////////////////////////////////////
// See: https://legacy.datatables.net/ref#sDom
exports.dtConfig = {
  "pageLength": 100,
    "columnDefs": [{

        "targets": '_all',
        "createdCell": function(td, cellData, rowData, row, col) {
            // Add commas to large numbers
            $(td).html($(td).html().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,"))
        }
    }],
    "sDom": '<"top">rt<"bottom"><"clear">'
}




// Construct HTML table from chart object //////////////////////////////////////////////////////
exports.renderTable = function(hc, tableId) {
    let series = '<th></th>'
    let row = '<tr>';
    let tSeries = '';
    // read chart data --> convert to table
    for (let i = 0; i < hc.series.length; i++) {
        series = series + `<th> ${hc.series[i].name}</th>`
    }

    for (let i = 0; i < hc.series[0].data.length; i++) {
        row = row + `<td class="strong">${hc.xAxis.categories[i]}</td>`
        for (let j = 0; j < hc.series.length; j++) {

            let tmp = hc.series[j].data[i]
            row = row + `<td> ${tmp} </td>`
        }
        row = row + `</tr>`
    }


    // ES6 template literal: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals
    let hcTable = ''
    return hcTable = `
                            <table id="${tableId}" class="ordered striped">
                                <thead>
                                    <tr>
                                        ${series}
                                    </tr>
                                </thead>
                                    <tbody>
                                    ${row}
                                    </tbody>
                            </table> `


}


// Generate unique ID ////////////////////////////////////////////////////////////////////////

exports.guid = function() {
    // generate unique id
    function s4() {
        return Math.floor((1 + Math.random()) * 0x10000)
            .toString(16)
            .substring(1);
    }
    return s4() + s4() + s4() + s4() + s4() + s4();
}





// Determine size of object  /////////////////////////////////////////////////////////////////

exports.objSize = function(obj) {
    var size = 0,
        key;
    for (key in obj) {
        if (obj.hasOwnProperty(key)) size++;
    }
    return size;
}





// Parse string as boolean //////////////////////////////////////////

exports.parseBool = function(str) {
    // console.log(typeof str);
    // strict: JSON.parse(str)

    if (str == null)
        return false;

    if (typeof str === 'boolean') {
        return (str === true);
    }

    if (typeof str === 'string') {
        if (str == "")
            return false;

        str = str.replace(/^\s+|\s+$/g, '');
        if (str.toLowerCase() == 'true' || str.toLowerCase() == 'yes')
            return true;

        str = str.replace(/,/g, '.');
        str = str.replace(/^\s*\-\s*/g, '-');
    }

    // var isNum = string.match(/^[0-9]+$/) != null;
    // var isNum = /^\d+$/.test(str);
    if (!isNaN(str))
        return (parseFloat(str) != 0);

    return false;
}


exports.stripTags =  function(str) {
  // strip tags
  str = str.replace(/<\/?[^>]+>/g, '');
  // strip carriage returns
  str = str.replace(/[\n\r]/g, '');
  return str
}

exports.truncateString = function(str, num) {

  if (str === undefined) return

  if (str.length <= num) {
    return str;
  } else {
    return str.slice(0, num > 3 ? num - 3 : num) + '...';
  }
}

function stripCarriageReturns (str) {
  return str.replace(/[\n\r]/g, '');
}

exports.componentToRouterPath = function (c) {
  String.prototype.camelCaseToDashed = function(){
    return this.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();
  }
  path = _.replace(c,"./views","")
  path = _.replace(path,".vue","")
  path = path.camelCaseToDashed();
  return path
}

exports.generateRoutes = function (arr) {
  // generates routes for routes.js and injects metadata about each page
  const _REDIRECT_ROUTE = {
      path: '/*',
      title: 'Redirect',
      type: 'redirect',
      created: new Date(),
      status: 'live',
      name: 'Redirect',
      redirect: '/'
  }

  let _r = [];
  let _obj = {}
  let _name = 'NoNameSpecified'
  let _created = new Date(String().replace(/-/g, "/"))
  let _expired = new Date(String('2999-12-31').replace(/-/g, "/"))
  let _title = 'No Title Specified'
  let _description = 'No Description specified'
  let _status = 'live'
  let _type = 'page'

  arr.forEach(function(eachObj) {
      _obj = {}
      _obj.path = eachObj["path"]
      // if (eachObj["path"]) {
      //   _obj.path = eachObj["path"]
      // }else {
      //   _obj.path = '/'
      //   console.table(eachObj["component"])
      // }

      //console.log(eachObj["component"].components)
      _obj.component = eachObj["component"]
      // Create page-specific meta data from views
      //obj.name = String(eachObj["component"].pageData.title).replace(/\s+/g, '') || 'NoName'
      if ('pageData' in eachObj["component"]) {

        if ('name' in eachObj["component"]) {
          _obj.name = String(eachObj["component"].pageData.title).replace(/\s+/g, '')
        } else {
          _obj.name = _name
        }

        if ('created' in eachObj["component"].pageData) {
          _obj.created = new Date(String(eachObj["component"].pageData.created).replace(/-/g, "/"))
        } else {
          _obj.created = _created
        }

        if ('expired' in eachObj["component"].pageData) {
          _obj.expired = new Date(String(eachObj["component"].pageData.expired).replace(/-/g, "/"))

        } else {
          _obj.expired = _expired
        }

        if ('title' in eachObj["component"].pageData) {
          _obj.title = eachObj["component"].pageData.title,100
        } else {
          _obj.title = _title
        }

        if ('description' in eachObj["component"].pageData) {
          _obj.description = stripCarriageReturns(eachObj["component"].pageData.description)
        } else {
          _obj.description = _description
        }
        if ('status' in eachObj["component"].pageData) {
          _obj.status = eachObj["component"].pageData.status
        } else {
          _obj.status = _status
        }

        if ('type' in eachObj["component"].pageData) {
          _obj.type = eachObj["component"].pageData.type
        } else {
          _obj.type = _type
        }


      } else {
        _obj.name = _name
        _obj.created = _created
        _obj.expired = _expired
        _obj.title = _title
        _obj.description = _description
        _obj.status = _status
        _obj.type = _type
      }
      _r.push(_obj)




  });
  _r.push(_REDIRECT_ROUTE)
  console.table(_r)
  return _r

}
