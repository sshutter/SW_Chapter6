//@desc     GET all hospitals
//@routes   GET /api/v1/hospitals
//@access   Public
exports.getHospitals=(req, res, next) => {
    res.status(200).json({success:true, msg:'Show all hospitals'});
}

//@desc     GET single hospital
//@routes   GET /api/v1/hospitals/:id
//@access   Public
exports.getHospital=(req, res, next) => {
    res.status(200).json({success:true, msg:`Show hospital ${req.params.id}`});
}

//@desc     Create new hospital
//@routes   POST /api/v1/hospitals
//@access   Private
exports.createHospital=(req, res, next) => {
    res.status(200).json({success:true, msg:'Create new hospital'});
}

//@desc     Update hospital
//@routes   PUT /api/v1/hospitals/:id
//@access   Private
exports.updateHospital=(req, res, next) => {
    res.status(200).json({success:true, msg:`Update hospital ${req.params.id}`});;
}

//@desc     Delete hospital
//@routes   DELETE /api/v1/hospitals/:id
//@access   Public
exports.deleteHospital=(req, res, next) => {
    res.status(200).json({success:true, msg:`Delete hospital ${req.params.id}`});
}