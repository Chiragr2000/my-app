import { Component } from '@angular/core';
import { ReloadService } from '../reload.service';

@Component({
  selector: 'app-reload',
  templateUrl: './reload.component.html',
  styleUrls: ['./reload.component.css'],
})
export class ReloadComponent {
  public message: string | undefined;
  constructor(private reloadService: ReloadService) {}
  ngOnInit() {}

  refresh() {
    this.reloadService.getData().subscribe((data) => {
      console.log(data.activity);
      this.message = data.activity;
    });
  }
}
