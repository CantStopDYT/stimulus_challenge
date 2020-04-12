using System;
using System.Collections.Generic;

using MySql.Data.MySqlClient;

using StimulusChallenge.API.Models;

namespace StimulusChallenge.API.Services
{
    public class DatabaseService
    {
        public List<Pledge> GetAllPledges()
        {
            List<Pledge> list = new List<Pledge>();  
  
            using (MySqlConnection conn = GetConnection())  
            {  
                conn.Open();  
                MySqlCommand cmd = new MySqlCommand("select * from Pledge ", conn);  
  
                using (var reader = cmd.ExecuteReader())  
                {  
                    while (reader.Read())  
                    {  
                        list.Add(new Pledge()  
                        {  
                            Id = Convert.ToInt32(reader["Id"]),  
                            Name = reader["Name"].ToString(),  
                            ArtistName = reader["ArtistName"].ToString(),  
                            Price = Convert.ToInt32(reader["Price"]),  
                            Genre = reader["genre"].ToString()  
                        });  
                    }  
                }  
            }  
            return list;
        }
    }
}