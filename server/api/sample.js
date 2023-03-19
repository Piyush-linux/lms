export default defineEventHandler((event) => {


  let c1 = {
    title:"Learn Python 3",
    about:"Learn the basics of Python 3, one of the most powerful, versatile, and in-demand programming languages today.",
    mode:"Online",
    place:" link / location " ,
    duration:"25 hours",
    description:"If you’re looking for a programming language that’s flexible and easy to read, try learning Python. It’s one of the most popular languages today, and programming in Python is used for everything from web and software development to data science and analytics to quality assurance. ",
    syllabus:[
    {
      topic:"Hello World",
      about:"Get started with Python syntax in this lesson and then create a point of sale system for a furniture store!"
    },{
      topic:"Control View",
      about:"Get started with Python syntax in this lesson and then create a point of sale system for a furniture store!"
    },{
      topic:"Hello World",
      about:"Get started with Python syntax in this lesson and then create a point of sale system for a furniture store!"
    }]    

  }

  return {
    name: 'Piyush',
    content: '# Sample'
  }
})
