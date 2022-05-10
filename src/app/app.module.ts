import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatDialogModule} from "@angular/material/dialog";
import {MatButtonModule} from "@angular/material/button";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatIconModule} from "@angular/material/icon";
import {MatInputModule} from "@angular/material/input";
import {FormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {MatSelectModule} from '@angular/material/select';
import { ListProduitComponent } from './Produit/list-produit/list-produit.component';
import { CreateProduitComponent } from './Produit/create-produit/create-produit.component';
import { UpdateProduitComponent } from './Produit/update-produit/update-produit.component';
import { ListProduitBackComponent } from './Produit/list-produit-back/list-produit-back.component';
import { ListProduitFrontComponent } from './Produit/list-produit-front/list-produit-front.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { ListStockComponent } from './stock/list-stock/list-stock.component';
import { CreateStockComponent } from './stock/create-stock/create-stock.component';
import { ListStockBackComponent } from './stock/list-stock-back/list-stock-back.component';
import { UpdateStockComponent } from './stock/update-stock/update-stock.component';
import { ProduitDetailsComponent } from './Produit/produit-details/produit-details.component';
import { SafePipe } from './safe.pipe';
import { ProduitListStockComponent } from './stock/produit-list-stock/produit-list-stock.component';
import {MatPaginatorModule} from "@angular/material/paginator";
import {NgxPaginationModule} from 'ngx-pagination';
import {DownloadProduitComponent} from "./Produit/download-produit/download-produit.component";
import { ListPanierProduitComponent } from './panier-produit/list-panier-produit/list-panier-produit.component';
import { CreatePanierProduitComponent } from './panier-produit/create-panier-produit/create-panier-produit.component';
import { CreatePaiementComponent } from './paiement/create-paiement/create-paiement.component';
import { CreateFactureComponent } from './facture/create-facture/create-facture.component';
import { ListFactureBackComponent } from './facture/list-facture-back/list-facture-back.component';
import { DetailFactureComponent } from './facture/detail-facture/detail-facture.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    FooterComponent,
    ListProduitComponent,
    CreateProduitComponent,
    UpdateProduitComponent,
    ListProduitBackComponent,
    ListProduitFrontComponent,
    ListStockComponent,
    CreateStockComponent,
    ListStockBackComponent,
    UpdateStockComponent,
    ProduitDetailsComponent,
    SafePipe,
    ProduitListStockComponent,
    DownloadProduitComponent,
    ListPanierProduitComponent,
    CreatePanierProduitComponent,
    CreatePaiementComponent,
    CreateFactureComponent,
    ListFactureBackComponent,
    DetailFactureComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatButtonModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    FormsModule,
    HttpClientModule,
    MatSelectModule,
    Ng2SearchPipeModule,
    MatPaginatorModule,
    NgxPaginationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
