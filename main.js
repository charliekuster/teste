var RegisterArray = [];



$.ajax({
    method:'GET',
    url:'http://127.0.0.1:8000/',
    success:function(response){
        RegisterArray = response
        console.log(RegisterArray)
        buildTable(RegisterArray)
    }
})

buildTable(RegisterArray);

function buildTable(ArraydeRegistro){
    const tabeladeregistros = document.getElementById("myTable");
    tabeladeregistros.innerHTML = ArraydeRegistro.map(item => `
        <tr>
            <td>${item.Bacterium[".fasta"]}</td>
            <td>${item.Bacterium[".gbk"]}</td>
            <td>${item.Bacterium["ID LEMC"]}</td>
            <td>${item.Bacterium["ID "]}</td>
            <td>${item.Bacterium["Organism"]}</td>
            <td>${item.Bacterium["MLST"]}</td>
            <td>${item.Bacterium["Kapsule locus"]}</td>
            <td>${item.Bacterium["Carbapenem resistance"]}</td>

            <td>${item["Sample Data"]["Type of sample"]}</td>
            <td>${item["Sample Data"]["Host"]}</td>
            <td>${item["Sample Data"]["Isolation source"]}</td>
            <td>${item["Sample Data"]["Collection date"]}</td>
            <td>${item["Sample Data"]["Geographic location "]}</td>
            <td>${item["Sample Data"]["City"]}</td>
            <td>${item["Sample Data"]["State"]}</td>
            <td>${item["Sample Data"]["Country"]}</td>
            <td>${item["Sample Data"]["sequenced"]}</td>
            <td>${item["Sample Data"]["From"]}</td>

            <td>${item["Sequencing Data"]["Biobank"]}</td>
            <td>${item["Sequencing Data"]["Biobank location"]}</td>
            <td>${item["Sequencing Data"]["Sequencing platform_1"]}</td>
            <td>${item["Sequencing Data"]["Sequencing platform_2 (hybrid)"]}</td>
            <td>${item["Sequencing Data"]["Assembly method"]}</td>
            <td>${item["Sequencing Data"]["Version or date program was run (Assembly)"]}</td>
            <td>${item["Sequencing Data"]["Annotation method"]}</td>
            <td>${item["Sequencing Data"]["Version or date program was run"]}</td>
            <td>${item["Sequencing Data"]["NCBI Accession Number"]}</td>
           
        </tr>`).join("");
}