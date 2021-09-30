import { NestedTreeControl } from '@angular/cdk/tree';
import { Component, OnInit } from '@angular/core';
import { MatTreeNestedDataSource } from '@angular/material/tree';

import {BehaviorSubject, Observable, of as observableOf} from 'rxjs';

export class FileNode {
  children: FileNode[]=[new FileNode()];
  filename: string='';
  type: any;
}

@Component({
  selector: 'app-tree',
  templateUrl: './tree.component.html',
  styleUrls: ['./tree.component.scss']
})
export class TreeComponent implements OnInit {

  ngOnInit(): void {
  }
  
  nestedTreeControl: NestedTreeControl<FileNode>;
  nestedDataSource: MatTreeNestedDataSource<FileNode>;
  dataChange: BehaviorSubject<FileNode[]> = new BehaviorSubject<FileNode[]>([]);

  constructor() {
    this.nestedTreeControl = new NestedTreeControl<FileNode>(this._getChildren);
    this.nestedDataSource = new MatTreeNestedDataSource();

    this.dataChange.subscribe(data => this.nestedDataSource.data = data);

    this.dataChange.next([
      {
        filename: "folder",
        type: "",
        children: [
          {
            filename: "test3",
            type: "exe",
            children: [],
          }
        ],
      },
      {
        filename: "test2",
        type: "exe",
        children: [],
      },
    ]);
  }

  private _getChildren = (node: FileNode) => { return observableOf(node.children); };
  
  hasNestedChild = (_: number, nodeData: FileNode) => {return !(nodeData.type); };

}
