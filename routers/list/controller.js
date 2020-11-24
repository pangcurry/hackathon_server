const { student } = require('../../models');

const list = async (req,res,next) => {
  let total = [];
  try {
    const data = await student.findAll({
        attributes: ['temperature'],
        order: [['number','asc']]
    });
    const grade = await student.findOne({
      attributes: ['grade'],
      where: {
        number: 12, //0번으로
      }
    })
    const clas = await student.findOne({
      attributes:['class'],
      where: {
        number: 12,
      }
    })
    for (let i in data) {
      total.push(data[i].dataValues.temperature);
    }




    res.status(200).json({
      statusCode: "200",
      data: {
        grade: grade.grade, // ex
        class: clas.class, // ex
        list: total
      }
    });
  }
  catch (e) {
    res.status(500).json({
      "statusCode": e.status,
      "message": e.message,
    })
  }
}

module.exports = {
    list
}
