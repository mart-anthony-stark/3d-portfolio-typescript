namespace EPAnoche2
{
    public partial class Dashboard : Form
    {
        EPAnoche2DataContext db = new EPAnoche2DataContext();
        public Dashboard()
        {
            InitializeComponent();
        }

        private void btnSearch_Click(object sender, EventArgs e)
        {
            dgvUsers.Rows.Clear();
            var GetAll = (from a in db.Users
                          where a.Firstname.Contains(tbSearchText.Text) || a.Lastname.Contains(tbSearchText.Text)
                          select new
                          {
                              a.UserId,
                              a.Firstname,
                              a.Middlename,
                              a.Lastname,
                              a.Birthdate,
                              a.Age,
                              a.Gender,
                              a.CivilStatus,
                              a.ContactNo,
                              a.HomeAddress,
                              a.Username,
                              a.Password
                          }).ToList();

            foreach (var item in GetAll)
            {
                dgvUsers.Refresh();
                int x = dgvUsers.Rows.Add();
                dgvUsers.Rows[x].Cells[0].Value = item.UserId;
                dgvUsers.Rows[x].Cells[1].Value = item.Firstname;
                dgvUsers.Rows[x].Cells[2].Value = item.Middlename;
                dgvUsers.Rows[x].Cells[3].Value = item.Lastname;
                dgvUsers.Rows[x].Cells[4].Value = item.Birthdate.ToString("MM/dd/yyyy");
                dgvUsers.Rows[x].Cells[5].Value = item.Age;
                dgvUsers.Rows[x].Cells[6].Value = item.Gender;
                dgvUsers.Rows[x].Cells[7].Value = item.CivilStatus;
                dgvUsers.Rows[x].Cells[8].Value = item.ContactNo;
                dgvUsers.Rows[x].Cells[9].Value = item.HomeAddress;
                // dgvUsers.Rows[x].Cells[10].Value = item.Username;
            }
        }
    }
}