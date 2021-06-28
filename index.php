<html>
    <h1>TESTANDO SQLITE</h1>
</html>

<?php
  $db = new SQLite3('novo.db3');

  $result = $db->query('SELECT * FROM alunos');

  while ($row = $result->fetchArray()) {
    echo '<br>';
    echo 'id: '.$row['id'].' / name: '.$row['nome'];
  }

?>