(function () {
    function class_1() {
    }
    return class_1;
}());
"example-container mat-elevation-z8" >
    -table;
table[dataSource] = "dataSource" >
    !-- - Note;
that;
these;
columns;
can;
be;
defined in any;
order.
;
The;
actual;
rendered;
columns;
are;
set;
property;
on;
the;
row;
definition;
" -->
    < !--Position;
Column-- >
    -container;
matColumnDef = "title" >
    -header - cell * matHeaderCellDef > Name < /mat-header-cell>
    < mat - cell * matCellDef;
"let element" > {};
{
    element.title;
}
/mat-cell>
    < /ng-container>
    < !--Name;
Column-- >
    -container;
matColumnDef = "time" >
    -header - cell * matHeaderCellDef > Duration < /mat-header-cell>
    < mat - cell * matCellDef;
"let element" > {};
{
    element.time;
}
s < /mat-cell>
    < /ng-container>
    < !--Weight;
Column-- >
    -container;
matColumnDef = "done" >
    -header - cell * matHeaderCellDef > Status < /mat-header-cell>
    < mat - cell * matCellDef;
"let element" > {};
{
    element.done;
}
/mat-cell>
    < /ng-container>
    < mat - header - row * matHeaderRowDef;
"displayedColumns" > /mat-header-row>
    < mat - row * matRowDef;
"let row; columns: displayedColumns;" > /mat-row>
    < /mat-table>
    < /div>;
