class Builder

  attr_accessor :dir
  
  ####################################################
  # Initialize
  ####################################################
  def initialize()
      
      @no_way = [".","..",".DS_Store",".gitignore"]
      @source_folder = "./src"
      @dist_folder = "./dist"
      @dist_name = "./dist/fl.js"
      
  end

  def make(filters)
    raw_file = ""
    i = 0
    filen = ""
    
    filters.each do |l|
      filen = @source_folder + "/" + l
      file = File.new( filen , "r")
      raw_file.concat(file.read)
      raw_file.concat( "\n" )
      raw_file.concat( "\n" )
      file.close()
    end

    puts raw_file
    
    raw_file.concat( "\n\n" + raw_file )
    
    Dir::mkdir( @dist_folder ) unless File.exists?( @dist_folder )
    
    file = File.new( @dist_name , "a" )
    file.write(raw_file)
    file.close()
    
  end

end
  
def main(args)
  builder = Builder.new
  fl_lib = [ "Fl.js", "EventList.js", "Math.js", "Geom.js", "DisplayObject.js", "Timeline.js", "Scene.js" ]
  
  builder.make( fl_lib )
  
end
  
main(ARGV)