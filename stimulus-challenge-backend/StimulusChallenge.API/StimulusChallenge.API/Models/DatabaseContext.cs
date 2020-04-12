using MySql.Data.MySqlClient;

namespace StimulusChallenge.API.Models
{
    public class DatabaseContext
    {
        private string ConnectionString { get; set; }    
    
        public DatabaseContext(string connectionString)    
        {    
            this.ConnectionString = connectionString;    
        }    
    
        private MySqlConnection GetConnection()    
        {    
            return new MySqlConnection(ConnectionString);    
        }  
    }
}