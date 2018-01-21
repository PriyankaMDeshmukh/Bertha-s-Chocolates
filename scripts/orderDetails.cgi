use DBI;
use CGI;
use CGI::Cookie
$q = new CGI;

my $host = "opatija.sdsu.edu";
my $port = "3306";
my $database = "jadrn013";
my $username = "jadrn013";
my $password = "simple";
my $database_source = "dbi:mysql:$database:$host:$port";


my $dbh = DBI->connect($database_source, $username, $password)
or die 'Cannot connect to db';



#
#
#
# $str = "";
# while(my @row=$sth->fetchrow_array()) {
#     foreach $item (@row) {
#         $str .= $item."|";
#         }
#     $str .= ";";
#     }
#
# print "Content-type:  text/html\n\n";
# $sth->finish();
# $dbh->disconnect();
#
#
# print $str;





my $cookie = $q->cookie(-name=>'jadrn013',-value=>'',-path=>'/');
print $q->header(-cookie=>$cookie);
my %cookies = $ENV{COOKIE};
# for( keys %cookies) {
# print "The value of the cookie is: $cookies{$_}\n";
# }

# print "<table>\n";
# my ($key, $value);
#
# %cookies = CGI::Cookie->fetch;
# for(keys %cookies) {
#     print "$cookies{$_}\n";
#     }
#
# print "<h1>Shopping cart cookie</h1>";
use POSIX qw(strftime);

my $date = strftime "%m/%d/%Y", localtime;
my $v = $q->cookie('jadrn013');
# print "The raw cookie value is $v<br />";
@rows = split('\|\|',$v);
my $sth = $dbh->prepare("insert into orderDetails (sku, quantity, orderDate) values (?, ?, ?)");

foreach $row (@rows) {
    ($sku, $qty) = split('\|',$row);
    $sth->execute($sku ,$qty,$date);
    # print "$sku = $qty<br />";

    }

    $sth->finish();
     $dbh->disconnect();
     
# print "<h1>Parameters passed to script:</h1>\n";
# my ($key, $value);
#
#
# foreach $key ($q->param) {
#     print "<tr>\n";
#     print "<td>$key</td>\n";
#     foreach $value ($q->param($key)) {
#         print "<td>$value</td>\n";
#         }
#     print "</tr>\n";
# }
# print "</table>\n";
# print "</div>\n";
# print "</body>\n";
# print "</html>\n";
# foreach $key ($q->param) {
#     print "<tr>\n";
#     print "<td>$key</td>\n";
#     foreach $value ($q->param($key)) {
#         print "<td>$value</td>\n";
#         }
#     print "</tr>\n";
# }
# print "</table>\n";
# print "</div>\n";
# print "</body>\n";
# print "</html>\n";
