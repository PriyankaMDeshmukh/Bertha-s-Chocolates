use DBI;

print <<END_HTML;
Content-type: text/html

<?xml version="1.0" encoding="utf-8"?>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN"
"http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="en" lang="en">
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
  <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
<head>
<title>Sales Report</title>
<meta http-equiv="content-type"
content="text/html;charset=utf-8" />
<meta http-equiv="Content-Style-Type" content="text/css" />
  <link rel="stylesheet" href="/~jadrn013/proj4/css/report.css">
</head>
<body>

<div class='container'>

<h1>Bertha's Deluxe Candies</h1>
<h3>Sales Report</h3>

<table class='table table-striped table-bordered '>
END_HTML

my $host = "opatija.sdsu.edu";
my $port = "3306";
my $database = "proj4";
my $username = "jadrn000";
my $password = "apple";
my $database_source = "dbi:mysql:$database:$host:$port";


my $dbh = DBI->connect($database_source, $username, $password)
or die 'Cannot connect to db';

my $sth = $dbh->prepare("SELECT orders.sku, SUM(orders.quantity) ,
        round(SUM(orders.quantity*product.retail-orders.quantity*product.cost),2)
        FROM proj4.products as product
        INNER JOIN jadrn013.orderDetails as orders
        WHERE product.sku=orders.sku
        GROUP BY orders.sku
        ORDER BY  orders.sku asc;");
$sth->execute();
my $grossSales=0;
my $grossTotal=0;
print "<tr><td>Product Id</td><td>Total Sales</td><td>Total Profit</td></tr>\n";
while(my @row=$sth->fetchrow_array()) {
  $grossSales+=$row[1];
  $grossTotal+=$row[2];
  print "\t<tr>\n";

  print "<td>$row[0]</td>";
  print "<td>$row[1]</td>";
  print "<td>$row[2]</td>\n";
  print "\t</tr>\n";
}

print "<tr><td><b>GROSS TOTAL</b></td><td><b>$grossSales</b></td><td><b>$grossTotal</b></td></tr>\n";

$sth->finish();
$dbh->disconnect();



print "</table>\n";
print "</div>\n";
print "</body>\n";
print "</html>\n";
