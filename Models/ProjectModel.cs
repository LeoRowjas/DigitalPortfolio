namespace WebApplication1.Models;

public class ProjectModel
{
    public int Id { get; set; }
    public required string Name { get; set; } = string.Empty;
    public string Description { get; set; } = string.Empty;
    public DateTime PublicationDate { get; set; }
}