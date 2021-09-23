import { HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatIconRegistry } from "@angular/material/icon";
import { DomSanitizer } from "@angular/platform-browser";
@Component({
  selector: 'app-icon',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.scss']
})
export class IconComponent implements OnInit {

  constructor(private matIconRegistry: MatIconRegistry,  private domSanitizer: DomSanitizer) { 

    this.matIconRegistry.addSvgIcon(
      "iconSVG",
      this.domSanitizer.bypassSecurityTrustResourceUrl("../../../assets/iconosSVG/huella.svg")
    );
  }

  ngOnInit(): void {
  }

}
