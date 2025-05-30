program PATMainForm_p;

uses
  Vcl.Forms,
  PATMainForm_u in 'PATMainForm_u.pas' {frmMain},
  cStylizeAll_u in 'cStylizeAll_u.pas',
  cTextfiles_config_p in 'cTextfiles_config_p.pas',
  Vcl.Themes,
  Vcl.Styles;

{$R *.res}

begin
  Application.Initialize;
  Application.MainFormOnTaskbar := True;
  TStyleManager.TrySetStyle('Tablet Dark');
  Application.CreateForm(TfrmMain, frmMain);
  Application.Run;
end.
