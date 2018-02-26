
function Factions(chat)
{
    var zone_check_timer = null;

    this.check_zone = function () {
        var zone_node = app.get_nearest_node("zone");

        if (zone_node === null)
        {
            this.setText("");
        }
        else
        {
            var owner_node = app.get_nearest_node("author");
            this.setText(node.label + " (" + owner_node.label + ")");
        }
    };

    this.load = function () {
        //zone_check_timer = setInterval(this.check_zone.bind(this), 2000);
    };

    this.load();
}