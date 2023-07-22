const pool = require("../database/index")
const postsController = {
	getAll: async (req,res) => {
		try{
			const [rows, fields] = await pool.query("SELECT * FROM posts");
			res.json({
			  data: rows
			});
		}
		catch(error){
			console.log(error)
			res.json({
				state:"error"
			})
		}
	},

	
	getById: async (req, res) => {
		try {
		  const { id } = req.params;
		  const [ rows, fields ] = await pool.query("SELECT * FROM posts WHERE id = ?", [id]);
		  res.json({
			data: rows
		  });
		} catch (error) {
		  console.log(error);
		  res.json({
			state: "error"
		  });
		}
	  },

	  
	create: async (req,res) => {
		try{
			const { title, content } =req.body
			const sql = "insert into posts (title, content) values (?, ?)"
			const [rows,fields] = await pool.query(sql , [title,content] )
			res.json({
				data: rows
			  });
		}
		catch(error){
			console.log(error)
			res.json({
				state:"error"
			})
		}
	},
	
	update: async (req,res) => {
		try{
			const { title, content } =req.body
			const { id } =req.params
			const sql = "UPDATE posts SET title = ?, content = ? WHERE id = ?";
			//const sql = "update posts set title = ? , content = ? where id = ? "
			const [rows,fields] = await pool.query(sql , [title,content,id] )
			res.json({
				data: rows
			  })
		}
		catch(error){
			console.log(error)
			res.json({
				state:"error"
			})
		}
	},

	delete: async (req, res) => {
		try {
		  const { id } = req.params;
		  const sql = "DELETE FROM posts WHERE id = ?";
		  const [rows, fields] = await pool.query(sql, [id]);
		  res.json({
			data: rows,
		  });
		} catch (error) {
		  console.log(error);
		  res.json({
			state: "error",
		  });
		}
	  }
	  
	
}



module.exports = postsController