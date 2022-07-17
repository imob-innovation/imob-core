import { ChangeDetectorRef, Component, EventEmitter, Input, OnInit } from '@angular/core';
import { NzButtonSize } from 'ng-zorro-antd/button';
import { LastPropertiesCapturedInterface } from './model/imob-table.interface';


@Component({
  selector: 'lib-atlas-imob-table',
  templateUrl: './atlas-imob-table.component.html',
  styleUrls: ['./atlas-imob-table.component.scss'],
})
export class AtlasImobTableComponent implements OnInit {
  @Input() dataSource!: LastPropertiesCapturedInterface[];
  @Input() dataTitle!: any[];
  @Input() cbDeleteFunction: () => void;
  @Input() cbEditFunction: () => void;

  size: NzButtonSize = 'large';

  constructor(private changeDetectorRefs: ChangeDetectorRef) {}

  ngOnInit(): void {
    this.handleActionButton();
  }

  handleActionButton(): boolean {
    if (this.dataTitle.some((el) => el === 'Ações')) {
      return true;
    }
    return false;
  }
}
