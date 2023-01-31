selectedRow=null;

function onFormSubmit(){
    var formdata=readData();
    if(selectedRow==null)
    newRecord(formdata)
    else
    updateRecord(formdata);
    resetForm();

}

function readData()
{
    var formdata={};
    formdata["name"]=document.getElementById("name").value;
    formdata["empcode"]=document.getElementById("empcode").value;
    formdata["salary"]=document.getElementById("salary").value;
    formdata["city"]=document.getElementById("city").value;
    return formdata;
}

function newRecord(data)
{
    var table=document.getElementById("employeelist").getElementsByTagName('tbody')[0];
    var newRow=table.insertRow(table.length);
    cell1=newRow.insertCell(0);
    cell1.innerHTML=data.name;
    cell2=newRow.insertCell(1);
    cell2.innerHTML=data.empcode;
    cell3=newRow.insertCell(2);
    cell3.innerHTML=data.salary;
    cell4=newRow.insertCell(3);
    cell4.innerHTML=data.city;
    cell4=newRow.insertCell(4);
    cell4.innerHTML = `<a onClick="onEdit(this)">Edit</a>  <a onClick="onDelete(this)">Delete</a>`;
}

function resetForm()
{
    document.getElementById("name").value="";
    document.getElementById("empcode").value="";
    document.getElementById("salary").value="";
    document.getElementById("city").value="";
    selectedRow=null;
}

function onEdit(td)
{
    selectedRow=td.parentElement.parentElement;
    document.getElementById("name").value= selectedRow.cells[0].innerHTML;
    document.getElementById("empcode").value= selectedRow.cells[1].innerHTML;
    document.getElementById("salary").value= selectedRow.cells[2].innerHTML;
    document.getElementById("city").value= selectedRow.cells[3].innerHTML;
}

function updateRecord(formdata)
{
    selectedRow.cells[0].innerHTML =formdata.name;
    selectedRow.cells[1].innerHTML =formdata.empcode;
    selectedRow.cells[2].innerHTML =formdata.salary;
    selectedRow.cells[3].innerHTML =formdata.city;

}

function onDelete(td)
{
    if(confirm('Are You Sure Delete?')){
        row=td.parentElement.parentElement;
        document.getElementById("employeelist").deleteRow(row.rowIndex);
        resetForm()
    }
}