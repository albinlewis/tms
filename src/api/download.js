let settings = require('../../settings');

exports.getData = (req, res) => {
    let data, f_ext, c_type;
    const file = req.body.file;
    const format = req.body.format;
    const payload = req.body.payload;
    switch (format) {
        case 'csv': // format is csv
            data = convertToCSVString(payload);
            f_ext = 'csv';
            c_type = 'text/csv';
            break;
        default:    // format is json
            data = convertToJSONString(payload);
            f_ext = 'json';
            c_type = 'application/json';
            break;
    }
    res.setHeader('Content-disposition', 'attachment; filename=timetracking.' + f_ext);
    res.set('Content-Type', c_type).status(200).send(data);
}

function convertToCSVString(data) {
    let string = '';
    data.forEach(t => {
        let line = t.title + ';' + t.description + ';' + t.category + ';' + t.createdAt + ';' + t.updatedAt + ';';
        line += t.visible + ';' + t.active + ';' + t.done + ';' + t.time + ';'; // notes and interval missing currently
        string += line + '\n';
    });
    return string;
}

function convertToJSONString(data) {
    return data;
}
