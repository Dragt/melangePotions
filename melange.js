function Potion(id)
{
   //Ici, on force les valeurs à être des chiffres
   puissance = 1*document.getElementById("puissance_" + id).value;
   this.nom = document.getElementById("potion_" + id).value;
   this.attaque = 1*document.getElementById("attaque_" + id).value;
   this.esquive = 1*document.getElementById("esquive_" + id).value;
   this.degats = 1*document.getElementById("degats_" + id).value;
   this.regeneration = 1*document.getElementById("regeneration_" + id).value;
   this.vue = 1*document.getElementById("vue_" + id).value;
   this.pvs = 1*document.getElementById("pvs_" + id).value;
   this.armure = 1*document.getElementById("armure_" + id).value;
   this.rm = 1*document.getElementById("rm_" + id).value;
   this.mm = 1*document.getElementById("mm_" + id).value;
   this.temps = 1*document.getElementById("temps_" + id).value;
   this.duree = 1*document.getElementById("duree_" + id).value;
   this.casecachee = 1*document.getElementById("casecachee_" + id).value;
   this.zone = document.getElementById("zone_" + id).checked;
   this.painthure = document.getElementById("painthure_" + id).checked;
   this.bidouillee = document.getElementById("bidouillee_" + id).checked;
   if (this.bidouillee)
   {
      this.bidouille = document.getElementById("bidouille_" + id).value;
   }
   else
   {
      this.bidouille = "";
   }
   this.melangee = document.getElementById("melangee_" + id).checked;
   
   this.total_base = Math.abs(this.attaque) + Math.abs(this.esquive) + Math.abs(this.degats) + Math.abs(this.regeneration) + Math.abs(this.vue) + Math.abs(this.casecachee);
   this.total_base += Math.abs(this.pvs) + Math.abs(this.armure) + Math.abs((this.rm+this.mm)/10) + Math.abs(this.temps/30);
}

function ModificationPotion(id)
{
   puissance = 1 * document.getElementById("puissance_" + id).value;
   //Remise à vide
   document.getElementById("attaque_" + id).value = "";
   document.getElementById("esquive_" + id).value = "";
   document.getElementById("degats_" + id).value = "";
   document.getElementById("regeneration_" + id).value = "";
   document.getElementById("vue_" + id).value = "";
   document.getElementById("pvs_" + id).value = "";
   document.getElementById("armure_" + id).value = "";
   document.getElementById("rm_" + id).value = "";
   document.getElementById("mm_" + id).value = "";
   document.getElementById("temps_" + id).value = "";
   document.getElementById("zone_" + id).checked = false;
   document.getElementById("painthure_" + id).checked = false;
   document.getElementById("duree_" + id).value = "";
   switch (document.getElementById("potion_" + id).value)
   {
      case "Potion mélangée":
         document.getElementById("melangee_" + id).checked = true;
         break;
      case "Dover Powa":
         document.getElementById("duree_" + id).value = 2;
         break;
      case "Elixir de Bonne Bouffe":
         document.getElementById("degats_" + id).value = puissance;
         document.getElementById("regeneration_" + id).value = puissance;
         document.getElementById("duree_" + id).value = 5;
         break;
      case "Elixir de Corruption":
         document.getElementById("attaque_" + id).value = puissance;
         document.getElementById("esquive_" + id).value = -puissance;
         document.getElementById("degats_" + id).value = puissance;
         document.getElementById("regeneration_" + id).value = -puissance;
         document.getElementById("vue_" + id).value = -puissance;
         document.getElementById("armure_" + id).value = +puissance;
         document.getElementById("duree_" + id).value = 5;
         break;
      case "Elixir de Fertilité":
         document.getElementById("attaque_" + id).value = puissance;
         document.getElementById("degats_" + id).value = puissance;
         document.getElementById("duree_" + id).value = 5;
         break;
      case "Elixir de Feu":
         document.getElementById("esquive_" + id).value = puissance;
         document.getElementById("vue_" + id).value = puissance;
         document.getElementById("duree_" + id).value = 5;
         break;
      case "Elixir de Longue-Vue":
         document.getElementById("vue_" + id).value = puissance;
         document.getElementById("duree_" + id).value = 3;
         break;
      case "Essence de KouleMann":
         document.getElementById("regeneration_" + id).value = puissance;
         document.getElementById("vue_" + id).value = puissance;
         if (puissance > 2)
            document.getElementById("pvs_" + id).value = puissance - 1;
         document.getElementById("duree_" + id).value = 4;
         break;
      case "Extrait de DjhinTonik":
         document.getElementById("degats_" + id).value = puissance;
         document.getElementById("regeneration_" + id).value = puissance;
         document.getElementById("pvs_" + id).value = 2;
         document.getElementById("duree_" + id).value = 4;
         break;
      case "Extrait du Glacier":
         document.getElementById("regeneration_" + id).value = puissance;
         document.getElementById("armure_" + id).value = puissance;
         document.getElementById("duree_" + id).value = 5;
         break;
      case "Grippe en Conserve":
         document.getElementById("attaque_" + id).value = -puissance;
         document.getElementById("esquive_" + id).value = -puissance;
         document.getElementById("degats_" + id).value = -puissance;
         document.getElementById("regeneration_" + id).value = -puissance;
         document.getElementById("duree_" + id).value = 3;
         break;
      case "Jus de Chronomètre":
         document.getElementById("temps_" + id).value = -30 * puissance;
         document.getElementById("duree_" + id).value = 3;
         break;
      case "Métomol":
         document.getElementById("armure_" + id).value = -2 * puissance;
         document.getElementById("temps_" + id).value = -10 * puissance;
         document.getElementById("duree_" + id).value = 3;
         break;
      case "Pneumonie en Conserve":
         document.getElementById("attaque_" + id).value = -puissance;
         document.getElementById("esquive_" + id).value = -puissance;
         document.getElementById("degats_" + id).value = -puissance;
         document.getElementById("regeneration_" + id).value = -puissance;
         document.getElementById("duree_" + id).value = 3;
         break;
      case "Potion de Guérison":
         document.getElementById("pvs_" + id).value = 2 * puissance;
         document.getElementById("duree_" + id).value = 0;
         break;
	  case "Potion de painthure":
	     document.getElementById("painthure_" + id).checked = true;
	     document.getElementById("casecachee_" + id).value = 10 * puissance;
		 document.getElementById("duree_" + id).value = 0;
		 break;
      case "PufPuff":
         if (puissance > 1)
            document.getElementById("attaque_" + id).value = 1 - puissance;
         if (puissance > 1)
            document.getElementById("esquive_" + id).value = 1 - puissance;
         document.getElementById("vue_" + id).value = -1 * puissance;
         if (puissance > 2)
            document.getElementById("pvs_" + id).value = 0;
         document.getElementById("zone_" + id).checked = true;
         document.getElementById("duree_" + id).value = 3;
         break;
      case "Rhume en Conserve":
         document.getElementById("attaque_" + id).value = -puissance;
         document.getElementById("esquive_" + id).value = -puissance;
         document.getElementById("degats_" + id).value = -puissance;
         document.getElementById("regeneration_" + id).value = -puissance;
         document.getElementById("duree_" + id).value = 3;
         break;
      case "Sang de Toh Réroh":
         document.getElementById("attaque_" + id).value = puissance;
         document.getElementById("esquive_" + id).value = puissance;
         document.getElementById("vue_" + id).value = Math.floor((puissance-1)/2);
         document.getElementById("duree_" + id).value = 4;
         break;
      case "Sinne Khole":
         document.getElementById("duree_" + id).value = 2;
         break;
      case "Toxine Violente":
         document.getElementById("pvs_" + id).value = -2 * puissance;
         document.getElementById("duree_" + id).value = 0;
         break;
      case "VoiPuRin":
         document.getElementById("vue_" + id).value = -10 * puissance;
         document.getElementById("duree_" + id).value = 2;
         break;
      case "Zet Crakdedand":
         document.getElementById("attaque_" + id).value = -puissance;
         document.getElementById("esquive_" + id).value = -puissance;
         document.getElementById("vue_" + id).value = -1;
         document.getElementById("pvs_" + id).value = 2 * puissance;
         document.getElementById("duree_" + id).value = 3;
         break;
   }
   TotalPotion(id);
}

function TotalPotion(id)
{
   p = new Potion(id);
   document.getElementById("total_" + id).innerHTML = p.total_base;
}

function Calculer()
{
   var resultat = 33;
   var texte = 'Base               :    33\n';

   p1 = new Potion(1);
   p2 = new Potion(2);
   resultat += p1.total_base + p2.total_base;
   texte += 'Potion 1           : + ';
   if (String(p1.total_base).length==1)
      texte += '  ';
   if (String(p1.total_base).length==2)
      texte += ' ';
   texte += p1.total_base + '\n';
   texte += 'Potion 2           : + ';
   if (String(p2.total_base).length==1)
      texte += '  ';
   if (String(p2.total_base).length==2)
      texte += ' ';
   texte += p2.total_base + '\n';
   
   if ( (p1.painthure && !p2.painthure || !p1.painthure && p2.painthure) )
   {
      resultat += 40;
      texte += 'Pàïntûré           : +  40\n';
   }

   if ( p1.melangee )
   {
      resultat += 15;
      texte += 'Potion 1 mélangée  : +  15\n';
   }
   if ( p2.melangee )
   {
      resultat += 15;
      texte += 'Potion 2 mélangée  : +  15\n';
   }
   if ( p1.duree > p2.duree )
   {
      resultat += p1.duree;
      texte += 'Durée maximale     : +   ' + p1.duree + '\n';
   }
   else
   {
      resultat += p2.duree;
      texte += 'Durée maximale     : +   ' + p2.duree + '\n';
   }
   if (p1.zone || p2.zone)
   {
      resultat += 40;
      texte += 'Potion de zone     : +  40\n';
   }
   if (p1.nom == p2.nom)
   {
      resultat -= 15;
      texte += 'même nom de base   : -  15\n';
   }   
   
   pure1 = ( p1.attaque==0 && p1.esquive==0 && p1.degats==0 && p1.regeneration==0 && p1.vue==0 && p1.pvs!=0 && p1.armure==0 && p1.rm==0 && p1.mm==0 && p1.temps==0 && p1.duree==0 && p1.zone==false );
   pure2 = ( p2.attaque==0 && p2.esquive==0 && p2.degats==0 && p2.regeneration==0 && p2.vue==0 && p2.pvs!=0 && p2.armure==0 && p2.rm==0 && p2.mm==0 && p2.temps==0 && p2.duree==0 && p2.zone==false );
   if ( (pure1 && !pure2) || (!pure1 && pure2) )
   {
      resultat += 40;
      texte += 'Potion de vie pure : +  40\n';
   }
   resultat = Math.round(resultat);
   resultat_hors_compo = resultat;
   if ( document.getElementById("puissance_3").value > 0 )
   {
      resultat -= Math.abs(document.getElementById("puissance_3").value);
      texte += 'Composant          : -  ';
      if (String(document.getElementById("puissance_3").value).length==1)
         texte += ' ';
      texte += document.getElementById("puissance_3").value + '\n';
      switch (document.getElementById("qualite_3").value)
      {
         case "Très Mauvaise" :
           resultat -= 4;
           texte += 'Qualité            : -   4\n';
           break;
         case "Mauvaise" :
           resultat -= 8;
           texte += 'Qualité            : -   8\n';
           break;
         case "Moyenne" :
           resultat -= 12;
           texte += 'Qualité            : -  12\n';
           break;
         case "Bonne" :
           resultat -= 16;
           texte += 'Qualité            : -  16\n';
           break;
         case "Très Bonne" :
           resultat -= 20;
           texte += 'Qualité            : -  20\n';
           break;
      }
   }
   texte += '-----------------------------\n';
   texte += '                       ';
   if (String(resultat).length==1)
      texte += '  ';
   if (String(resultat).length==2)
      texte += ' ';
   texte += resultat + '%';
   if (resultat < 15)
   {
      resultat = 15;
      texte += " => 15%";
   }

   if (resultat > 15)
   {
      ChoixMonstre(resultat_hors_compo, document.getElementById("risque_maxi").value);
   }

   var c = document.getElementById("resultat");
   c.value = resultat + "%";
   var c = document.getElementById("explications");
   c.innerHTML = texte;
   MiseAJourResultat();
}

function resetFields()
{
document.getElementById("puissance_").value ="";
document.getElementById("potion_" + id).value = "";
document.getElementById("attaque_" + id).value = "";
document.getElementById("esquive_" + id).value = "";
document.getElementById("degats_" + id).value = "";
document.getElementById("regeneration_" + id).value = "";
document.getElementById("vue_" + id).value ="";
document.getElementById("pvs_" + id).value ="";
document.getElementById("armure_" + id).value ="";
document.getElementById("rm_" + id).value ="";
document.getElementById("mm_" + id).value ="";
document.getElementById("temps_" + id).value =""
document.getElementById("duree_" + id).value ="";
document.getElementById("casecachee_" + id).value ="";
document.getElementById("zone_" + id).value ="";
document.getElementById("painthure_" + id).value ="";
document.getElementById("bidouillee_" + id).value ="";
document.getElementById("melangee_" + id).value ="";
}

function MiseAJourResultat()
{
   if (document.getElementById("potion_1").value == document.getElementById("potion_2").value)
   {
      document.getElementById("potion_3").innerHTML = document.getElementById("potion_1").value + " mélangées";
   }
   else
   {
      document.getElementById("potion_3").innerHTML = "Potion mélangée";
   }
   document.getElementById("attaque_3").innerHTML = 1*document.getElementById("attaque_1").value + 1*document.getElementById("attaque_2").value;
   document.getElementById("esquive_3").innerHTML = 1*document.getElementById("esquive_1").value + 1*document.getElementById("esquive_2").value;
   document.getElementById("degats_3").innerHTML = 1*document.getElementById("degats_1").value + 1*document.getElementById("degats_2").value;
   document.getElementById("regeneration_3").innerHTML = 1*document.getElementById("regeneration_1").value + 1*document.getElementById("regeneration_2").value;
   document.getElementById("vue_3").innerHTML = 1*document.getElementById("vue_1").value + 1*document.getElementById("vue_2").value;
   document.getElementById("pvs_3").innerHTML = 1*document.getElementById("pvs_1").value + 1*document.getElementById("pvs_2").value;
   document.getElementById("armure_3").innerHTML = 1*document.getElementById("armure_1").value + 1*document.getElementById("armure_2").value;
   document.getElementById("rm_3").innerHTML = 1*document.getElementById("rm_1").value + 1*document.getElementById("rm_2").value;
   document.getElementById("mm_3").innerHTML = 1*document.getElementById("mm_1").value + 1*document.getElementById("mm_2").value;
   document.getElementById("temps_3").innerHTML = 1*document.getElementById("temps_1").value + 1*document.getElementById("temps_2").value;
   if (document.getElementById("painthure_1").checked || document.getElementById("painthure_2").checked)
   {
      document.getElementById("painthure_3").innerHTML = "oui";
   }
   else
   {
      document.getElementById("painthure_3").innerHTML = "non";
   }   
   
   
   
   if (document.getElementById("zone_1").checked || document.getElementById("zone_2").checked)
   {
      document.getElementById("zone_3").innerHTML = "oui";
   }
   else
   {
      document.getElementById("zone_3").innerHTML = "non";
   }
   document.getElementById("duree_3").innerHTML = Math.max(1*document.getElementById("duree_1").value,1*document.getElementById("duree_2").value);
}

function ChoixMonstre (resultat, risque_maxi)
{
   var trouve = false;
   var texte = "";
   var texte_2 = "";
   var texte_3 = "";

   //Pour chaque qualité
   for (q=4;q<24;q+=4)
   {
      switch (q)
      {
         case 4:
            texte_2 += "\n   <b>Qualité Très Mauvaise :</b>";
            break;
         case 8:
            texte_2 += "\n   <b>Qualité Mauvaise :</b>";
            break;
         case 12:
            texte_2 += "\n   <b>Qualité Moyenne :</b>";
            break;
         case 16:
            texte_2 += "\n   <b>Qualité Bonne :</b>";
            break;
         case 20:
            texte_2 += "\n   <b>Qualité Très Bonne :</b>";
            break;
      }
      //Pour chaque monstre
      texte_3 = "";
      for (i=0;i<Monstres.length;i++)
      {
         if (Monstres[i][1]>0 && Monstres[i][2])
         {
            if ( (resultat-Monstres[i][1]-q) >= 15 && (resultat-Monstres[i][1]-q) <= risque_maxi )
            {
               texte_3 += "\n     - " + Monstres[i][0];
               texte_3 += " (" + (resultat-(Monstres[i][1]+q)) + "%)";
            }
         }
      }
      if (texte_3!="")
      {
         texte_2 += texte_3;
         trouve = true;
      }
      else
      {
         texte_2 += "\n     aucun monstre ne correspond";
      }
   }

   if (trouve)
   {
      texte = "Les meilleurs composants pour un risque maximum de <b>" + risque_maxi + "%</b> sont :" + texte_2;
   }
   else
   {
      //Dans notre cas, on ne peut pas y arriver même avec le meilleur morceau, on va donc essayer de s'en approcher
      if (resultat-45 > 15)
      {
         texte += "\n   <b>Qualité Très Bonne :</b>";
         //Pour chaque monstre
         for (i=0;i<Monstres.length;i++)
         {
            if (Monstres[i][1]>=25)
            {
               texte += "\n     - " + Monstres[i][0] + " (" + (resultat-(Monstres[i][1]+20)) + "%)";
            }
         }
         if (texte != "")
         {
            texte = "Les meilleurs composants pour descendre le plus bas sont :" + texte;
         }
      }
   }
   document.getElementById("composants").innerHTML = texte;
}

//Création de la liste des monstres
function ChargerDatas()
{
   var c = document.getElementById("puissance_3");
   //Pour chaque monstre
   for (i=0;i<Monstres.length;i++)
   {
      if (Monstres[i][1]>0 && Monstres[i][2])
      {
         var o = document.createElement("option");
         o.innerHTML = Monstres[i][0] + " (" + Monstres[i][1] + ")";
         o.value = Monstres[i][1];
         c.appendChild(o);
      }
   }

   var c = document.getElementById("potion_1");
   //Pour chaque potion
   for (i=0;i<Potions.length;i++)
   {
      if (Potions[i][0]!="")
      {
         var o = document.createElement("option");
         o.innerHTML = Potions[i][0];
         o.value = Potions[i][0];
         c.appendChild(o);
      }
   }

   var c = document.getElementById("potion_2");
   //Pour chaque potion
   for (i=0;i<Potions.length;i++)
   {
      if (Potions[i][0]!="")
      {
         var o = document.createElement("option");
         o.innerHTML = Potions[i][0];
         o.value = Potions[i][0];
         c.appendChild(o);
      }
   }
}

//Création de la liste des monstres
function ListerMonstres()
{
   var c = document.getElementById("liste_monstres");
   //Pour chaque monstre
   for (i=0;i<Monstres.length;i++)
   {
      if (Monstres[i][0]!="")
      {
         var o = document.createElement("tr");

         var oa = document.createElement("td");
         oa.innerHTML = Monstres[i][0];
         o.appendChild(oa);

         var ob = document.createElement("td");
         ob.innerHTML = "&nbsp;";
         if (Monstres[i][1]>0)
         {
            ob.innerHTML = Monstres[i][1];
         }
         else
         {
         }
         o.appendChild(ob);

         var oc = document.createElement("td");
         oc.innerHTML += "&nbsp;";
         if (Monstres[i][1]==0)
         {
            oc.innerHTML = "Niveau à vérifier<br />";
         }
         if (!Monstres[i][2])
         {
            oc.innerHTML += "Ne lâche pas de composant";
         }
         o.appendChild(oc);

         c.appendChild(o);
      }
   }
}
