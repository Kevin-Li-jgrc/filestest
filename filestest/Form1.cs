using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.IO;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;

namespace filestest
{
    public partial class Form1 : Form
    {
        public Form1()
        {
            InitializeComponent();
        }

        private void button1_Click(object sender, EventArgs e)
        {
            string[] files = Directory.GetFiles(textBox1.Text,
        "*.*", SearchOption.AllDirectories);

            foreach (string file in files)
            {
                FileInfo fi1 = new FileInfo(file);
                double Size = Math.Round(Convert.ToDouble(Convert.ToDouble(fi1.Length) / 1048576), 2);
                if (Size >= 100)
                {
                    Console.WriteLine(file + "\t" + Size);
                }
                
            }
        }
    }
}
