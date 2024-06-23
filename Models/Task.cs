namespace ToDoListApi.Models
{
    public class Task
    {
        public int Id { get; set; }
        public string Title { get; set; } = string.Empty; // Zapewnia brak wartości null
        public bool IsComplete { get; set; }
    }
}
