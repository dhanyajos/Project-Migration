using Microsoft.EntityFrameworkCore.Migrations;

namespace Project_Migration.Migrations
{
    public partial class MySecondMigration : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "DateofSendData",
                table: "tblapplication");

            migrationBuilder.DropColumn(
                name: "RemarksByAdmin",
                table: "tblapplication");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "DateofSendData",
                table: "tblapplication",
                type: "nvarchar(max)",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "RemarksByAdmin",
                table: "tblapplication",
                type: "nvarchar(max)",
                nullable: true);
        }
    }
}
