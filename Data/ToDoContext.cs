using Microsoft.EntityFrameworkCore;
using ToDoListApi.Models;

namespace ToDoListApi.Data
{
    public class ToDoContext : DbContext
    {
        public ToDoContext(DbContextOptions<ToDoContext> options) : base(options)
        {
        }

        public DbSet<ToDoListApi.Models.Task> Tasks { get; set; }
    }
}
