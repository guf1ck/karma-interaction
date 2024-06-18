function showInteraction(pKey, pText)
    local key

    if pKey ~= nil or pKey ~= '' then
        key = pKey
    else
        key = nil
    end

    SendNUIMessage({
        action = "show",
        key = key,
        text = pText
    })
end
exports("showInteraction", showInteraction)

function hideInteraction()
    SendNUIMessage({
        action = "hide",
    })
end
exports("hideInteraction", hideInteraction)
