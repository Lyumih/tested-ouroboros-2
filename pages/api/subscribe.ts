export default (req,res) => {
  res.statusCode = 200
  res.setHeader('Content-Type','application/json')
  const body = JSON.parse(req.body)
  console.log(body)
  const email = body.email
  console.log(email)
  if (email) {
    return res.json({
      success:true,
      data: {
        email: email,
        subscribe: true
      }
    })
  } else {
    res.statusCode = 400
    return res.json({
      message: `Wrong email`
    })
  }
}