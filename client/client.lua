-- toggleNuiFrame(shouldShow)
-- SendReactMessage(action, data)
-- client/client.lua
print("Server Name: " .. cfg.ServerName)
print("Max Players: " .. cfg.MaxPlayers)

-- Example code to send config to UI

RegisterCommand("getserverinfo", function()
  toggleNuiFrame(true)
  debugPrint("Showing Inventory")
end)


RegisterNUICallback("getServerInfo", function(_, cb)
  local pvp = "disabled"
  if cfg.EnablePvP then pvp = "enabled" end
  local isPvp = pvp
  debugPrint("Sending server info to UI")
  cb({
    serverName = cfg.ServerName,
    StartingMoney = cfg.StartingMoney,
    EnablePvP = isPvp
  })
end)
