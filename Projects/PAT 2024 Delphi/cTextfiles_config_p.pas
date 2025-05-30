unit cTextfiles_config_p;

interface

uses
  System.SysUtils, System.Classes;

type
  TTextFileConfig = class
  private
    const
      USER_FILE = 'users.txt';
  public
  //No constructor. These class methods are way easier.
    class function UserExists(const Username: string): Boolean;
    class function ValidateUser(const Username, Password: string): Boolean;
    class procedure AddUser(const UserData: string);
  end;

implementation

class function TTextFileConfig.UserExists(const Username: string): Boolean;
var
  FileLines: TStringList;
  Line: string;
  Parts: TArray<string>;
begin
  Result := False;
  FileLines := TStringList.Create;
  try
    if FileExists(USER_FILE) then
    begin
      FileLines.LoadFromFile(USER_FILE);
      for Line in FileLines do
      begin
        Parts := Line.Split(['#']);
        if (Length(Parts) > 0) and (Parts[0] = Username) then
        begin
          Result := True;
          Break;
        end;
      end;
    end;
  finally
    FileLines.Free;
  end;
end;

class function TTextFileConfig.ValidateUser(const Username, Password: string): Boolean;
var
  FileLines: TStringList;
  Line: string;
  Parts: TArray<string>;
begin
  Result := False;
  FileLines := TStringList.Create;
  try
    if FileExists(USER_FILE) then
    begin
      FileLines.LoadFromFile(USER_FILE);
      for Line in FileLines do
      begin
        Parts := Line.Split(['#']);
        if (Length(Parts) >= 2) and (Parts[0] = Username) and (Parts[1] = Password) then
        begin
          Result := True;
          Break;
        end;
      end;
    end;
  finally
    FileLines.Free;
  end;
end;

class procedure TTextFileConfig.AddUser(const UserData: string);
var
  FileLines: TStringList;
begin
  FileLines := TStringList.Create;
  try
    if FileExists(USER_FILE) then
      FileLines.LoadFromFile(USER_FILE);
    FileLines.Add(UserData);
    FileLines.SaveToFile(USER_FILE);
  finally
    FileLines.Free;
  end;
end;

end.
