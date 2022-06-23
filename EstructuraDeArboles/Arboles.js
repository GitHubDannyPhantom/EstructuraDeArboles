const util=require('util');

class checklist{
    constructor(grupos=[]){
        this.grupos=grupos;
    }
    addGrupo(nombre,subgrupo, checks){
        this.grupos.push(new Cliente(nombre,subgrupo, checks));
        return this;
    }
}

class Cliente{
    constructor(nombre, subgrupos=[], checks=[]){
        this.nombre=nombre;
        this.subgrupo=subgrupos;
        this.checks=checks;
    }
    addSubG(nombre=Array, subgrupos, checks){
    this.subgrupo.push(new subGrupo(nombre, subgrupos, checks));
    return this;
    }
    addSubG(subgrupo){
        this.subgrupo.push(subgrupo);
        return this;
    }
    addChek(proceso, value){
        this.checks.push(new Check(proceso, value));
        return this;
    }
}

class subGrupo{
    constructor(nombre, subgrupos=[], checks=[]){
        this.nombre=nombre;
        this.subgrupos=subgrupos;
        this.checks=checks;
    }
    addSubG(nombre, subgrupos, checks){
        this.subgrupos.push(nombre,subgrupos,checks);
        return this;
    }
    addSubG(subgrupo){
        this.subgrupo.push(subgrupo);
        return this;
    }
    addChek(check){
        this.checks.push(check);
        return this;
    }
}

class Check{
    constructor(proceso, value=0){
        this.proceso=proceso;
        this.value=value;
    }
    setValue(proceso, value){
        this.proceso=proceso;
        this.value = value;
        return this;
    }
}


let Checklist1 = new checklist();


let cliente = new Cliente('MIT');
let SMT=new subGrupo("MAIN - PROCESOS - SMT");
let EM=new subGrupo("MAIN - PROCESOS - ENSAMBLE MANUAL");
let AOIE1=new Check("Prueba SAKI E1");
let AOIE2=new Check("Prueba SAKI E2");
let SMTHMI=new Check("SMT HMI");
let Clinch1=new Check("Clinch1 HMI");
let Clinch2=new Check("Clinch2 HMI");
let MIDLLE=new Check("Midlle Inspection HMI");
let VisionSystem=new Check("HMI Vision System");
let SAKIIM=new Check("Prueba de SAKI IM");
let BD=new Check("Registro en Base de datos");

Checklist1.addGrupo('Nuevo', cliente.addSubG(SMT.addChek(AOIE1), SMT.addChek(AOIE2), SMT.addChek(SMTHMI)));
Checklist1.addGrupo('Agregar',cliente.addSubG(EM.addChek(Clinch1), EM.addChek(Clinch2), EM.addChek(MIDLLE), EM.addChek(VisionSystem), EM.addChek(SAKIIM), EM.addChek(BD)));


console.log(util.inspect(cliente, false, null, true ))